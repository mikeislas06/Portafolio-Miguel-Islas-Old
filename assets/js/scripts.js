const userInfoNavBarBtn = document.getElementById('userInfoNavBarBtn');
const sideMenuNavBarBtn = document.getElementById('sideMenuNavBarBtn');
const userInfoBtn = document.getElementById('userInfoBtn');
const sideMenuBtn = document.getElementById('sideMenuBtn');
const progressCircle1 = document.getElementById('progressCircle1');
const progressCircle2 = document.getElementById('progressCircle2');

userInfoNavBarBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');
    const sideMenu = document.getElementById('sideMenu');    

    userInfoBar.classList.toggle('active');

    if(sideMenu.classList.contains('active')){
        sideMenu.classList.toggle('active');
    }

    progressCircle1.classList.toggle('active');
    progressCircle2.classList.toggle('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.toggle('active');
    });
});

sideMenuNavBarBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.classList.toggle('active');

    if(userInfoBar.classList.contains('active')){
        userInfoBar.classList.toggle('active');
    }

    progressCircle1.classList.remove('active');
    progressCircle2.classList.remove('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.remove('active');
    });
});

userInfoBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');

    userInfoBar.classList.toggle('active');
    progressCircle1.classList.toggle('active');
    progressCircle2.classList.toggle('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.toggle('active');
    });
});

sideMenuBtn.addEventListener('click', () => {
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.classList.toggle('active');
});

function closeSideMenu(){
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.classList.remove('active');
}

const pOption1 = document.getElementById('pOption1');
const pOption2 = document.getElementById('pOption2');

pOption1.addEventListener('click', () => {
    pOption1.classList.add('p-active');
    pOption2.classList.remove('p-active');
});

pOption2.addEventListener('click', () => {
    pOption1.classList.remove('p-active');
    pOption2.classList.add('p-active');
});

// Typewriting function

const typedTextSpan = document.querySelectorAll(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const codeTypewriterEn = document.getElementById('codeTypewriterEn');
let textArray = ['Web Interfaces','Mobile applications','User Interfaces','Automation Tools'];

const typingDelay = 90;
const erasingDelay = 70;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
let i = 0;

function type() {
  if(codeTypewriterEn.classList.contains('display-none')){
    textArray = ['Interfaces Web','Aplicaciones Móviles','UX/UI','Automatización'];
    i = 1;
  }
  else{
    textArray = ['Web Interfaces','Mobile applications','User Interfaces','Automation Tools'];
    i = 0;
  }

  if(charIndex < textArray[textArrayIndex].length){
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan[i].textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else{
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase(){
  if(charIndex > 0){
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan[i].textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else{
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  if(textArray.length) setTimeout(type, newTextDelay);
});

// -------------------------------------------------------------------------------------------
// Translating text

const englishBtn = document.getElementById('englishBtn');
const spanishBtn = document.getElementById('spanishBtn');

englishBtn.addEventListener('click', () => {
  const englishText = document.querySelectorAll('.english');
  const spanishText = document.querySelectorAll('.spanish');

  englishText.forEach(function(i) {
    
    i.classList.remove('display-none');
    
    spanishText.forEach(function(j) {
      j.classList.add('display-none');
    })
  });  
});

spanishBtn.addEventListener('click', () => {
  const englishText = document.querySelectorAll('.english');
  const spanishText = document.querySelectorAll('.spanish');

  spanishText.forEach(function(i) {
    
    i.classList.remove('display-none');
    
    englishText.forEach(function(j) {
      j.classList.add('display-none');
    })
  });  
});