const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");
const submitButton = document.getElementById("submit");

const submitResult = (event) => {
  event.preventDefault();
  let calculateBmiResult = (weight.value / (height.value / 100) ** 2).toFixed(
    1
  );
  let weightCategories;

  if (calculateBmiResult < 18.5) {
    weightCategories = "Underweight";
  } else if (calculateBmiResult >= 18.5 && calculateBmiResult <= 24.9) {
    weightCategories = "Normal";
  } else if (calculateBmiResult >= 25 && calculateBmiResult <= 29.9) {
    weightCategories = "Overweight";
  } else if (calculateBmiResult > 30) {
    weightCategories = "Obesity";
  }

  result.innerText = `Your BMI is ${calculateBmiResult} which means You are ${weightCategories}`;
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  weight.value < 1 || height.value < 1
    ? result.classList.add("warning")(
        (result.innerText = "Please fill all the input")
      )
    : result.classList.remove("warning")(submitResult(event));
});
