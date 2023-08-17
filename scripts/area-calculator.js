// Triangle Area Calculation
function calculateTriangleArea(){
    const base = inputArea('triangle-base');
    const height = inputArea('triangle-height');
    const area = 0.5 * base * height;
    setArea('triangle-area', area);
}

// Rectangele Area Calculation
function calculateRectangleArea(){
    const width = inputArea('regtangle-width');
    const length = inputArea('regtangle-length');
    const area = width * length;
    setArea('regtangle-area', area);
}

// Parallelogram Area Calculation
function calculateParallelogramArea()
{
    const base = inputArea('parallelogram-base');
    const height = inputArea('parallelogram-height');
    const area = base * height;
    setArea('parallelogram-area', area);
}

// Common Function

function inputArea(inputId){
    const value = document.getElementById(inputId).value; 
    return value;
}

function setArea(inputId, value){
    const areaField = document.getElementById(inputId);
    areaField.innerText = value;
}