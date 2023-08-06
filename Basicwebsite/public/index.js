function cal() {
    const price = Number(document.getElementById("price").value);
    const items = Number(document.getElementById("items").value);
    let result = 0
    if (price >= 0 && items >= 0) {
        for(let i = 1 ; i <= items ; i++){
            result += price;
        }
        document.getElementById("show").innerHTML = result + " บาท"
    }
}