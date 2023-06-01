
// Slider Function
function makingGrid(){
    let slider = document.querySelector('#slider');
    let sliderCount = document.querySelectorAll('.sliderCount');
    let gridContainer = document.querySelector('.container');
    let buttons = document.querySelectorAll('.buttonMode');

    // ButtonHandler helper
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            buttonHandler(buttons,e);
        })
    })

    gridContructor(gridContainer);
    creatingGridDivs(slider, gridContainer);
    clear();

    // Create grid on slider move
    slider.addEventListener('input', () => {
        let gridDivArray = document.querySelectorAll('.gridDiv');

        // Update grid counter
        sliderCount.forEach(count => {
            count.textContent = slider.value;
        });
        gridContructor(gridContainer);
        deleteGridDivs(gridDivArray);
        creatingGridDivs(slider, gridContainer);
        clear();
    });
};
makingGrid();

// Construct grid
function gridContructor(gridContainer){
    gridContainer.style.gridTemplateRows = `repeat (${slider.value}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
};

// Creating Divs
function creatingGridDivs(slider, gridContainer){
    let rainbowModeButton = document.querySelector('.rainbowMode');
    let eraserModeButton = document.querySelector('.eraser');
    for (let i = 0; i < slider.value ** 2; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridDivEventHandler(gridDiv,rainbowModeButton,eraserModeButton);
        gridContainer.appendChild(gridDiv);
    };
};

// Adding Events to Grid Divs
function gridDivEventHandler(gridDiv,rainbowModeButton,eraserModeButton){
    let colorPicker = document.querySelector('#colorPicker');
    gridDiv.addEventListener('mouseover', (e) => {
        e.buttons == 1 && rainbowModeButton.classList.contains('mode') ? gridDiv.style.backgroundColor = `#${randomColor()}` :
        e.buttons == 1 && eraserModeButton.classList.contains('mode') ? gridDiv.style.backgroundColor = '#ebebeb' :
        e.buttons == 1 ? gridDiv.style.backgroundColor = colorPicker.value : '';
    });
    gridDiv.addEventListener('mousedown', (e) => {
        e.buttons == 1 && rainbowModeButton.classList.contains('mode') ? gridDiv.style.backgroundColor = `#${randomColor()}` :
        e.buttons == 1 && eraserModeButton.classList.contains('mode') ? gridDiv.style.backgroundColor = '#ebebeb' :
        e.buttons == 1 ? gridDiv.style.backgroundColor = colorPicker.value : '';
    });
};

// Deleting Divs
function deleteGridDivs(gridDivArray){
    gridDivArray.forEach(div => {
        div.remove();
    });
};

function clear(){
    let clearButton = document.querySelector('.clear');
    let gridDivArray = document.querySelectorAll('.gridDiv');
    clearButton.addEventListener('click', () => {
        gridDivArray.forEach(div => {
            div.style.backgroundColor = '#ebebeb';
        }); 
    });
};

function buttonHandler(buttons,e){
    buttons.forEach(button => {
        button.classList.remove('mode');
    });
    e.target.classList.add('mode');
};

function randomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};
