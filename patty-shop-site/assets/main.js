document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('[data-landingsite-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-landingsite-mobile-menu]');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const faqItems = document.querySelectorAll('[data-landingsite-faq-item]');
  faqItems.forEach((item) => {
    const button = item.querySelector('[data-landingsite-faq-question]');
    const answer = item.querySelector('[data-landingsite-faq-answer]');
    const icon = button?.querySelector('i');

    if (button && answer) {
      button.addEventListener('click', () => {
        const isHidden = answer.classList.contains('hidden');

        faqItems.forEach((otherItem) => {
          const otherAnswer = otherItem.querySelector('[data-landingsite-faq-answer]');
          const otherIcon = otherItem.querySelector('[data-landingsite-faq-question] i');
          otherAnswer?.classList.add('hidden');
          otherIcon?.classList.remove('rotate-180');
        });

        if (isHidden) {
          answer.classList.remove('hidden');
          icon?.classList.add('rotate-180');
        }
      });
    }
  });
});
