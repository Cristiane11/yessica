const projects =[
    {
        title:'react',
        description:'A wordpress website to a local broker',
        technologies:["HTML", "CSS", "JavaScript", "Wordpress", "php"],
        image:'./#',
        link:'./google.com'
    },
     {
        title:'bootstrap',
        description:'A wordpress website to a local broker',
        technologies:["React", "CSS", "JavaScript", "Wordpress", "php"],
        image:'./#',
        link:'./google.com'
    },
     {
        title:'flexbox',
        description:'A wordpress website to a local broker',
        technologies:["Bootstrap", "CSS", "JavaScript", "Wordpress", "php"],
        image:'./#',
        link:'./google.com'
    },
     {
        title:'Medical Supplies',
        description:'A wordpress website to a local broker',
        technologies:["flexbox", "CSS", "JavaScript", "Wordpress", "php"],
        image:'./#',
        link:'./google.com'
    }
]
const container = document.getElementById('project-container');
const dropDown = document.getElementById('filter-select');
const sortBtn = document.getElementById('sort-btn')

let currentProjects =[...projects];
// Function to display projects
function displayProjects(list){
container.innerHTML = '';//clear container
 list.forEach(project =>{
    
    const card = document.createElement('div');
    card.className = "project-card";
    card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
    <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
    });
 }
    displayProjects(currentProjects);

    dropDown.addEventListener('change', (event) => {
  const value = event.target.value;
  if (value === 'all') {
    currentProjects = [...projects];
  } else if (value === 'bootstrap'){
    currentProjects = projects.technologies.includes("bootstrap");
  }else if (value === 'flexbox'){
    currentProjects = projects.technologies.includes("flexbox");
  }else if (value === 'react'){
    currentProjects = projects.technologies.includes("react");
  }
  
  displayProjects(currentProjects);
});

// Sort by title
sortBtn.addEventListener('click', () => {
  currentProjects.sort((a, b) => a.title.localeCompare(b.title));
  displayProjects(currentProjects);
});

