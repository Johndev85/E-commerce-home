import getHash from '../utils/getHash'

const Product = () => {
    const id = getHash()
    const view = `
    <section class="productContainer">
    <section class="productContainer__top">
        <div class="productContainer__top--imgItem">
            <img src="./src/styles/assets/1.jpeg" alt="">
        </div>
        <section class="productContainer__top__rightInfo">
            <div class="productContainer__top__rightInfo--topInfo">
                <h1>Chaqueta capsule corp</h1>
                <div class="prices">
                    <span class="price">
                        $ 39.98
                    </span>
                    <span class="desc">
                        $ 24.99
                    </span>
                </div>
                <a href="#">Free Shipping & Returns</a>
            </div>
            <div class="productContainer__top__rightInfo--colors">
                <div class="yellow"></div>
                <div class="blue"></div>
                <div class="grey"></div>
            </div>
            <button class="productContainer__top__rightInfo--btnCart">ADD TO CART</button>
        </section>
    </section>

    <section class="productContainer__description">
        <details class="productContainer__description__details">
            <summary> Product Details</summary>
            <ul>
                <li>Item Type: chaqueta</li>
                <li>Material: Poliester</li>
            </ul>
            <h3>Package Includes:</h3>
                <ul>
                    <li>1 x Chaqueta</li>
                </ul>
        </details>
        <details class="productContainer__description__details">
            <summary> Item Specifics</summary>
                <p>
                    <span>Type:</span> chaqueta
                </p>
                <p>
                    <span>Dysign:</span> Anime
                </p>
                <p>
                    <span>Feature:</span> woolen fabric
                </p>
        </details>
        <details class="productContainer__description__details">
            <summary> Shipping & Payment </summary>
                <p>
                    Shipping and delivery <br> <br>

                    We are proud to offer international shipping services that currently operate in over 200 countries and islands worldwide. Nothing means more to us than bringing our customers great value and service. We will continue to grow to meet the needs of all our customers, delivering a service beyond all expectation anywhere in the world.
                </p>
        </details>
    </section>
</section>
    `
    return view
}

export default Product