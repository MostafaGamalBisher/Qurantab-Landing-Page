// ============================================================
// MAIN ENTRY POINT
// Import modules here and initialize the application.
// ============================================================
import '../scss/main.scss';
import { clickLabel, observer } from './utils';

const faqQuestions = document.querySelectorAll('.faq_question');

faqQuestions.forEach((element) => clickLabel(element));

const hero = document.querySelector('.hero-section');

setTimeout(() => {
  hero.classList.add('fade-in');
}, 1000);

const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
  observer.observe(section);
});
