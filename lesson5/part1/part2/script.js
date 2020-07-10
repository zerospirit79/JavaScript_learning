const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        buttonClick(event);
    })
});
/**
 * @param {MouseEvent} clickedButtonEvent
 */
function buttonClick(clickedButtonEvent) {
    const cardText = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardText,
        img: cardText.querySelector('img'),
        productName: cardText.querySelector('.productName'),
        button: cardText.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * @param {Object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

/**
 * @param {Object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur vero ipsum cum ex earum ullam dolor minima obcaecati, officiis nulla harum facilis quis. Fugiat provident maiores, soluta distinctio aspernatur totam.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';

}