!function(n){var t={};function s(i){if(t[i])return t[i].exports;var e=t[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=n,s.c=t,s.d=function(n,t,i){s.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,t){if(1&t&&(n=s(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)s.d(i,e,function(t){return n[t]}.bind(null,e));return i},s.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(t,"a",t),t},s.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},s.p="",s(s.s=0)}([function(n,t,s){"use strict";s.r(t);var i=()=>'\n    <header class="header" id="header">\n        <div class="header__top">\n            <div class="header__top__logo">\n                <img class="header__top__logo--img" src="./src/styles/assets/Logo final 3.png" alt="Logo">\n            </div>\n            <div class="header__top__search">\n                <input class="header__top__search--input" type="text" placeholder="What do you want to find?">\n                <img class="header__top__search--img" src="./src/styles/assets/search-icon.png" alt="">\n            </div>\n                    <div class="header__top__searchIcons">\n                        <a href="#">\n                            <img src="./src/styles/assets/usa-flag.png" alt="usa-flag">\n                        </a>\n                        <span>\n                            (USD)$\n                        </span>\n                        <a href="#">\n                            <img src="./src/styles/assets/userlog-icon.png" alt="user-log-icon">\n                        </a>\n                        <a href="#">\n                            <img src="./src/styles/assets/wish-icon.png" alt="wish-icon">\n                        </a>\n                        <a href="#">\n                            <img src="./src/styles/assets/buycar-icon.png" alt="buy-car">\n                        </a>\n                    </div>\n        </div>\n        <div class="header__menu">\n            <nav class="header__menu--list">\n               <ul>\n                   <li><a href="#">🔥TOP SELLING</a></li>\n                   <li> <a href="#">👍BEST DEALS</a></li>\n                   <li> <a href="#">⏱NEW ARRIVALS</a></li>\n                   <li> <a href="#">⭐ALL PRODUCTS</a></li>\n               </ul>\n            </nav>\n            <div class="switch-button">\n                \x3c!-- Checkbox --\x3e\n                <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox">\n                \x3c!-- Button --\x3e\n                <label for="switch-label" class="switch-button__label"></label>\n            </div>\n        </div>\n    </header>\n    ';var e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var a=()=>'\n        <section class="Error404">\n            <h2>Error 404</h2>\n        </section>\n    ';var o=n=>{if(n.length<=3){return"/"===n?n:"/Home"}if("/Product"===n){return"/Product"}return"/"+n};const r={"/":()=>'\n    <section class="main" id="content">\n        <section class="Container">\n            <div class="Container__Product>\n                <img class="Container__Product--img" src="./src/styles/assets/7.jpg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">\n                <img class="Container__Product--img" src="./src/styles/assets/8.jpeg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">\n                <img class="Container__Product--img" src="./src/styles/assets/9.jpeg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">\n                <img class="Container__Product--img" src="./src/styles/assets/1.jpeg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">\n                <img class="Container__Product--img" src="./src/styles/assets/2.jpg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">\n                <img class="Container__Product--img" src="./src/styles/assets/3.jpg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">\n                <img class="Container__Product--img" src="./src/styles/assets/4.jpg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">return view>\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="Container__Product">\n                <img class="Container__Product--img" src="./src/styles/assets/6.jpg" alt="">\n                <div class="Container__Product__listInfo">\n                    <div class="Container__Product__listInfo--price">\n                        <span>US $41.95</span>\n                        <small>US $60.95</small>\n                    </div>\n                    <div class="Container__Product__listInfo--btnBuy">\n                        <button type="button"> ADD TO CART </button>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </section>\n    ',"/Product":()=>{e();return'\n    <section class="productContainer">\n    <section class="productContainer__top">\n        <div class="productContainer__top--imgItem">\n            <img src="./src/styles/assets/1.jpeg" alt="">\n        </div>\n        <section class="productContainer__top__rightInfo">\n            <div class="productContainer__top__rightInfo--topInfo">\n                <h1>Chaqueta capsule corp</h1>\n                <div class="prices">\n                    <span class="price">\n                        $ 39.98\n                    </span>\n                    <span class="desc">\n                        $ 24.99\n                    </span>\n                </div>\n                <a href="#">Free Shipping & Returns</a>\n            </div>\n            <div class="productContainer__top__rightInfo--colors">\n                <div class="yellow"></div>\n                <div class="blue"></div>\n                <div class="grey"></div>\n            </div>\n            <button class="productContainer__top__rightInfo--btnCart">ADD TO CART</button>\n        </section>\n    </section>\n\n    <section class="productContainer__description">\n        <details class="productContainer__description__details">\n            <summary> Product Details</summary>\n            <ul>\n                <li>Item Type: chaqueta</li>\n                <li>Material: Poliester</li>\n            </ul>\n            <h3>Package Includes:</h3>\n                <ul>\n                    <li>1 x Chaqueta</li>\n                </ul>\n        </details>\n        <details class="productContainer__description__details">\n            <summary> Item Specifics</summary>\n                <p>\n                    <span>Type:</span> chaqueta\n                </p>\n                <p>\n                    <span>Dysign:</span> Anime\n                </p>\n                <p>\n                    <span>Feature:</span> woolen fabric\n                </p>\n        </details>\n        <details class="productContainer__description__details">\n            <summary> Shipping & Payment </summary>\n                <p>\n                    Shipping and delivery <br> <br>\n\n                    We are proud to offer international shipping services that currently operate in over 200 countries and islands worldwide. Nothing means more to us than bringing our customers great value and service. We will continue to grow to meet the needs of all our customers, delivering a service beyond all expectation anywhere in the world.\n                </p>\n        </details>\n    </section>\n</section>\n    '},"/Error404":a};var c=async()=>{const n=document.getElementById("header"),t=document.getElementById("content");n.innerHTML=await i();let s=e(),c=await o(s),l=r[c]?r[c]:a;t.innerHTML=await l};window.addEventListener("load",c),window.addEventListener("hashchange",c)}]);