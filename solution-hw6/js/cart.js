class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }

    get totalPrice() {
        const glazingOptions = {
            "Keep Original": 0.00,
            "Sugar Milk": 0.50,
            "Vanilla Milk": 0.50,
            "Double Chocolate": 1.50
        };

        const packSizeOptions = {
            "1": 1,
            "3": 3,
            "6": 5,
            "12": 10
        };

        const glazingPrice = glazingOptions[this.glazing] || 0;
        const multiplier = packSizeOptions[this.size] || 1;

        return (this.basePrice + glazingPrice) * multiplier;
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        return parsedCart.map(item => new Roll(item.type, item.glazing, item.size, item.basePrice));
    } else {
        return [];
    }
}

let cart = loadCartFromLocalStorage();
console.log(cart);

function displayCartItems() {
    const cartItemsContainer = document.querySelector('.container');

    cartItemsContainer.innerHTML = '';

    cart.forEach((roll, index) => {
        const rollItem = document.createElement('div');
        rollItem.classList.add('cartlist');
    
        const imgElement = document.createElement('img');
        imgElement.classList.add('cartImg');
        imgElement.src = `../solution-hw1/assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg`;
        imgElement.alt = `${roll.type} cinnamon roll`;
    
        const textGroup = document.createElement('div');
        textGroup.classList.add('textgroup1');
    
        const rollName = document.createElement('p');
        rollName.classList.add('CartItem');
        rollName.innerHTML = `${roll.type} Cinnamon Roll <br>Glazing: ${roll.glazing}`;
    
        const rollPackSize = document.createElement('p');
        rollPackSize.classList.add('CartItem');
        rollPackSize.textContent = `Pack Size: ${roll.size}`;
    
        textGroup.appendChild(rollName);
        textGroup.appendChild(rollPackSize);
    
        const priceElement = document.createElement('p');
        priceElement.classList.add('priceCart');
        priceElement.textContent = `$${parseFloat(roll.totalPrice).toFixed(2)}`;
    
        rollItem.appendChild(imgElement);
        rollItem.appendChild(textGroup);
        rollItem.appendChild(priceElement);
    

        cartItemsContainer.appendChild(rollItem);
    
        const removeContainer = document.createElement('div');
        removeContainer.classList.add('removeContainer'); 
    
        const removeBtn = document.createElement('a');
        removeBtn.href = '#';
        removeBtn.classList.add('remove');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeItem(index);
        removeContainer.appendChild(removeBtn);
    
        cartItemsContainer.appendChild(removeContainer);
    });    
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = cart.reduce((acc, roll) => acc + roll.totalPrice, 0);
    const totalPriceElement = document.querySelector('.totalPrice .priceCart2');
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage(); 
    displayCartItems(); 
}

displayCartItems();
