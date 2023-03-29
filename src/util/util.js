import { clock, numberCoordinateMap } from '../constant/const';

// hms: 'hour' | 'minute' | 'second'
// number: Integer, the number of hour, minute or second
// return integer
export function getRotationDegree(hms, number) {
    if (typeof number !== 'number' || number < 0) {
        throw Error(number + ' is not a valid number');
    }

    // TODO: optional, more checking can be added, hour needs to be < 12 or <24
    // minute and second needs to be < 60
    if (hms === 'hour') {
        return 360 * number/12;
    } else if (hms === 'minute' || hms === 'second') {
        return 360 * number/60;
    } else {
        throw Error('first parameter needs to be "hour", "minute" or "second".');
    }

}

// draw hh:mm:ss
export function drawClock(canvas, hour, minute, second, isNightMode) {
    const context = canvas.getContext('2d')
    context.fillStyle = isNightMode ? 'white' : 'black';
    context.clearRect(0, 0, canvas.width, canvas.height);
    let nexStartingPoint = drawNumbers(context, hour, {x: 0, y: 0});
    nexStartingPoint = drawDot(context, nexStartingPoint);
    nexStartingPoint = drawNumbers(context, minute, nexStartingPoint)
    nexStartingPoint = drawDot(context, nexStartingPoint);
    drawNumbers(context, second, nexStartingPoint);
}

// can be used to draw unlimited numbers
// startingPoint {x, y}
export function drawNumbers(context, number, startingPoint) {
    if (typeof number !== 'number'){
        throw Error('invalid number');
    }
    if (!context) {
        throw Error('no canvas context found');
    }
    
    let numberStr = number.toString()
    if (numberStr.length === 1) {
        numberStr = numberStr.padStart(2, '0');
    }
    const chars = numberStr.split('');
    chars.forEach((char, index) => {
        drawNumber(context, char, {x: startingPoint.x + clock.numberWidth * index, y: startingPoint.y});
    })

    return {
        x: chars.length * clock.numberWidth + startingPoint.x, 
        y: 0
    }; 
}

function drawNumber(context, number, startingPoint) {
    if (typeof parseInt(number) !== 'number'){
        throw Error('invalid number');
    }
    if (!context) {
        throw Error('no canvas found');
    }

    numberCoordinateMap[number].forEach((shapeObj) => {
        context.beginPath();
        shapeObj.shape.forEach((point, index)=> {
            if (index === 0) {
                context.moveTo(point.x + shapeObj.offset.x + startingPoint.x, point.y +shapeObj.offset.y);
            } else {
                context.lineTo(point.x + shapeObj.offset.x + startingPoint.x, point.y + shapeObj.offset.y);
            }
        })
        context.closePath();
        context.fill();
    })
}


export function drawDot(context,startingPoint) {
    context.beginPath();
    context.moveTo(startingPoint.x, 30);
    context.lineTo(startingPoint.x + 10, 30);
    context.lineTo(startingPoint.x + 10, 40);
    context.lineTo(startingPoint.x, 40);
    context.lineTo(startingPoint.x, 30);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(startingPoint.x, 70);
    context.lineTo(startingPoint.x + 10, 70);
    context.lineTo(startingPoint.x + 10, 80);
    context.lineTo(startingPoint.x, 80);
    context.lineTo(startingPoint.x, 70);
    context.closePath();
    context.closePath();
    context.fill();

    return {
        x: startingPoint.x + 20, 
        y: 0
    }; 
}


