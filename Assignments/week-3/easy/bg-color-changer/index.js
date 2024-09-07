document.addEventListener("DOMContentLoaded", () => {
    function changeColor(color) {
        console.log("changeColor");
        console.log(color);

        let screen = document.querySelector(".boxes");
        screen.style.backgroundColor = color; 

        let palette = document.querySelector(".palette");
        palette.style.border = "2px solid " + color;
    }

    function addColor() {
        let color = document.getElementById("colorPicker").value;
        let colorList = document.querySelector(".color-list");
        let item = document.createElement("div");
        item.className = "color-list-item";

        let box = document.createElement("div");
        box.className = "image";
        box.style.backgroundColor = color;
        box.style.width = "20px"; 
        box.style.height = "20px"; 

        item.appendChild(box);
        colorList.appendChild(item);

        // Add click event listener to the newly added item
        item.addEventListener('click', function () {
            changeColor(color);
        });

        document.getElementById("colorPicker").value = "#000000";
    }

    let colors = document.querySelectorAll(".color-list-item");
    colors.forEach(element => {
        let color = element.querySelector('.image').style.backgroundColor;
        console.log(color);

        element.addEventListener('click', function () {
            changeColor(color);
        });
    });

    document.getElementById("addButton").addEventListener('click', addColor);
});