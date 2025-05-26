let prevwidth = 0;

window.addEventListener("load", () => {
    const canvas = document.getElementById("dirt");
    const ctx = canvas.getContext("2d");

    const behind = document.getElementById("deforestation")

    const width = behind.clientWidth;
    const height = behind.clientHeight;

    prevwidth = width;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#752f16";
    ctx.fillRect(0, 0, width, height);

    const pebbleCount = 150;
    for (let i = 0; i < pebbleCount; i++) {
        const px = Math.random() * width;
        const py = Math.random() * height;
        const radius = Math.random() * 2 + 1;

        ctx.beginPath();
        ctx.fillStyle = Math.random() < 0.5 ? "#8B7D7B" : "#5C4033";
        ctx.ellipse(px, py, radius * 1.5, radius, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    let isDrawing = false;

    function scratch(x, y) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
    }

    // MOUSE EVENTS
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        scratch(e.clientX - rect.left, e.clientY - rect.top);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        scratch(e.clientX - rect.left, e.clientY - rect.top);
    });

    canvas.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    // TOUCH EVENTS
    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    });

    canvas.addEventListener("touchend", () => {
        isDrawing = false;
    });
});

window.addEventListener("resize", () => {
    const canvas = document.getElementById("dirt");
    const ctx = canvas.getContext("2d");

    const behind = document.getElementById("deforestation")

    const width = behind.clientWidth;
    const height = behind.clientHeight;

    if (prevwidth == width) return;

    prevwidth = width;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#752f16";
    ctx.fillRect(0, 0, width, height);

    const pebbleCount = 150;
    for (let i = 0; i < pebbleCount; i++) {
        const px = Math.random() * width;
        const py = Math.random() * height;
        const radius = Math.random() * 2 + 1;

        ctx.beginPath();
        ctx.fillStyle = Math.random() < 0.5 ? "#8B7D7B" : "#5C4033";
        ctx.ellipse(px, py, radius * 1.5, radius, 0, 0, Math.PI * 2);
        ctx.fill();
    }
});

function getCoords(elem) { // from StackOverflow
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

window.addEventListener("load", () => {
    const parent = document.getElementById("leafs");
    const src = "../images/leaf-";
    const ref = document.getElementById("endemic");
    const width = ref.clientWidth;
    const height = ref.clientHeight;
    const rect = getCoords(ref);
    const top = rect.top
    const left = rect.left;

    const w = 100;

    for (let i = 0; i < 20; i++) {
        const leaf = document.createElement("img");
        leaf.src = src + Math.round(Math.random() * 5 + 1) + ".svg";
        leaf.width = w;
        leaf.classList.add("leaf");
        leaf.style.left = `${Math.round(Math.random() * width - (w / 2)) + left}px`;
        leaf.style.top = `${Math.round(Math.random() * height - (w / 2)) + top}px`;
        leaf.style.transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        leaf.onmousedown = dragMouseDown;
        leaf.ontouchstart = dragTouchStart;

        function dragTouchStart(t) {
            t.preventDefault();
            e = t.touches[0];
            
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            document.ontouchend = closeTouchElement;
            document.ontouchmove = elementTouchDrag;
        }

        function closeTouchElement(e) {
            document.ontouchend = null;
            document.ontouchmove = null;
        }

        function elementTouchDrag(t) {
            t.preventDefault()
            let e = t.touches[0]
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            leaf.style.top = (leaf.offsetTop - pos2) + "px";
            leaf.style.left = (leaf.offsetLeft - pos1) + "px";
        }

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            leaf.style.top = (leaf.offsetTop - pos2) + "px";
            leaf.style.left = (leaf.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        parent.appendChild(leaf);
    }
})
