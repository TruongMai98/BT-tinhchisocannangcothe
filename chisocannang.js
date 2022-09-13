function clickButton(){
    let weight = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('height').value);
    let bmi = weight / Math.pow(height, 2);
    let result = null;
     if (bmi < 18.5){
         result = 'Underweight';
     }else if (bmi < 25.0){
         result = 'Normal';
     }else if (bmi < 30.0){
         result = 'Overweight';
     }else{
         result = 'Obese';
     }
     document.getElementById('result').innerHTML = 'BMI: ' + bmi + '<br>' + 'You are ' + result;
}

