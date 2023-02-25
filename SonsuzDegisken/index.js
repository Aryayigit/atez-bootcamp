function multiplication(...args) {
  var args = new Array(arguments.length);
  var operation = 1;

  for (var i = 0; i < args.length; ++i) {
      if (typeof (arguments[i]) == 'number' && arguments[i] > 0 && arguments[i] != NaN) {
          operation = operation * arguments[i];
      } else {
          return "Sadece number formatında değer girilebilir. Girdiğiniz değer: " + typeof (arguments[i]) + " formatında";
      }
  }

  return operation;
}

let correctResult = multiplication(2, 3, 3, 5);
console.log("Doğru çalışan: " + correctResult);

let wrongResult = multiplication(2, 3, 3, true, "dsdsds");
console.log("Hatalı çalışan: " + wrongResult);