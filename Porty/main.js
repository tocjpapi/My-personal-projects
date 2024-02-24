const hasAnimationPlayed = (element) => {
  const animatedItems = localStorage.getItem('animatedItems');
  return animatedItems && animatedItems.includes(element.id);
};

const markAsPlayed = (element) => {
  const animatedItems = localStorage.getItem('animatedItems') || '';
  localStorage.setItem('animatedItems', `${animatedItems}${element.id},`);
  element.classList.add('played');
};

const elementsToAnimate = document.querySelectorAll('.hmu h4, .hmu h5, .hmu h6');

let delay = 0;
const speed = 0.1; // Adjust speed in milliseconds
const duration = 0.5; // Adjust duration in seconds

elementsToAnimate.forEach((element) => {
  if (!hasAnimationPlayed(element)) {
    const text = element.textContent;
    element.textContent = ''; // Clear the current text

    for (let i = 0; i < text.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = text[i];

      letter.style.opacity = 0; // Set initial opacity to 0

      TweenMax.to(letter, duration, {
        opacity: 1,
        delay: delay / 1000, // Convert delay to seconds
        ease: Power2.easeInOut,
      });

      element.appendChild(letter);
      delay += speed;
    }

    markAsPlayed(element); // Store animation status and mark as played
  }
});
