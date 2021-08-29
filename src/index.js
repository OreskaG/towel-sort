module.exports = function towelSort (matrix) {
    let result = [];
    if ( matrix === undefined ) { return [] };
    for ( let i = 0 ; i < matrix.length ; i++ ) {
        if ( i % 2 !== 0) { result = matrix[i].reverse() };
    };
    return result.flat();
}
