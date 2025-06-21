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


projects.forEach(project =>{
    if(project.technologies.includes('Bootstrap')){
     const cardBootstrap = document.createElement('div');
    card.className = "project-card";
    card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
    <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(cardBootstrap)   
    }else if(project.technologies.includes('React')){
      
    const cardReact = document.createElement('div');
    card.className = "project-card";
    card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
    <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(cardReact)   
    }else if (project.technologies.includes('flexbox')){
    const cardFlexbox= document.createElement('div');
    card.className = "project-card";
    card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
    <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(cardFlexbox)   
    }
});
dropDown.addEventListener('change', (event)=>{
    const value = event.target.value;
    let filtered = [];
    if (value === 'all'){
        filtered = projects;
    }else if (value === 'bootstrap'){
        filtered = cardBootstrap;
    }else if (value === 'flexbox' ){
        filtered = cardFlexox;
    }else if(value === 'react'){
      filtered = cardReact;   
    }
  sortBtn.onclick = container(filtered);

});
