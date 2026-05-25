import pygame
import threading
import random
import time

# Inicializar pygame
pygame.init()

WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Simulador de Tráfico Concurrente")

# Colores
WHITE = (255, 255, 255)
GRAY = (50, 50, 50)
GREEN = (0, 200, 0)
RED = (200, 0, 0)
BLUE = (0, 0, 255)

# Semáforos
semaforo_ns = True  # True = verde NS
lock = threading.Lock()

# Lista de autos
cars = []

class Car:
    def __init__(self, direction):
        self.direction = direction
        if direction == "NS":
            self.x = WIDTH//2 - 20
            self.y = 0
            self.speed = random.randint(2, 4)
        else:
            self.x = 0
            self.y = HEIGHT//2 + 20
            self.speed = random.randint(2, 4)

    def move(self):
        global semaforo_ns

        if self.direction == "NS":
            # detener en semáforo
            if not semaforo_ns and self.y < HEIGHT//2 - 40:
                return
            self.y += self.speed
        else:
            if semaforo_ns and self.x < WIDTH//2 - 40:
                return
            self.x += self.speed

    def draw(self):
        pygame.draw.rect(screen, BLUE, (self.x, self.y, 20, 20))


def generar_autos():
    while True:
        time.sleep(random.uniform(1, 2))
        with lock:
            direction = random.choice(["NS", "EO"])
            cars.append(Car(direction))


def cambiar_semaforo():
    global semaforo_ns
    while True:
        time.sleep(5)
        semaforo_ns = not semaforo_ns
        print("🚦 Cambio de semáforo:", "NS VERDE" if semaforo_ns else "EO VERDE")


# Hilos
threading.Thread(target=generar_autos, daemon=True).start()
threading.Thread(target=cambiar_semaforo, daemon=True).start()

# Loop principal
running = True
clock = pygame.time.Clock()

while running:
    screen.fill(WHITE)

    # Dibujar calles
    pygame.draw.rect(screen, GRAY, (WIDTH//2 - 50, 0, 100, HEIGHT))
    pygame.draw.rect(screen, GRAY, (0, HEIGHT//2 - 50, WIDTH, 100))

    # Dibujar semáforos
    if semaforo_ns:
        pygame.draw.circle(screen, GREEN, (WIDTH//2 - 70, HEIGHT//2 - 70), 10)
        pygame.draw.circle(screen, RED, (WIDTH//2 + 70, HEIGHT//2 + 70), 10)
    else:
        pygame.draw.circle(screen, RED, (WIDTH//2 - 70, HEIGHT//2 - 70), 10)
        pygame.draw.circle(screen, GREEN, (WIDTH//2 + 70, HEIGHT//2 + 70), 10)

    # Eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Mover autos
    with lock:
        for car in cars:
            car.move()
            car.draw()

    pygame.display.flip()
    clock.tick(60)

pygame.quit()