const twitterIcon = document.getElementById('twitter-icon');
const instagramIcon = document.getElementById('instagram-icon');
const firefoxIcon = document.getElementById('firefox-icon');


function addHoverEffect(element) {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover-effect');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('hover-effect');
    });
}

addHoverEffect(twitterIcon);
addHoverEffect(instagramIcon);
addHoverEffect(firefoxIcon);
