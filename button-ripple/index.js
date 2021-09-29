
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('button');

    function createRipple(btn, e) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        const x = e.clientX - btn.offsetLeft;
        const y = e.clientY - btn.offsetTop;
        ripple.style.top = y + 'px';
        ripple.style.left = x + 'px';

        btn.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 2000);
    }

    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            createRipple(btn, e)
        });

        let hasEffective = true;
        btn.addEventListener('mousemove', e => {
            if (hasEffective) {
                hasEffective = false;
                createRipple(btn, e)
    
                setTimeout(() => {
                    hasEffective = true;
                }, 100);
                
            }
        });
    });
}) 