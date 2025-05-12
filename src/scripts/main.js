window.onload = () => {
    const titleArray = document.querySelectorAll(".endemic-trees");
    titleArray.forEach(el => {
        const letterArray = el.innerHTML.split("");
        el.innerHTML = "";
        const possibleAngles = [-10, -5, 5, 10];
        letterArray.forEach(letter => {
            const r = possibleAngles[Math.round(Math.random() * (possibleAngles.length - 1))];
            if(letter === " ") letter = "&nbsp;";
            el.innerHTML += `<span class="endemic-trees-letter" style="transform: rotate(${r}deg);">${letter}</span>`;
        });
    });
};
