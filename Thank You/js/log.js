const form = document.getElementById('login-form');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
token = urlParams.get('access_token');
console.log(token)


form.addEventListener('submit', async (event) => {
  event.preventDefault();
    const password = form.elements['password'].value;
    const cpassword = form.elements['Confirm password'].value;
    if(password == cpassword){
        
        const response = await fetch('https://spacepay.onrender.com/update_password_verification', {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        token: {
        access_token: token,
        token_type: 'bearer'
        },
        log: {
        password: password
        }
        })
        }).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data); //3
            window.open("../Login_v2/index.html", "_self");
        }).catch(function(error) {
            console.log(error);
        });
    }
    else{
        window.alert("Passwords are not the same")
    }
});
