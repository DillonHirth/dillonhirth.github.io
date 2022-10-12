const projectCard = document.querySelectorAll('.project-card-container')
projectCard.forEach(box => {
    box.addEventListener('mouseover', () => box.classList.toggle("testClass"));
});
projectCard.forEach(box => {
    box.addEventListener('mouseout', () => box.classList.toggle("testClass"));
});