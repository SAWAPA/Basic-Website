function cal() {
    const R = Number(document.getElementById("R").value);
    const r = Number(document.getElementById("r").value);
    const h = Number(document.getElementById("h").value);
    const pi = 22/7;
    const result = pi * h * (R**2 - r**2);
    document.getElementById("show").innerHTML = result
}