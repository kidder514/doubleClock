// 6/\1
// 5||2
// 4\/3
const singleShapeVertical = [ 
    {x: 5, y: 5},
    {x: 10, y: 10},
    {x: 10, y: 50},
    {x: 5, y: 55},
    {x: 0, y: 50},
    {x: 0, y: 10},
    {x: 5, y: 5}
];

//    2
// 1/--\3
// 6\--/4
//   5
const singleShapeHorizontal = [
    {x: 0, y: 5},
    {x: 5, y: 0},
    {x: 45, y: 0},
    {x: 50, y: 5},
    {x: 45, y: 10},
    {x: 5, y: 10},
    {x: 0, y: 5}
];

export const clock = {
    numberWidth: 70
}

// object contains all the coordinate of shape of 1,2,3,4,5,6,7,8,9
export const numberCoordinateMap = {
    0: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
        { offset: {x: 5, y: 105}, shape: singleShapeHorizontal},
        { offset: {x: 0, y: 55}, shape: singleShapeVertical},
        { offset: {x: 0, y: 5}, shape: singleShapeVertical},
    ],
    1: [
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
    ],
    2: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 5, y: 105}, shape: singleShapeHorizontal},
        { offset: {x: 0, y: 55}, shape: singleShapeVertical},
        { offset: {x: 5, y: 55}, shape: singleShapeHorizontal},
    ],
    3: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
        { offset: {x: 5, y: 105}, shape: singleShapeHorizontal},
        { offset: {x: 5, y: 55}, shape: singleShapeHorizontal},
    ],
    4: [
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
        { offset: {x: 0, y: 5}, shape: singleShapeVertical},
        { offset: {x: 5, y: 55}, shape: singleShapeHorizontal},
    ],
    5: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
        { offset: {x: 5, y: 105}, shape: singleShapeHorizontal},
        { offset: {x: 0, y: 5}, shape: singleShapeVertical},
        { offset: {x: 5, y: 55}, shape: singleShapeHorizontal},
    ],
    6: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
        { offset: {x: 5, y: 105}, shape: singleShapeHorizontal},
        { offset: {x: 0, y: 55}, shape: singleShapeVertical},
        { offset: {x: 0, y: 5}, shape: singleShapeVertical},
        { offset: {x: 5, y: 55}, shape: singleShapeHorizontal},
    ],
    7: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
    ],
    8: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
        { offset: {x: 5, y: 105}, shape: singleShapeHorizontal},
        { offset: {x: 0, y: 55}, shape: singleShapeVertical},
        { offset: {x: 0, y: 5}, shape: singleShapeVertical},
        { offset: {x: 5, y: 55}, shape: singleShapeHorizontal},
    ],
    9: [
        { offset: {x: 5, y: 5}, shape: singleShapeHorizontal},
        { offset: {x: 50, y: 5}, shape: singleShapeVertical},
        { offset: {x: 50, y: 55}, shape: singleShapeVertical},
        { offset: {x: 5, y: 105}, shape: singleShapeHorizontal},
        { offset: {x: 0, y: 5}, shape: singleShapeVertical},
        { offset: {x: 5, y: 55}, shape: singleShapeHorizontal},
    ],
};