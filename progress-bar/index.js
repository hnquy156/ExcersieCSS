document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(progressBar => {
        const label = progressBar.children[0];
        const line = progressBar.children[1];
        let progressLine = line.firstElementChild;

        const value = Math.floor(Math.random() * 101);
        label.innerHTML = value + '%';

        let valueLoading = 0;
        const timeTotal = 1500;
        const speedProgress = value / timeTotal;
        let color = 'red';
        let interval = setInterval( () => {
            valueLoading += speedProgress*5;

            if (valueLoading < 30) {
                color = 'red';
            } else if (valueLoading < 60) {
                color = "#FF9900";
            } else if (valueLoading < 95) {
                color = 'aqua';
            } else {
                color = "#00FF00";
            }
            if (valueLoading >= 99) {
                progressLine.style.borderRadius = '8px';
            }

            progressLine.style.width = valueLoading + '%';
            progressLine.style.boxShadow = `0px 0px 15px 4px ${color}`;
            progressLine.style.backgroundColor = `${color}`;
            if (valueLoading > value)
                clearInterval(interval);
        }, speedProgress);

    });


})