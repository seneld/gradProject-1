const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
          
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link" id="clothes">Clothes & Collars</a></li>
            <li class="link-item"><a href="#" class="link" id="toys">Toys</a></li>
            <li class="link-item"><a href="#" class="link" id="feeding">Feeding Supplies</a></li>
            <li class="link-item"><a href="#" class="link" id="beds">Beds, Mats & Houses</a></li>
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



const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');
const logoBtn = document.querySelector('.logo');
const homeImageButton = document.querySelector('#home-img');
const clothesAndCollarsBtn = document.querySelector('#clothes');
const toysBtn = document.querySelector('#toys');
const feedingBtn = document.querySelector('#feeding');
const bedsBtn = document.querySelector('#beds');
const faqBtn = document.querySelector('#FAQ');
const newSeasonBtn = document.querySelector('#newSeason');
const bestSellerBtn = document.querySelector('#bestSeller');



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

    toysBtn.addEventListener('click', () =>{
        location.href = '/toys.html';
    })

    feedingBtn.addEventListener('click', () =>{
        location.href = '/feeding.html';
    })

    bedsBtn.addEventListener('click', () =>{
        location.href = '/beds.html';
    })

    faqBtn.addEventListener('click', () =>{
        location.href = '/FAQ.html';
    })
    
    newSeasonBtn.addEventListener('click', () =>{
        location.href = '/newSeason.html';
    })

    bestSellerBtn.addEventListener('click', () =>{
        location.href = '/bestSeller.html';
    })

    buy-btn.addEventListener('click', () =>{
        location.href = '/login';
    })
    

}

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
          
        <footer>
        <div class="footer-content">
            <img src="img/logo_1.png" class="logo" alt="">
            
                <p class="info"><mark class="orange">About us:</mark> This website was built by Ceren Gülsem and Şenel Develioglu within the scope of MCBU Computer Engineering department Graduation Project-1.</p> 

            </div>
    </footer>
    `;
} 

createFooter();

