
// let pickUp = document.getElementById('pickup')
// let deliV = document.getElementById('deli')
// let Address = document.getElementById('add')

// pickUp.onclick = function(){
//     Address.style.display = "none"
// }

// deliV.onclick = function(){
//     Address.style.display = "block"
// }


// document.getElementById('sub').onclick = function(){
//     alert ('Your purchase has been successfully completed you should recieve a message with the details soon')
// }

document.getElementById('x').onclick = function(){
    document.getElementById('now').style.display = "none";
    document.getElementById('main').style.display = "block";
}



let imgDesc = document.getElementById('img')
let imgLink = document.getElementById('aimg')
let gDesc = document.getElementById('desc')
let gPrice = document.getElementById('price')
let option1 = document.getElementById('opt1')
let option2 = document.getElementById('opt2')
let option3 = document.getElementById('opt3')
let option4 = document.getElementById('opt4')


// trending
document.getElementById('btr1').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/mens.jpeg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/mens.jpeg"
    gDesc.value = "Trending-1"
    gPrice.value = "#7,000"

    option1.innerHTML = "black"
    option1.value = "black"
    option2.innerHTML = "brown"
    option2.value = "brown"
    option3.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
}

document.getElementById('btr2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/heels1.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/heels1.jpg"
    gDesc.value = "Trending-2"
    gPrice.value = "#9,000"
}

document.getElementById('btr3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(..img/sneakers2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/sneakers2.jpg"
    gDesc.value = "Trending-3"
    gPrice.value = "#9,500"
}

document.getElementById('btr4').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/ladyshoe1.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/ladyshoe1.jpg"
    gDesc.value = "Trending-4"
    gPrice.value = "#12,000"
}

// discounted
document.getElementById('dsc1').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/girls5.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/girls5.jpg"
    gDesc.value = "Discounted-1"
    gPrice.value = "#4,500"

    option1.innerHTML = "pink"
    option1.value = "pink"
    option2.style.display = "none";
    option3.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
}

document.getElementById('dsc2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/boys7.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center";
    imgLink.href = "img/boys7.jpg.jpg";
    gDesc.value = "Discounted-2";
    gPrice.value = "#13,500"
}

document.getElementById('dsc3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/kids8.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/kids8.jpg"
    gDesc.value = "Discounted-3"
    gPrice.value = "#9,600"
}

document.getElementById('dsc4').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/men9.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/men9.jpg"
    gDesc.value = "Discounted-4"
    gPrice.value = "#9,000"
}


// men
document.getElementById('bms1').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/ladyshoe2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/ladyshoe2.jpg"
    gDesc.value = "Clasic Work and Party shoe with2' heel"
    gPrice.value = "#10,000"
}

document.getElementById('bms2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/mens.jpeg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/mens.jpeg"
    gDesc.value = "Vintage shoe with 2' heel"
    gPrice.value = "#7,000"
}

document.getElementById('bms3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/men1.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/men1.jpg"
    gDesc.value = "Party shoes ready to wear"
    gPrice.value = "#9,000"
}



// ladies
document.getElementById('buy').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";
}

document.getElementById('bls2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/ladyshoe1.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/ladyshoe1.jpg"
    gDesc.value = "Women Sandal with 5' heel"
    gPrice.value = "#12,000"
}

document.getElementById('bls3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/heel2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/heel2.jpg"
    gDesc.value = "Sandal with 3' pencil-heel"
    gPrice.value = "#6,000"
}


// Sneakers
document.getElementById('bsn1').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/sneakers1.jpg)";
    imgDesc.style.backgroundSize = "cover";
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/sneakers1.jpg";
    gDesc.value = "Brown Reebok Sneakers";
    gPrice.value = "#13,000"

    option1.innerHTML = "brown"
    option1.value = "brown"
    option2.style.display = "none";
    option3.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
}

document.getElementById('bsn2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/sneakers2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/sneakers2.jpg"
    gDesc.value = "Nike running-shoes"
    gPrice.value = "#9,500"
}

document.getElementById('bsn3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/sneakers3.jpg";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/sneakers3.jpg"
    gDesc.value = "Classic Hiking Shoes"
    gPrice.value = "#8,000"
}

// Kiddies
document.getElementById('bkd1').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/boys1.jpg";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/boys1.jpg"
    gDesc.value = "Classic Sneakers for Teens"
    gPrice.value = "#12,000"
}

document.getElementById('bkd2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/kids2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/img/kids2.jpg"
    gDesc.value = "Plaid white and black shoe for a two year old"
    gPrice.value = "#5,000"
}

document.getElementById('bkd3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/girls1.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/girls1.jpg"
    gDesc.value = "Pink Minnie-shoes for your baby girl"
    gPrice.value = "#6,500"

    option1.innerHTML = "pink"
    option1.value = "pink"
    option2.style.display = "none";
    option3.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
}