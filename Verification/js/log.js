const form = document.getElementById('login-form');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
token = urlParams.get('data');


form.addEventListener('submit', async (event) => {
    console.log(token)
  event.preventDefault();
  const code = form.elements['code'].value;
  const response = await fetch('https://invoice-parser-scripts.8byteslab.com/user/verify/?code=' + code, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '+ token
  },
  body: ''
})
    .then(response => {
        console.log(response.status)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        response.json()
        
    })
    .then(data => {
        console.log(123123)
        console.log(data)
        console.log(123123)
        if (data === null) {
            throw new Error("Worng code");
        }
        console.log(123123)
        console.log(data)
        window.open("../Thank You/index.html", "_self");
    })
    .catch(error => {
        console.error(error)
        window.alert(error);
    });
});

const myLink = document.getElementById("my-link");
  
  myLink.addEventListener("click", async (event) => {
    // prevent the link from performing its default action
    event.preventDefault();
    await fetch('https://invoice-parser-scripts.8byteslab.com/user/resend_code', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ token
      }
    }
                );
    // your action goes here
  });
