export const clickLabel = (item) => {
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      item.click();
    }
  });
};

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in');
      }
    });
  },
  { threshold: 1 }
);
