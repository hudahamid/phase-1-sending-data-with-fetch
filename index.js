// Add your code here
const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userMail').value;
    submitData(userName, userEmail);

})



function submitData(name, email){
    fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body:JSON.stringify({
        name: name,
        email: email,
      })

})
 
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    let paragraph = document.createElement("p");
    paragraph.textContent = json.id;
    inputForm.appendChild(paragraph);
})
.catch(function (error) {
    let message = document.createElement("h1");
    message.textContent = error.message;
    inputForm.appendChild(message);
    return error.message;
  });
}