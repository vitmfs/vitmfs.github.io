(function() {

console.clear();
console.log('PROGRAM START!!!');
////////////////////////////////////////////////////////////////////////////////


const matrix = [
    [ 1,  2,  3],
    [ 4,  5,  6],
    [ 7,  8,  0],
    [10, 11, 12]
]

function setRowAndColumnOfZeroToAllZeros ( matrix ) {
    const indexesOfColumns = [];

    const arrayLength = matrix.length;
    const innerArrayLength = matrix[0].length;
    for ( let i = 0; i < arrayLength; i++ ) {
        for ( let j = 0; j < innerArrayLength; j++ ) {
            if (matrix[i][j] === 0) {
                if (!indexesOfColumns.includes(j)) {
                    indexesOfColumns.push(j);
                }
            }

        }
        
    }

    for ( let i = 0; i < arrayLength; i++ ) {
        for ( let j = 0; j < innerArrayLength; j++ ) {
            if (indexesOfColumns.includes(j)) {
                matrix[i][j] = 0;
            }
            if (matrix[i].includes(0)) {
                matrix[i][j] = 0;
                
            }

        }
        
    }

    return matrix;
    
}





console.log(setRowAndColumnOfZeroToAllZeros ( matrix ));










































////////////////////////////////////////////////////////////////////////////////
console.log('PROGRAM END!!!');

})();