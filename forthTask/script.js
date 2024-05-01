const up = prompt("Введіть верхню межу");
const down = prompt("Введіть нижнюю межу");
const step = prompt("Введіть крок");
const table = document.querySelector(".body")

function doOperations(x) {
    let y;
    if (x < 4) {
        y = Math.tan(x) - x ** 2
    } else if(x === 4) {
        y = 35 * Math.PI
    } else {
        y = Math.log(x) + 3
    };
    return y
}

for(let x = parseInt(down); x <= parseInt(up); x+=parseInt(step)) {
    const row = document.createElement("tr");
    const valueX = document.createElement("th");
    const valueY = document.createElement("td");
    
    valueX.innerHTML = x;
    valueY.innerHTML = doOperations(x);
    
    row.append(valueX, valueY);
    table.appendChild(row);
}


