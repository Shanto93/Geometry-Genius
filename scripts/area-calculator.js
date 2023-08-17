function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);
    // get triangle height value
    const height = parseFloat(document.getElementById('triangle-height').value);
    // console.log(height);
    const area = 0.5 * base * height;
    // calculate triangle area
    console.log(area);
    // get triangle area
    const areaField = document.getElementById('triangle-area');
    areaField.innerText = area;

}

function calculateRectangleArea(){
    // get triangle base value
    const width = parseFloat(document.getElementById('regtangle-width').value);
    // console.log();
    // get triangle height value
    const length = parseFloat(document.getElementById('regtangle-length').value);
    // console.log(height);
    const area = width * length;
    // calculate triangle area
    console.log(area);
    // get triangle area
    const areaField = document.getElementById('regtangle-area');
    areaField.innerText = area;

}