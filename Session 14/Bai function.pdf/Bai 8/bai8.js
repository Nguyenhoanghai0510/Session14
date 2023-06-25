function average(arr) {
    if (arr.length == 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    let averageNumber = sum / arr.length;
    return averageNumber;
  }
  console.log(average([1, 2, 4, 10]));