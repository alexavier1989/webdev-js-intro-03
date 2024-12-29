const submitButton = document.getElementById("submission-btn");

submitButton.addEventListener("click", function() {
  const buttonText = submitButton.innerText;
  const answers = document.querySelectorAll(".answer")

  if (buttonText === "Submit") {
        answers.forEach(element => element.style.display = "block" );
        submitButton.innerText = "Hide Answers";
  } else {
        answers.forEach(element => element.style.display = "none" );
        submitButton.innerText = "Submit";
  }
})
