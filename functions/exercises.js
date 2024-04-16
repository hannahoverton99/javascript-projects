function makeLine(size){
    let line = "";
    for (i=0; i < size; i++){
        line += "#";
    }
    return line;
}
console.log(makeLine(5));

function makeSquare(size){
    let square= "";
    for (let i=0; i < size; i++){
        square += (makeLine(size) + "\n");

    }
 return square;
}
console.log(makeSquare(5));

function makeRectangle(height, width){
    let rectangle = "";
    for (let i=0; i < height; i++){
        rectangle += (makeLine(width) + "\n")
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5,3));

function makeStairs(height){
    let stairs= "";
    for (let i=0; i<height; i++){
        stairs+= (makeLine(i+1) + "\n");
    }
    return stairs.slice(0, -1);
}
console.log(makeStairs(5));
