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
        priceElement.textContent = `$${roll.totalPrice.toFixed(2)}`;

  
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeItem(index);


        rollItem.appendChild(imgElement);
        rollItem.appendChild(textGroup);
        rollItem.appendChild(priceElement);
        rollItem.appendChild(removeBtn);


        cartItemsContainer.appendChild(rollItem);
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