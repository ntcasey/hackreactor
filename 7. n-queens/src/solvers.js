/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting



window.createMatrix = function(n) {
  var solution = [];

  for (let i = 0; i < n; i += 1) {
    const inner = [];
    for (let j = 0; j < n; j += 1) {
      inner.push(0);
    }
    solution.push(inner);
  }
  return solution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = [];

  for (let i = 0; i < n; i += 1) {
    const inner = [];
    for (let j = 0; j < n; j += 1) {
      if (i === j) {
        inner.push(1);
      } else {
        inner.push(0);
      }
    }
    solution.push(inner);
  }
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let matrix = new Board(createMatrix(n));

  const helper = function (row) {
    if (row === n) {
      solutionCount += 1;
      return;
    }
    for (let col = 0; col < n; col += 1) {
      matrix.togglePiece(row, col);
      if (!matrix.hasAnyColConflicts() && !matrix.hasAnyRowConflicts()) {
        helper(row + 1);
      }
      matrix.togglePiece(row, col);
    }
  };
  helper(0);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0) { return []; }

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return findFirstNQueensSolution(n);
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0;
  let matrix = new Board(createMatrix(n));

  const helper = function (row) {
    if (row === n) {
      solutionCount += 1;
      return;
    }
    for (let col = 0; col < n; col += 1) {
      matrix.togglePiece(row, col);
      if (!matrix.hasAnyColConflicts()
          && !matrix.hasAnyRowConflicts()
          && !matrix.hasAnyMajorDiagonalConflicts()
          && !matrix.hasAnyMinorDiagonalConflicts()) {
        helper(row + 1);
      }
      matrix.togglePiece(row, col);
    }
  };
  helper(0);
  return solutionCount;
};

window.boardToArrayHelper = function(obj) {
  const solution = [];
  const max = obj.get('n');
  for (let i = 0; i < max; i += 1) {
    solution.push(obj.attributes[i].slice());
  }
  return solution;
};

window.findFirstNQueensSolution = function(n) {
  let matrix = new Board(createMatrix(n));
  let result;

  const helper = function (row) {
    if (row === n) {
      if (result === undefined) {
        result = boardToArrayHelper(matrix);
      }
      return;
    }
    for (let col = 0; col < n; col += 1) {
      matrix.togglePiece(row, col);
      if (!matrix.hasAnyColConflicts()
          && !matrix.hasAnyRowConflicts()
          && !matrix.hasAnyMajorDiagonalConflicts()
          && !matrix.hasAnyMinorDiagonalConflicts()) {
        helper(row + 1);
      }
      matrix.togglePiece(row, col);
    }
  };
  helper(0);
  if (result === undefined) {
    result = createMatrix(n);
  }
  return result;
};
