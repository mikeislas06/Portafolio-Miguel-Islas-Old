const userInfoNavBarBtn = document.getElementById('userInfoNavBarBtn');
const sideMenuNavBarBtn = document.getElementById('sideMenuNavBarBtn');
const userInfoBtn = document.getElementById('userInfoBtn');
const sideMenuBtn = document.getElementById('sideMenuBtn');
const progressCircle1 = document.getElementById('progressCircle1');
const progressCircle2 = document.getElementById('progressCircle2');
const progressCircle3 = document.getElementById('progressCircle3');

userInfoNavBarBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');
    const sideMenu = document.getElementById('sideMenu');    

    userInfoBar.classList.toggle('active');

    if(sideMenu.classList.contains('active')){
        sideMenu.classList.toggle('active');
    }

    progressCircle1.classList.toggle('active');
    progressCircle2.classList.toggle('active');
    progressCircle3.classList.toggle('active');

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
    progressCircle3.classList.remove('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.remove('active');
    });
});

userInfoBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');

    userInfoBar.classList.toggle('active');
    progressCircle1.classList.toggle('active');
    progressCircle2.classList.toggle('active');
    progressCircle3.classList.toggle('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.toggle('active');
    });
});

sideMenuBtn.addEventListener('click', () => {
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.classList.toggle('active');
});