document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: "Project 1", description: "This is the first project." },
        { title: "Project 2", description: "This is the second project." },
        { title: "Project 3", description: "This is the third project." }
    ];

    const projectList = document.getElementById('project-list');
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formStatus.textContent = "Thank you for your message, we'll get back to you soon!";
        contactForm.reset();
    });
});
