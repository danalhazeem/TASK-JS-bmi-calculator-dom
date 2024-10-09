function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let CMheight = height ^ 2;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let bmi = weight / (CMheight / 100);
  alert(bmi);

  if (bmi < 18.5) {
    bmistate = "Underweight";
  } else if (18.5 < bmi && bmi > 24.9) {
    bmistate = "Healthy Weight";
  } else if (25.0 < bmi && bmi > 29.9) {
    bmistate = "Overweight";
  } else if (bmi > 30) {
    bmistate = "Obesity";
  }

  alert(bmistate);

  if (19 < age && age > 24 && 19 < bmi && bmi > 24) {
    bmibyage = "Healthy";
  } else {
    bmibyage = "Not Healthy";
  }

  if (25 < age && age > 34 && 20 < bmi && bmi > 25) {
    bmibyage = "Healthy";
  } else {
    bmibyage = "Not Healthy";
  }

  if (35 < age && age > 44 && 21 < bmi && bmi > 25) {
    bmibyage = "Healthy";
  } else {
    bmibyage = "Not Healthy";
  }

  if (45 < age && age > 54 && 22 < bmi && bmi > 27) {
    bmibyage = "Healthy";
  } else {
    bmibyage = "Not Healthy";
  }

  if (55 < age && age > 64 && 23 < bmi && bmi > 28) {
    bmibyage = "Healthy";
  } else {
    bmibyage = "Not Healthy";
  }

  if (age > 65 && 24 < bmi && bmi > 29) {
    bmibyage = "Healthy";
  } else {
    bmibyage = "Not Healthy";
  }
  alert(bmibyage);
}
