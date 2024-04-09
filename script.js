// Función para mostrar los proyectos
function mostrarProyectos(proyectos) {
    const contenedorProyectos = document.querySelector('.proyectos');
  
    proyectos.forEach(proyecto => {
      // Crea un elemento para cada proyecto
      const divProyecto = document.createElement('div');
      divProyecto.classList.add('proyecto');
  
      // Agrega el contenido del proyecto
      const h3 = document.createElement('h3');
      h3.textContent = proyecto.titulo;
      divProyecto.appendChild(h3);
  
      const img = document.createElement('img');
      img.src = proyecto.imagen;
      divProyecto.appendChild(img);
  
      const p = document.createElement('p');
      p.textContent = proyecto.descripcion;
      divProyecto.appendChild(p);

      const button = document.createElement('button');
      button.textContent = proyecto.textButton;
      button.addEventListener('click',()=>{
        window.open(proyecto.link, '_blank');
      })
      divProyecto.appendChild(button);

  
      // Agrega el proyecto al contenedor
      contenedorProyectos.appendChild(divProyecto);
    });
  }
  
  // Array de ejemplo de proyectos
  const proyectos = [
    {
      titulo: "Decrypter-Encrypter",
      imagen: "./img/encrypt.png",
      descripcion: "un trabajo de encriptar y desencriptar con unas reglas especificas",
      link: "https://jer0r0.github.io/Encrypter-Decrypter/",
      textButton : "Vizualizacion",
    },
    {
      titulo: "Life Game",
      imagen: "./img/lifegame.png",
      descripcion: "El juego de la vida de conway",
      link: "https://github.com/jer0r0/LifeGame/archive/refs/heads/main.zip",
      textButton : "Descargar",
    },
  ];
  
  // Muestra los proyectos en la página
  mostrarProyectos(proyectos);
  