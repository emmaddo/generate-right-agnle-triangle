let triangle = [];

function generateRightAngleTriangle(str, height){
    for (let i = height; i > 0; i --){
        triangle.push(String(height));
        console.log(str.repeat(i));
    }
    
}

generateRightAngleTriangle('#', 8);