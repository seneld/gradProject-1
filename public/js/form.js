window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }

    logoBtn.addEventListener('click', () =>{
        location.href = '/';
    })
}

const loader = document.querySelector('.loader');
const logoBtn = document.querySelector('.logo');
const submitBtn = document.querySelector('.submit-btn');
const username = document.querySelector('#username') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const tac = document.querySelector('#terms-and-cond') || null;


submitBtn.addEventListener('click', () => {
    if(username != null){  //sign up page
        if(username.value.length < 3){
            alert('username must be 3 letters long');
        } else if(!email.value.length){
            alert('enter your email');
        } else if(password.value.length < 8){
            alert('password should be 8 letters long');
        }else if(!tac.checked){
                alert('you must agree to our terms and conditions');
        } else{
            //submit form
            loader.style.display = 'block';
        
            sendData('/signup', {
                username: username.value,
                email: email.value,
                password: password.value,
                tac: tac.checked,
                seller: false
            })
        }
    }else{
        //login page
        if(!email.value.length || !password.value.length){
            alert('Fill All The Inputs');
        } else{
            loader.style.display = 'block';
        
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})


