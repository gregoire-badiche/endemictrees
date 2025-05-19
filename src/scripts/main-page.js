window.addEventListener("load", _ => {
    const p = document.querySelector('#main-picture');

    p.onmouseenter = __ => {
        p.style.transform = 'rotate(-5deg)';
    }

    p.onmouseleave = __ => {
        p.style.transform = 'rotate(5deg)';
    }
});