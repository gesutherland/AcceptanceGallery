// GSAP Animation for Hover Effects
const images = document.querySelectorAll('.w-full');
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.05, duration: 0.3 });
    });
    image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.3 });
    });
});

// Modal Logic for Zoom-In on Click
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const collegeName = document.getElementById('college-name');

document.querySelectorAll('.w-full').forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modalImg.src = image.src;
        collegeName.textContent = `College ${index + 1}`;
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});
