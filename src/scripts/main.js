window.onload = () => {
    const titleArray = document.querySelectorAll(".endemic-trees");
    titleArray.forEach(el => {
        const letterArray = "Endemic Trees".split("");
        el.innerHTML = "";
        const possibleAngles = [-10, -5, 5, 10];
        letterArray.forEach(letter => {
            const r = possibleAngles[Math.round(Math.random() * (possibleAngles.length - 1))];
            const c = Math.round(Math.random() * 2) + 1;
            if(letter === " ") letter = "&nbsp;";
            const newEl = document.createElement("span");
            newEl.classList.add("endemic-trees-letter");
            newEl.style.color = `var(--green-${c})`;
            newEl.innerHTML = letter;
            newEl.style.transform = `rotate(${r}deg)`;
            newEl.onmouseover = e => {
                const c = Math.round(Math.random() * 2) + 1;
                const r = possibleAngles[Math.round(Math.random() * (possibleAngles.length - 1))];
                newEl.style.color = `var(--green-${c})`;
                newEl.style.transform = `rotate(${r}deg)`;
            }
            el.appendChild(newEl);
        });
    });
};
