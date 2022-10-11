const  bills = [ 
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11,12],
               ]
for(let r = 0; r < bills.length; r++){
    for(let c = 0; c < bills[r].length; c++){
     console.log(bills[r][c])
    }
    
}

const grid = [
    [ 1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];

for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      console.log(grid[r],[c]);
    }
  }