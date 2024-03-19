const container = document.getElementById("_container");

// adding different green colors
let greenColorCodes = [
    "#7CFC00",
    "#78A46" ,
    "#385323",
    "#458800",
    "#BCED91",
    "#618329",
    "#5DFC0A",
    "#4CBB17",
    "#4AC948",
    "#00EE00",
    "#33FF33",
    "#00C957",
];

const numberOfSquares = 90;

for(let i = 0 ; i < numberOfSquares ; i++) {

    const activity = document.createElement("div");
    activity.classList.add("activity");

    activity.addEventListener("mouseover" , ()=> {
        addColor(activity);
    });

    activity.addEventListener("mouseout", ()=> {
        addColor(activity);
    });
    container.appendChild(activity);
}

function addColor(squareBox) {
    const gettingColor = greenColors();
    squareBox.style.backgroundColor = gettingColor;
    squareBox.style.boxshadow = `0 0 2px ${gettingColor}, 0 0 10px %{gettingColor}`;
}

function greenColors() {
    return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}
