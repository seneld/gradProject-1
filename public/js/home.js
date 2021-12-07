const homeContainers = () => {
    let cards = document.querySelector('.card');

    cards.innerHTML = `
        
    <section class="collection-container">
    <a href="#" class="collection"  id="newSeason">
        <img src="/img/1.jpg" alt="">
        <p class="collection-title">New Season</p>
    </a>
    <a href="#" class="collection"  id="bestSeller">
        <img src="/img/2.jpg" alt="">
        <p class="collection-title">Best Seller</p>
    </a>
    <a href="#" class="collection">
        <img src="/img/3.jpg" alt="">
    </a>
    </section>
    `;
} 
homeContainers();

const newSeasonBtn = document.querySelector('#newSeason');
const bestSellerBtn = document.querySelector('#bestSeller');


window.onload = () =>{

    newSeasonBtn.addEventListener('click', () =>{
        location.href = '/newSeason.html';
    })

    bestSellerBtn.addEventListener('click', () =>{
        location.href = '/bestSeller.html';
    })
    
}