let triangle = [];

function generateRightAngleTriangle(str, height){
    for (let i = 1; i <= height; i ++){
        triangle.push(String(height));
        console.log(str.repeat(i));
    }s
    
}

generateRightAngleTriangle('#', 8);