const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dogs_photo_logo_2.png" class="photo-logo" alt="">            
            <img src="img/logo.png" class="logo" alt="">
            
            
        </div>  

              
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link" id="clothes">Clothes & Collars</a></li>
            <li class="link-item"><a href="#" class="link">Toys</a></li>
            <li class="link-item"><a href="#" class="link">Feeding Supplies</a></li>
            <li class="link-item"><a href="#" class="link">Beds, Mats & Houses</a></li>
            <li class="link-item"><a href="#" class="link" id="FAQ">FAQ</a></li>

            <div class="nav-items">
                <a>
                    <img src="img/home_button_2.png" id= "home-img" alt="">
                </a>
                <a href="#"><img src="img/shopping.png" alt=""></a>

                <a>
                    <img src="img/user.png" id="user-img" alt="">
                    <div class = "login-logout-popup hide"> 
                            <p class = "account-info">Log in as, name</p>
                            <button class ="btn" id="user-btn">Log out</button>
                    </div>
                </a>
            </div>    

        </ul>
    `;
} 

createNav();


// nav popup

const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

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

    clothesAndCollarsBtn.addEventListener('click', () =>{
        location.href = '/clothes.html';
    })

    faqBtn.addEventListener('click', () =>{
        location.href = '/FAQ.html';
    })
}
