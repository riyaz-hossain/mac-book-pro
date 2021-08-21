function updateMemoryPrice(isEightGb) {
    let eightGbMemPrice = document.getElementById('memory-price');

    if (isEightGb === true) {
        eightGbMemPrice.innerText = parseInt(0);
    }
    if (isEightGb === false) {
        eightGbMemPrice.innerText = parseInt(180)
    }
    total();
}
// function updateMemoryPrice(isEightGb) {
//     let eightGbMemory= document.getElementById('memory-price');
//     let eightGbMemoryPrice = eightGbMemory.innerText;
//     if (isEightGb === true) {
//         eightGbMemoryPrice = parseInt(255);
//     }
//     if (isEightGb === false) {
//         eightGbMemoryPrice = parseInt(256)
//     }
// }


function updateStoragePrice(storageSize) {
    let storagePrice = document.getElementById('storage-price')
    if (storageSize === 256) {
        storagePrice.innerText = parseInt(0)
    }
    if (storageSize === 512) {
        storagePrice.innerText = parseInt(100)
    }
    if (storageSize === '1TB') {
        storagePrice.innerText = parseInt(180)
    }
    total()
}

function updateDeliveryCharge(isFree) {
    const deliveryCharge = document.getElementById('delivery-charge');
    if (isFree === true) {
        deliveryCharge.innerText = parseInt(0);
    }
    if (isFree === false) {
        deliveryCharge.innerText = parseInt(20);
    }
    total()
}

function total() {
    const laptopPrice = document.getElementById('laptop-price').innerText;
    const totalPrice = parseInt(getMemoryPrice()) + parseInt(laptopPrice) + parseInt(getStoragePrice()) + parseInt(getDeliveryCharge());
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
    return totalPrice;
}

// storage 

document.getElementById('storage-1').addEventListener('click',
    function () {
        updateStoragePrice(256)
    })

document.getElementById('storage-2').addEventListener('click',
    function () {
        updateStoragePrice(512)
    })

document.getElementById('storage-3').addEventListener('click',
    function () {
        updateStoragePrice('1TB')
    })

//memory 

document.getElementById('memory-eight').addEventListener('click',
    function () {
        updateMemoryPrice(true)
    })

document.getElementById('memory-sixteen').addEventListener('click',
    function () {
        updateMemoryPrice(false)
    })

// delivery

document.getElementById('free-delivery').addEventListener('click',
    function () {
        updateDeliveryCharge(true)
    })

document.getElementById('delivery').addEventListener('click',
    function () {
        updateDeliveryCharge(false)
    })

//get memory price 

const getMemoryPrice = () => {
    const price = document.getElementById('memory-price');
    const memoryPrice = parseInt(price.innerText);
    return memoryPrice;
}

//get storage Price

const getStoragePrice = () => {
    const price = document.getElementById("storage-price");
    const storagePrice = parseInt(price.innerText);
    return storagePrice;
}

// get delivery charge 

const getDeliveryCharge = () => {
    const charge = document.getElementById('delivery-charge');
    const deliveryCharge = parseInt(charge.innerText);
    return deliveryCharge;
}