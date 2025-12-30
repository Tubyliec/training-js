arr = [-2, 9, 5, -3, 12, 98, 15, -23, -37, 25, 16];
let firstArray = arrayGenerator(100);

function arrayGenerator(len) {
  return Array.from({ length: len }, (v, i) => i).sort(function (a, b) {
    return b - a;
  });
}

console.log(arrayGenerator(100));

// First

function quickSorting(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const baseIndex = Math.floor(arr.length / 2);
  const baseItem = arr[baseIndex];
  const greaterItems = [];
  const lessItems = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < baseItem && i !== baseIndex) {
      lessItems.push(arr[i]);
    }
    if (arr[i] > baseItem && i !== baseIndex) {
      greaterItems.push(arr[i]);
    }
  }
  return [...sortByAsc(lessItems), baseItem, ...sortByAsc(greaterItems)];
}

// Second

function sortByAsc(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const newArray = [...arr];
  const lessArray = [];
  const greaterArray = [];
  const baseItem = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > baseItem) {
      greaterArray[greaterArray.length] = arr[i];
    } else {
      lessArray[lessArray.length] = arr[i];
    }
  }

  const sortedArray = [
    ...sortByAsc(lessArray),
    baseItem,
    ...sortByAsc(greaterArray),
  ];

  for (let i = 0; i < arr.length; i += 1) {
    newArray[i] = sortedArray[i];
  }
  return newArray;
}

console.log(quickSorting(firstArray));
console.log(sortByAsc(firstArray));
