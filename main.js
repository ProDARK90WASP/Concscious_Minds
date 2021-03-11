function calcBMI() {
    var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
    //document.bmiform.bmi.value = parseInt((weight * 703) / (height * height));
    document.bmiform.bmi.value = parseInt((weight) / ((height/100) * (height/100)));
  } 