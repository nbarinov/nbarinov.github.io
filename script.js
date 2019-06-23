var contentLoadedCallback = function () {
    year.innerHTML = new Date().getFullYear();

    var titleClick = function () {
        if (egg.style.color !== 'rgb(255, 170, 221)') {
            egg.style.color = '#fad';
            return;
        }

        egg.style.color = '#000';
    };

    title.addEventListener('click', titleClick);
};

document.addEventListener('DOMContentLoaded', contentLoadedCallback);