const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = form.elements['email'].value;
  const password = form.elements['password'].value;
  const first_name = form.elements['First Name'].value;
  const last_name = form.elements['Last Name'].value;
  const phone = form.elements['phone'].value;
  const date = form.elements['Date Of Birth'].value;
  const response = await fetch('https://invoice-parser-scripts.8byteslab.com/profile/add_new_user', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user_info: {
      'first_name': first_name,
      'last_name': last_name,
      'email': username,
      'phone': phone,
      'user_name': username,
      'date_of_birth': date
    },
    login_info: {
      password: password
    }
  })
})
    .then(response => {
        if(response.status != 202){
            throw new Error("Enter Valid Values");
        }
        return response.json()
    })
    .then((data) => {
        window.open("../Verification/index.html?data=" + data, "_self");
    })
    .catch(error => window.alert(error));
});
