// Select DOM Elements
const textInput = document.getElementById("text-input");
const result = document.querySelector(".result");

const checkBtn = document.querySelector(".calculate-btn");
const clearBtn = document.querySelector(".clear-btn");

checkBtn.addEventListener("click", () => {
  const rawText = textInput.value;

  // Validate empty input
  if (!rawText.trim()) {
    alert("Please enter a word, phrase, or number");
    return;
  }

  // Clean string: convert to lowercase and remove non-alphanumeric characters
  const cleanedText = rawText.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (cleanedText.length === 0) {
    result.innerHTML = "Invalid Input: Enter letters or numbers";
    return;
  }

  // Reverse cleaned string and compare
  const reversedText = cleanedText.split("").reverse().join("");
  const isPalindrome = cleanedText === reversedText;

  // Display result
  if (isPalindrome) {
    result.innerHTML = `<strong>"${rawText}"</strong> is a Palindrome!`;
  } else {
    result.innerHTML = `<strong>"${rawText}"</strong> is NOT a Palindrome.`;
  }
});

clearBtn.addEventListener("click", () => {
  textInput.value = "";
  result.innerHTML = "";
});
