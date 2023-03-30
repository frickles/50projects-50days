const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // Get x & y values
    const x = e.clientX;
    const y = e.clientY;

    // Get top and bottom of button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Get click-positions in button
    const xInsideBtn = x - buttonLeft;
    const yInsideBtn = y - buttonTop;

    // Create span with circle-class
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInsideBtn + 'px';
    circle.style.left = xInsideBtn + 'px';

    // Add circle to the DOM
    this.appendChild(circle);

    // Remove span (circle) when done
    setTimeout(() => circle.remove(), 500);
  });
});
