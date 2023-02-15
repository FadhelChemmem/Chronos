var btn = document.getElementById('btn');
var id = document.getElementById('id');
var password = document.getElementById('password');
//l'affectation directe lance la fonction au démarrage ?
btn.addEventListener("click", function () { validate() });
//
password.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validate();
    }
});

id.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validate();
    }
});
function validate() {
    if (id.value === "fadhel" && password.value === "fadhel") {
        window.location.assign("./Workflow.html");
    } else {
        let startColor = { r: 255, g: 0, b: 0 };
        let endColor = { r: 0, g: 0, b: 0 };
        fade(btn, 'border-color', 'color', startColor, endColor, 1000) //fonction internet
        id.value = "";
        password.value = "";
    }

}
//fonction internet
fade = function (el, property1, property2, start, end, duration) {
    let interval = 10;
    let steps = duration / interval;
    let step_u = 1.0 / steps;
    let u = 0.0;
    let theInterval = setInterval(function () {
        if (u >= 1.0) { clearInterval(theInterval) }
        let r = parseInt(lerp(start.r, end.r, u));
        let g = parseInt(lerp(start.g, end.g, u));
        let b = parseInt(lerp(start.b, end.b, u));
        let colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
        el.style.setProperty(property1, colorname);
        el.style.setProperty(property2, colorname);
        u += step_u;
    }, interval);
};
lerp = function (a, b, u) {
    return (1 - u) * a + u * b;
};
