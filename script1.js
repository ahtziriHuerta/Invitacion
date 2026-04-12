function openAndRedirect() {
    const container = document.getElementById('mainContainer');
    
    // 1. Abrimos la "X"
    container.classList.add('is-open');
  
    // 2. Desvanecemos el sobre rápido (a los 600ms)
    setTimeout(function() {
      container.style.transition = "opacity 0.4s ease";
      container.style.opacity = "0";
    }, 600);
  
    // 3. Saltamos al index1 (a los 900ms)
    // Al bajar el tiempo, el navegador no tiene "espacio" para mostrar blanco o verde
    setTimeout(() => {
      window.location.href = "index1.html";
    }, 900); 
  }