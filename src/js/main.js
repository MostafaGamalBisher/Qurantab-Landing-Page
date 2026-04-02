// ============================================================
// MAIN ENTRY POINT
// Import modules here and initialize the application.
// ============================================================
import '../scss/main.scss';
import { clickLabel } from './utils';

const faqQuestions = document.querySelectorAll('.faq_question');

faqQuestions.forEach((element) => clickLabel(element));
