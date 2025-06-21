const projects =[
    {
        title:'React',
        description:'A wordpress website to a local broker',
        technologies:["React","HTML", "CSS", "JavaScript", "Wordpress", "php"],
        image:'./#',
        link:'./google.com'
    },
     {
        title:'React',
        description:'A wordpress website to a local broker',
        technologies:["React", "CSS", "JavaScript", "Wordpress", "php"],
        image:'./#',
        link:'./google.com'
    },
     {
        title:'Flexbox',
        description:'A wordpress website to a local broker',
        technologies:["flexbox","Bootstrap", "CSS", "JavaScript", "Wordpress", "php"],
        image:'./#',
        link:'./google.com'
    },
     {
        title:'FlexBox & Bootstrap Supplies',
        description:'A wordpress website to a local broker',
        technologies:["flexbox", "CSS", "JavaScript", "Wordpress","bootstrap", "php"],
        image:'./#',
        link:'./google.com'
    }
]
const container = document.getElementById('project-container');
const dropDown = document.getElementById('filter-select');


let currentProjects = [...projects];
// Function to display projects
function displayProjects(list){
container.innerHTML = '';//clear container
 list.forEach(project =>{
    
    const card = document.createElement('div');
    card.className = "project-card";
    card.innerHTML = `
    <img src="${project.image}" alt="#">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
    <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
    });
 }
    displayProjects(currentProjects);
// Filter logic
dropDown.addEventListener('change', (event) => {
  const value = event.target.value.toLowerCase();
  if (value === 'all') {
    currentProjects = [...projects];
  } else {
    currentProjects = projects.filter(project =>
      project.technologies.some(tech =>
        tech.toLowerCase() === value
      )
    );
  }
  displayProjects(currentProjects);
});

// Sort by title
sortBtn.addEventListener('click', () => {
  currentProjects.sort((a, b) => a.title.localeCompare(b.title));
  displayProjects(currentProjects);
});

