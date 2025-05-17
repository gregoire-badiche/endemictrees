window.onload = () => {
    const titleArray = document.querySelectorAll(".endemic-trees");
    titleArray.forEach(el => {
        const letterArray = "Endemic Trees".split("");
        el.innerHTML = "";
        const possibleAngles = [-10, -5, 5, 10];
        letterArray.forEach(letter => {
            const r = possibleAngles[Math.round(Math.random() * (possibleAngles.length - 1))];
            const c = Math.round(Math.random() * 2) + 1;
            if (letter === " ") letter = "&nbsp;";
            const newEl = document.createElement("span");
            newEl.classList.add("endemic-trees-letter");
            newEl.style.color = `var(--green-${c})`;
            newEl.innerHTML = letter;
            newEl.style.transform = `rotate(${r}deg)`;

            el.appendChild(newEl);
        });

        const change = () => {
            const collection = el.querySelectorAll("span");
            const re = Math.round(Math.random() * (collection.length - 1));
            const newEl = collection[re];
            const c = Math.round(Math.random() * 2) + 1;
            const r = possibleAngles[Math.round(Math.random() * (possibleAngles.length - 1))];
            newEl.style.color = `var(--green-${c})`;
            newEl.style.transform = `rotate(${r}deg)`;
        };

        setInterval(change, 200);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    toggleBtn.addEventListener("click", () => {
        links.classList.toggle("show");
    });
});

