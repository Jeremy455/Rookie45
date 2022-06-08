let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/photo2.jpg') {
      myImage.setAttribute('src', 'images/photo1.jpg');
    } else {
      myImage.setAttribute('src', 'images/photo2.jpg');
    }
});
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenue sur BabyMomies shop ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenue sur BabyMomies shop ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });
  