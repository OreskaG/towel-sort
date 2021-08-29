
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( matrix === undefined || !matrix ) { return [] };
    for ( let i = 1 ; matrix[i] ; i = i+2 ) {
        matrix[i] = matrix[i].reverse()
    };
    return matrix.flat();
}
