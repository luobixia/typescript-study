function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let complete = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([5, 5, 2, 7, 3, 4, 5]))