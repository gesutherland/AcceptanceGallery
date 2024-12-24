const container = document.getElementById('letters-container');
const schoolNameDisplay = document.getElementById('school-name');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const uploadInput = document.getElementById('upload');
let letters = [];
let currentLetterIndex = 0;

function updateLetters() {
  letters.forEach((letter, index) => {
    const offset = index - currentLetterIndex;

    if (offset === 0) {
      letter.element.classList.add('active');
      letter.element.classList.remove('hidden');
      schoolNameDisplay.textContent = letter.schoolName;
      letter.element.style.transform = 'rotateY(0deg)';
    } else {
      letter.element.classList.remove('active');
      letter.element.classList.add('hidden');
      letter.element.style.transform = `rotateY(${offset * 60}deg) translateZ(${Math.abs(offset) * -300}px)`;
    }
  });
}

prevButton.addEventListener('click', () => {
  if (letters.length === 0) return;
  currentLetterIndex = (currentLetterIndex - 1 + letters.length) % letters.length;
  updateLetters();
});

nextButton.addEventListener('click', () => {
  if (letters.length === 0) return;
  currentLetterIndex = (currentLetterIndex + 1) % letters.length;
  updateLetters();
});

uploadInput.addEventListener('change', (event) => {
  const files = Array.from(event.target.files);

  files.forEach((file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target.result;

      const schoolName = prompt('Enter the school name for this letter:');
      const letterElement = document.createElement('div');

      letterElement.classList.add('letter', 'hidden');
      letterElement.style.backgroundImage = `url(${imageUrl})`;

      container.appendChild(letterElement);

      letters.push({
        element: letterElement,
        schoolName: schoolName || 'Unknown School',
      });

      updateLetters();
    };

    reader.readAsDataURL(file);
  });
});

updateLetters();
