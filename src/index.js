
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( matrix === undefined ) { return [] };
    matrix[1] = matrix[1].reverse();
    return matrix.flat();
}
