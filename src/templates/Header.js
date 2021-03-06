
const Header = () => {
    const view = `
    <header class="header" id="header">
        <div class="header__top">
            <div class="header__top__logo">
                <img class="header__top__logo--img" src="./src/styles/assets/Logo final 3.png" alt="Logo">
            </div>
            <div class="header__top__search">
                <input class="header__top__search--input" type="text" placeholder="What do you want to find?">
                <img class="header__top__search--img" src="./src/styles/assets/search-icon.png" alt="">
            </div>
                    <div class="header__top__searchIcons">
                        <a href="#">
                            <img src="./src/styles/assets/usa-flag.png" alt="usa-flag">
                        </a>
                        <span>
                            (USD)$
                        </span>
                        <a href="#">
                            <img src="./src/styles/assets/userlog-icon.png" alt="user-log-icon">
                        </a>
                        <a href="#">
                            <img src="./src/styles/assets/wish-icon.png" alt="wish-icon">
                        </a>
                        <a href="#">
                            <img src="./src/styles/assets/buycar-icon.png" alt="buy-car">
                        </a>
                    </div>
        </div>
        <div class="header__menu">
            <nav class="header__menu--list">
               <ul>
                   <li><a href="#">🔥TOP SELLING</a></li>
                   <li> <a href="#">👍BEST DEALS</a></li>
                   <li> <a href="#">⏱NEW ARRIVALS</a></li>
                   <li> <a href="#">⭐ALL PRODUCTS</a></li>
               </ul>
            </nav>
            <div class="switch-button">
                <!-- Checkbox -->
                <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox">
                <!-- Button -->
                <label for="switch-label" class="switch-button__label"></label>
            </div>
        </div>
    </header>
    `
    return view
}

export default Header