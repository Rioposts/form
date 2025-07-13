const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  //grabbing the values 
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById('confirm-password').value;
  const age = document.getElementById('age').value;
  const bio = document.getElementById('bio').value;

//gettin gender 

const gender = document.querySelector('input[name="gender"]:checked')?.value

//get those interests

const interests = [];
document.querySelectorAll('input[name="Interests"]:checked').forEach(cb => {
  interests.push(cb.value);
});

//get that country boy

const country = document.getElementById("country").value;

//validate that password boi

if(password !== confirmPassword){
  alert("Aye bruh that aint the same pass cuh you tripping dawg");
  return;
}
    
  const userData= {
  name,
  email,
  age,
  gender,
  interests,
  bio,
}

// Convert it to a string & store in localStorage

localStorage.setItem("userData", JSON.stringify(userData));


document.getElementById("out-name").textContent = name;
document.getElementById("out-email").textContent = email;
document.getElementById("out-age").textContent = age;
document.getElementById("out-gender").textContent = gender || "Not selected";
document.getElementById("out-interests").textContent = interests.length > 0 ? interests.join(", ") : "None";
document.getElementById("out-bio").textContent = bio;


// show the results

console.log({
  name,
  email,
  password,
  age,
  gender,
  interests,
  country,
  bio
  });




alert(`Thanks for signing up, ${name}!`);


form.reset();

})



const savedData = localStorage.getItem("userData");

if (savedData) {
  const parsedData = JSON.parse(savedData);

  document.getElementById("out-name").textContent = parsedData.name;
  document.getElementById("out-email").textContent = parsedData.email;
  document.getElementById("out-age").textContent = parsedData.age;
  document.getElementById("out-gender").textContent = parsedData.gender || "Not selected";
  document.getElementById("out-interests").textContent = parsedData.interests.length > 0 ? parsedData.interests.join(", ") : "None";
  document.getElementById("out-bio").textContent = parsedData.bio;
}
