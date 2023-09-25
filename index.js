document.addEventListener("DOMContentLoaded",function(e){
  const d = new Date();
  const currentYear = d.getFullYear();
  const getFooter = document.querySelector(".year");
  getFooter.textContent = currentYear;
  
})


const charCase = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "123456789",
  specialChar: "!@#$&?%*+/<>~^",
};

const getRangeInput = document.getElementById("input-characters");

getRangeInput.addEventListener("input", function (e) {
  const updateLength = document.getElementById("update-length");
  updateLength.textContent = e.target.value;
});

const generatePassword = document.querySelector("#generate-password");

generatePassword.addEventListener("click", getPassword);

function getPassword() {
  let password = "";
  let characterCount = getRangeInput.value;
  let count = 0;
  const getChecked = document.querySelectorAll(".cases");

  let passStatus = document.querySelector("#pass-status");
  for (let i = 0; i < getChecked.length; i++) {
    if (getChecked[i].checked) {
      let checkId = getChecked[i].id;
      password += `${randomCharacter(charCase[checkId], characterCount)}`;
      count++;
    } else {
      passStatus.style.display = "hidden";
    }
  }
  let newPass = shuffle(password).substring(0, characterCount);
  document.querySelector("#pass-output").value = newPass;

  if (characterCount > 8) {
    if ((count == 1 && characterCount > 10) || count == 2) {
      displayPassStatus(
        passStatus,
        "/images/Subtract Circle.svg",
        "Good",
        "good-pass"
      );
    } else if (count == 3) {
      displayPassStatus(
        passStatus,
        "/images/green.svg",
        "Strong",
        "strong-pass"
      );
    } else if ((count = 4)) {
      displayPassStatus(
        passStatus,
        "/images/Checkmark Circle.svg",
        "Very strong",
        "very-strong-pass"
      );
    }
  } else {
    displayPassStatus(
      passStatus,
      "/images/Dismiss Circle.svg",
      "weak",
      "weak-pass"
    );
  }
}
function displayPassStatus(elem, imgSrc, text, classNa) {
  elem.children[0].src = imgSrc;
  elem.childNodes[2].textContent = text;
  elem.className = classNa;
}

const checkInputs = document.querySelector("#check-input");
checkInputs.addEventListener(
  "click",
  function (e) {
    if (e.target.nodeName == "INPUT") {
      const parentElem = e.target.parentElement;
      if (e.target.checked) {
        parentElem.classList.remove("text-light", "border-light");
        parentElem.classList.add("text-brightPurple", "border-brightPurple");
      } else {
        parentElem.classList.remove("text-brightPurple", "border-brightPurple");
        parentElem.classList.add("text-light", "border-light");
      }
    }
  },
  true
);

const copyBtn = document.querySelector("#copy-btn");
copyBtn.addEventListener("click", copyPassword);
function copyPassword(){
  const genPassword = document.querySelector("#pass-output");
  genPassword.select();
  genPassword.setSelectionRange(0, 40);
  navigator.clipboard.writeText(genPassword.value);
  alert("Password copied");
}

function randomCharacter(str, charGenerated) {
  let newStr = "";

  for (let i = 0; i < charGenerated; i++) {
    let index = Math.floor(Math.random() * str.length);
    newStr += str.charAt(index);
  }
  return newStr;
}

function shuffle(str) {
  const arr = str.split("");
  for (i = arr.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * i);
    let temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr.toString().replaceAll(",", "");
}
