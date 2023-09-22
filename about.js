// Get DOM elements
const scrollLeftBtn = document.getElementById('scroll-left-btn');
const scrollRightBtn = document.getElementById('scroll-right-btn');
const scrollContainer = document.querySelector('.scroll-container');

// Set initial scroll position
let scrollPosition = 0;

// Function to scroll left
function scrollLeft() {
    scrollPosition -= 1;
    updateScroll();
}

// Function to scroll right
function scrollRight() {
    scrollPosition += 1;
    updateScroll();
}

// Function to update the scroll position
function updateScroll() {
    const sectionWidth = 100; // Adjust this value based on your section width
    const maxScroll = (scrollContainer.children.length - 1) * sectionWidth;
    scrollPosition = Math.min(maxScroll, Math.max(0, scrollPosition));
    scrollContainer.style.transform = `translateX(-${scrollPosition * sectionWidth}%)`;
}

// Add click event listeners to scroll buttons
scrollLeftBtn.addEventListener('click', scrollLeft);
scrollRightBtn.addEventListener('click', scrollRight);