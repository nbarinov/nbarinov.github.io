var contentLoadedCallback = function () {
    year.innerHTML = new Date().getFullYear();

    var positionClick = function () {
        if (egg.style.color !== 'rgb(255, 170, 221)') {
            egg.style.color = '#fad';
            return;
        }

        egg.style.color = 'unset';
    };

    position.addEventListener('click', positionClick);
};

document.addEventListener('DOMContentLoaded', contentLoadedCallback);