const twitterIcon = document.getElementById('twitter-icon');
const telegramIcon = document.getElementById('telegram-icon');

function addHoverEffect(element) {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover-effect');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('hover-effect');
    });
}

addHoverEffect(twitterIcon);
addHoverEffect(telegramIcon);
