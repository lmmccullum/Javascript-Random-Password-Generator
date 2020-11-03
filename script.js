// Document Object Model (DOM) Elements

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialcharacterEl = document.getElementById('specialcharacter');
const generateEl = document.getElementById('generate');
const passwordEl = document.getElementById('password');

const RandomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  specialcharacter: getRandomSpecialCharacter
};

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  console.log('length ', length);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSpecialCharacter = specialcharacterEl.checked;


  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecialCharacter, length);
});

// Generate Password Function

function generatePassword(lower, upper, number, specialcharacter, length) {

  let generatedPassword = '';

  const typesCount = lower + upper + number + specialcharacter + length

  console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { specialcharacter }].filter
    (
      item => Object.values(item)[0]
    );

  console.log('typesArr: ', typesArr);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i++) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      console.log('funcName: ', funcName);

      //generatedPassword += randomFunc[funcName]();
      generatedPassword += RandomFunction[funcName]();
      console.log(generatedPassword, 'generatedPassword')
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
  //console.log('finalPassword', finalPassword)
  // console.log(generatedPassword.slice(0, length));
}

// Generator Functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecialCharacter() {
  const SpecialCharacter = '!@#$%^&*(){}[]=<>/,.';
  return SpecialCharacter[Math.floor(Math.random() * SpecialCharacter.length)];
}




