const createProduct = () => {
    let product = document.querySelector('.product');

    product.innerHTML = `
        
        <!-- <h2 class="product-category">Best Selling</h2> -->
       
        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <img src="img/1.jpg" class="product-thumb" alt="">
                    <button class="card-btn">Add to Whislist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des">a short line about stuff</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/2.jpg" class="product-thumb" alt="">
                    <button class="card-btn">Add to Whislist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des">a short line about stuff</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src="img/3.jpg" class="product-thumb" alt="">
                    <button class="card-btn">Add to Whislist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-des">a short line about stuff</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>    
        </div>
    
    `;
} 
createProduct();
