const eventsData = [
    {
      name: 'Vacunación Gratuita para perros',
      date: '2023-12-10',
      location: 'Todas las cabeceras departamentales de País',
      description: 'Se estaran vacunando cachorros con las vacunas esenciales para los perros que protegen de moquillo, parvovirosis, hepatitis vírica canina, rabia.',
      image: 'https://i.imgur.com/SBNJfWi.jpg',
    },
    {
      name: 'Vacunacion gratuita para gatos',
      date: '2023-12-15',
      location: 'Todas las cabeceras departamentales de País',
      description: 'Moquillo (panleucopenia), Gripe felina (rinotraqueítis: infección por calicivirus o herpesvirus), Leucemia felina (leucosis Peritonitis infecciosa felina (PIF), Rabia.',
      image: 'https://i.imgur.com/YmwfJ7u.jpg', 
    },
    {
      name: 'Vacunacion nacional de Ganado',
      date: '2023-12-20',
      location: 'Todas las cabeceras departamentales de País',
      description: 'Rinotraqueitis infecciosa bovina (IBR), Virus respiratorio sincitial bovino (VRSB), Diarrea viral bovina (DVB), Parainfluenza 3 (PI3), Mannheimia haemolytica, Pasteurella multocida, Histophilus somni.',
      image: 'https://i.imgur.com/9PKwZPd.jpg', 
    },
    {
      name: 'Esterilización de Perros y Gatos',
      date: '2023-12-21',
      location: 'Todas las cabeceras departamentales de País',
      description: 'Se estarán castrando mascotas por un costo bajo para controlar la sobreproblación.',
      image: 'https://i.imgur.com/oM6xsgl.png', 
    },
  ];
  
  
  function createEventElement(event) {
    const eventElement = document.createElement('div');
    eventElement.className = 'event';
  

    if (event.image) {
      const imgElement = document.createElement('img');
      imgElement.src = event.image;
      imgElement.alt = event.name;
      eventElement.appendChild(imgElement);
    }
  
    const html = `
      <h2>${event.name}</h2>
      <p><strong>Fecha:</strong> ${event.date}</p>
      <p><strong>Lugar:</strong> ${event.location}</p>
      <p>${event.description}</p>
    `;
  
    eventElement.innerHTML += html;
    return eventElement;
  }
  
  
  const eventsContainer = document.getElementById('events-container');
  

  eventsData.forEach(event => {
    const eventElement = createEventElement(event);
    eventsContainer.appendChild(eventElement);
  });
