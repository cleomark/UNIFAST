const unifastForm = document.getElementById("unifast-form");
const discountMessage = document.getElementById("discount-message");

// Scholarship discount rates
const scholarshipDiscounts = {
  "Academic Excellence": 0.2,
  Sports: 0.15,
  Arts: 0.1,
  "Need-based": 0.25,
};

// Handle form submission
unifastForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const scholarshipType = document.getElementById("scholarship-type").value;

  const discountRate = scholarshipDiscounts[scholarshipType];

  if (discountRate) {
    const discountAmount = discountRate * 100;
    discountMessage.innerHTML = `
      <div class="alert alert-success">
        <h3>Congratulations!</h3>
        <p>You are eligible for a ${discountAmount}% discount on your tuition fees.</p>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Original Fee</th>
              <th>Discounted Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Course 1</td>
              <td>$500</td>
              <td>$${500 * (1 - discountRate)}</td>
            </tr>
            <tr>
              <td>Course 2</td>
              <td>$750</td>
              <td>$${750 * (1 - discountRate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  } else {
    discountMessage.innerHTML = `
      <div class="alert alert-info">
        <p>Sorry, the selected scholarship type is not eligible for a discount.</p>
      </div>
    `;
  }

  unifastForm.reset();
});
