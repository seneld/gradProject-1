const homeContainers = () => {
    let cards = document.querySelector('.card');

    cards.innerHTML = `
        
    <section class="collection-container">
    <a href="#" class="collection">
        <img src="/img/1.jpg" alt="">
        <p class="collection-title">New Season</p>
    </a>
    <a href="#" class="collection">
        <img src="/img/2.jpg" alt="">
        <p class="collection-title">Best Seller</p>
    </a>
    <a href="#" class="collection">
        <img src="/img/3.jpg" alt="">
        <p class="collection-title">Sale</p>
    </a>
    </section>
    `;
} 
homeContainers();
