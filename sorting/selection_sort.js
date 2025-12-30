let arr = [64, 25, 12, 22, 11];

function sortByAsc(arr) {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < newArr.length; j += 1) {
      if (newArr[j] < newArr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = newArr[i];
    newArr[i] = newArr[minIndex];
    newArr[minIndex] = temp;
  }

  return newArr;
}

console.log(sortByAsc(arr));
