const switchBtn = document.querySelector('.catalog-item__switchLink'),
      cardContent = document.querySelector('.catalog-item__content'),
      cardList = document.querySelector('.catalog-item__list');

switchBtn.addEventListener('click', () => {
    cardContent.classList.toggle('catalog-item__content_active');
    cardContent.classList.toggle('catalog-item__list_active');
});