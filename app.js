
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', currentYear);
    }
});


const typedEl = document.querySelector('.typed-base');
if (typedEl) {
    const roles = ['Backend', 'DevOps', 'System Administration'];
    let idx = 0;
    setInterval(() => {
        idx = (idx + 1) % roles.length;
        typedEl.textContent = roles[idx];
    }, 2400); 
}

const skills = [ 'Linux', 'Git', 'Bash', 'Neovim', 'Python', 'C / C++' ];

const skillTags = document.querySelector('.skill-tags')

skills.forEach((skill, idx) => {
    console.log("skill: " + skill + ", idx: " + idx);

    skillTags.innerHTML += "<span class=\"skill-tag\">"+skill+"</span>"
});
