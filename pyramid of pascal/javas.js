function pascals() {
  const numRows = Number(document.getElementById('row').value);
  const numColumn = Number(document.getElementById('column').value);

  let result = [];
  
  for (let row = 0; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col <= row; col++) {
      if (col == 0 || col == row) {
        arr.push(1);
      }
      else {
        arr.push((result[row-1][col-1] + result[row-1][col]));
      }
    }
    result.push(arr);
  }
  
  // console.log(result[numRows][numColumn])
  document.getElementById('pascal').innerHTML = result[numRows][numColumn]
}