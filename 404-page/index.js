


document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const colorArr = ["#FF6600","#FF0000","#880000","#FF9933","#FF3300","#FF3366"]

    setInterval(createStars, 70);

    function createStars() {
        const starElement = document.createElement('div');
        const top = Math.floor(Math.random() * screen.height);
        starElement.style.top = top + 'px';

        const color = Math.floor(Math.random() * 6);
        starElement.style.backgroundColor = colorArr[color];
        starElement.classList.add('star');
        body.appendChild(starElement);
        moveStart(starElement);
    }

    function moveStart(starElement) {
        let right = 0;
        const move = 2 + Math.floor(Math.random() * 2);
        setInterval( () => {

            if (right > screen.width) {
                starElement.remove();
            }
            right += move;
            starElement.style.right = right + 'px';
        }, 10);
    }

});