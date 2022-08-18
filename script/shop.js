
// let pickUp = document.getElementById('pickup')
// let deliV = document.getElementById('deli')
// let Address = document.getElementById('add')

// pickUp.onclick = function(){
//     Address.style.display = "none"
// }

// deliV.onclick = function(){
//     Address.style.display = "block"
// }


document.getElementById('sub').onclick = function(){
    alert ('Your purchase has been successfully completed you should recieve a message with the details soon')
}



let imgDesc = document.getElementById('img')
let imgLink = document.getElementById('aimg')
let gDesc = document.getElementById('desc')
let gPrice = document.getElementById('price')


// men
document.getElementById('bms1').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/ladyshoe2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/ladyshoe2.jpg"
    gDesc.innerHTML = "Clasic Work and Party shoe with2' heel"
    gPrice.innerHTML = "#10,000"
}

document.getElementById('bms2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/mens.jpeg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/mens.jpeg"
    gDesc.innerHTML = "Vintage shoe with 2' heel"
    gPrice.innerHTML = "#7,000"
}

document.getElementById('bms3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/men1.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/men1.jpg"
    gDesc.innerHTML = "Party shoes ready to wear"
    gPrice.innerHTML = "#9,000"
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
    gDesc.innerHTML = "Women Sandal with 5' heel"
    gPrice.innerHTML = "#12,000"
}

document.getElementById('bls3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/heel2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/heel2.jpg"
    gDesc.innerHTML = "Sandal with 3' pencil-heel"
    gPrice.innerHTML = "#6,000"
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
    gDesc.innerHTML = "Brown Reebok Sneakers";
    gPrice.innerHTML = "#13,000"
}

document.getElementById('bsn2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/sneakers2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/sneakers2.jpg"
    gDesc.innerHTML = "Nike running-shoes"
    gPrice.innerHTML = "#9,500"
}

document.getElementById('bsn3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/sneakers3.jpg";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/sneakers3.jpg"
    gDesc.innerHTML = "Classic Hiking Shoes"
    gPrice.innerHTML = "#8,000"
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
    gDesc.innerHTML = "Classic Sneakers for Teens"
    gPrice.innerHTML = "#12,000"
}

document.getElementById('bkd2').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/kids2.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/img/kids2.jpg"
    gDesc.innerHTML = "Plaid white and black shoe for a two year old"
    gPrice.innerHTML = "#5,000"
}

document.getElementById('bkd3').onclick = function(){
    document.getElementById('now').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('body').style.backgroundColor = "darkgrey";

    imgDesc.style.background = "url(../img/girls1.jpg)";
    imgDesc.style.backgroundSize = "cover"
    imgDesc.style.backgroundPosition = "center"
    imgLink.href = "img/girls1.jpg"
    gDesc.innerHTML = "Pink Minnie-shoes for your baby girl"
    gPrice.innerHTML = "#6,500"
}