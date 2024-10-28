
function generateEmail() {
  
  const firstName = document.querySelector('#firstName').value.trim().toLowerCase();
  const lastName = document.querySelector('#lastName').value.trim().toLowerCase();

  
  const emailPrefix = `${lastName.slice(0, 5)}${firstName.slice(0, 3)}`;

  
  const email = `${emailPrefix}@fit.cvut.cz`;

  
  document.querySelector('#result').innerHTML = `Váš e-mail je: <span style="font-weight: bold;">${email}</span>`;

}
