let checkNumber = (number) => {
    if (number % 2 == 0) {
      return "Số chẵn";
    } else {
      return "Số lẻ";
    }
  };
  console.log(checkNumber(10));

  let checkPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return "Đây không phải là số nguyên tố";
      }
    }
    return "Đây là số nguyên tố";
  };
  console.log(checkPrime(7));

  let checkPerfect = (number) => {
    if (number <= 1) return "Sô này không phải số hoàn hảo";
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
      if (number % i == 0) {
        sum = sum + i;
        if (i !== number / i) {
          sum = sum + number / i;
        }
      }
    }
    if (sum == number) {
      return "Đây là số hoàn hảo";
    } else {
      return "Đây không phải là sô hoàn hảo";
    }
  };
  console.log(checkPerfect(28));