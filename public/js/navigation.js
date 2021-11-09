
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

const logoBtn = document.querySelector('.logo');
const homeImageButton = document.querySelector('#home-img');
const clothesAndCollarsBtn = document.querySelector('#clothes');
const faqBtn = document.querySelector('#FAQ');

userImageButton.addEventListener('click', ()=>{
    userPopup.classList.toggle('hide');
})

window.onload = () =>{
    let user = JSON.parse(sessionStorage.user || null);
    
    
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `Log in as , ${user.username}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () =>{
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', ()=>{
            location.href = '/login';
        })
    }

    homeImageButton.addEventListener('click', () =>{
        location.href = '/';
    })

    logoBtn.addEventListener('click', () =>{
        location.href = '/';
    })

    clothesAndCollarsBtn.addEventListener('click', () =>{
        location.href = '/clothes.html';
    })

    faqBtn.addEventListener('click', () =>{
        location.href = '/FAQ.html';
    })
}