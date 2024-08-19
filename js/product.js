document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const images = card.querySelectorAll('.card-image');
        let currentIndex = 0;

        const showImage = (index) => {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        };

        const leftArrow = card.querySelector('.left-arrow');
        const rightArrow = card.querySelector('.right-arrow');

        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        // Initialize with the first image
        showImage(currentIndex);
    });
});
// JavaScript to handle dropdown item clicks
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const category = this.getAttribute('data-category');
        const section = document.getElementById(category);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});