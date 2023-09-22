const scrollContainer = document.querySelector('.scroll-container');
const sections = document.querySelectorAll('.section');
const scrollLeftButton = document.getElementById('scroll-left-btn');
const scrollRightButton = document.getElementById('scroll-right-btn');


let currentIndex = 0;


function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    })
}

scrollLeftButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    showSection(currentIndex);
});

scrollRightButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    showSection(currentIndex);
});
