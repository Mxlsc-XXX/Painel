  // Category filter logic
    const categoryButtons = document.querySelectorAll('.category-btn');
    const cards = document.querySelectorAll('.card');

    function setActiveCategory(button) {
      categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
    }

    function filterCards(category) {
      if (category === 'all') {
        cards.forEach(card => {
          card.style.display = 'flex';
        });
      } else {
        cards.forEach(card => {
          if (card.dataset.category.split(' ').includes(category)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }
    }

    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        setActiveCategory(button);
        filterCards(button.dataset.category);
      });
    });

    // Initialize showing all cards
    filterCards('all');