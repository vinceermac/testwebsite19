const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc ==="images/firefox-icon.png") {
        myImage.setAttribute("src", "images/CFO logo.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};


//Personalize Welcome Image

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }



//Initialization code

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storedName;
}

//Onclick event allow user to enter a different name by pressing the button.

myButton.onclick = () => {
    setUserName();
};

