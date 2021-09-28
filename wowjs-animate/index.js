const list = document.querySelector('.list-items');
const totalBoxes = 50;
const colorArr = ['black', 'blue', 'green', 'red', 'pink', 'gray', 'white', 'cyan'];
const animateArr = [
    'pulse', 'shakeX', 'swing', 'tada', 'backInDown', 'bounceOut',
    'fadeRight', 'fadeOutDownBig', 'flip', 'lightSpeedInLeft',
    'rotateIn', 'rotateOutUpRight', 'rollIn'
]

for (let i = 1; i <= totalBoxes; i++) {
    const item = document.createElement('div');
    const colorBackgroundFrom = colorArr[Math.floor(Math.random() * colorArr.length)];
    const colorBackgroundTo = colorArr[Math.floor(Math.random() * colorArr.length)];
    const colorDirection = Math.random() * 360;
    const animateItem = animateArr[Math.floor(Math.random() * animateArr.length)];

    item.classList.add('item', 'wow', animateItem);
    
    // item.style.background = colorBackground;
    item.style.background = `linear-gradient( ${colorDirection}deg, ${colorBackgroundFrom}, ${colorBackgroundTo})`;
    item.setAttribute('data-wow-duration', '2s');
    list.appendChild(item);
}