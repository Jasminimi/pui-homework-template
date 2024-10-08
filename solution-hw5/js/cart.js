class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
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
        const multiplier = packSizeOptions[this.size] || 0;

        return (this.basePrice + glazingPrice) * multiplier;
    }
}

const cart = [
    new Roll('Original', 'Sugar Milk', 1, 2.49),
    new Roll('Walnut', 'Vanilla Milk', 12, 3.99),
    new Roll('Raisin', 'Sugar Milk', 3, 2.99),
    new Roll('Apple', 'Original', 3, 3.49)
];

console.log(cart);

function displayCartItems() {

    const cartContainer = document.querySelector('.container');

    if(cartContainer) {
    cartContainer.innerHTML = '';
    }

    cart.forEach((roll, index) => {
        const rollItem = document.createElement('div');
        rollItem.className = 'cartlist';
        rollItem.innerHTML = `
            <div class="cartlist1">
                <img class="cartImg" src="../solution-hw1/assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg" alt="${roll.type} cinnamon roll">
                <div class="textgroup1">
                    <p class="CartItem">${roll.type} Cinnamon Roll <br>Glazing: ${roll.glazing}</p>
                    <p class="CartItem">Pack Size: ${roll.size}</p>
                </div>
                <div class="textgroup1-1">
                    <p class="priceCart">$${roll.totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <p class="remove" onclick="removeItem(${index})">Remove</p>
        `;

        cartContainer.appendChild(rollItem);
    });

    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = cart.reduce((acc, roll) => acc + roll.totalPrice, 0);

    const totalPriceElement = document.querySelector('.totalPrice .priceCart2 p');
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCartItems();
}

displayCartItems();