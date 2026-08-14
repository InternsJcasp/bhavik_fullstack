// Select DOM Elements
const dobInput = document.getElementById("dob");
const currentDateInput = document.getElementById("current-date");
const result = document.querySelector(".result");

const calculateBtn = document.querySelector(".calculate-btn");
const clearBtn = document.querySelector(".clear-btn");

calculateBtn.addEventListener("click", () => {
  // 1. Get values inside the event listener when the button is clicked
  const dobValue = dobInput.value;
  const currentDateValue = currentDateInput.value;

  // 2. Validate inputs before creating Date objects
  if (!dobValue || !currentDateValue) {
    alert("Please fill both current date and Date of Birth");
    return;
  }

  const dob = new Date(dobValue);
  const now = new Date(currentDateValue);

  // 3. Prevent calculation if DOB is in the future relative to current date
  if (dob > now) {
    result.innerHTML = "Invalid Date: DOB cannot be after current date";
    return;
  }

  // 4. Use 'let' for variables that will be reassigned
  let yearDiff = now.getFullYear() - dob.getFullYear();
  let monthDiff = now.getMonth() - dob.getMonth();
  let dayDiff = now.getDate() - dob.getDate();

  // 5. Adjust for negative days
  if (dayDiff < 0) {
    monthDiff--;
    // Get total days in the previous month
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    dayDiff += previousMonth.getDate();
  }

  // 6. Adjust for negative months
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  // 7. Output result (using dayDiff correctly)
  result.innerHTML = `Your current Age is ${yearDiff} years, ${monthDiff} months, and ${dayDiff} days.`;
});

// 8. Place clearBtn event listener outside calculateBtn
clearBtn.addEventListener("click", () => {
  dobInput.value = "";
  currentDateInput.value = "";
  result.innerHTML = "";
});
