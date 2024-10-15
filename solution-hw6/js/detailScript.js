const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const rollType = urlParams.get('roll');

if (rollType && rolls[rollType]) {
    const rollData = rolls[rollType];

    document.getElementById('roll-name').innerText = rollType + ' Cinnamon Roll';
    document.getElementById('roll-image').src = `../solution-hw1/assets/products/${rollData.imageFile}`;
    document.getElementById('roll-image').alt = `${rollType} Cinnamon Roll`;
    document.getElementById('priceDisplay').innerText = `$${rollData.basePrice.toFixed(2)}`;
    document.getElementById('addToCartBtn').disabled = false;
} else {
    document.getElementById('roll-image').src = 'default-rollType.jpg';
    document.getElementById('roll-image').alt = 'Default Cinnamon Roll';
    document.getElementById('priceDisplay').innerText = '$0.00';
}

const glazingOptions = {
    "Keep Original": 0.00,
    "Sugar Milk": 0.50,
    "Vanilla Milk": 0.50,
    "Double Chocolate": 1.50
};

const packSizeOptions = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
};

const glazingSelect = document.getElementById('glazing'); 
const packSizeSelect = document.getElementById('packSize'); 

for (const glazing in glazingOptions) {
    const option = document.createElement('option');
    option.value = glazing; 
    option.text = glazing;
    glazingSelect.appendChild(option);
}

for (const size in packSizeOptions) {
    const option = document.createElement('option');
    option.value = size; 
    option.text = `${size} Pack`;
    packSizeSelect.appendChild(option);
}

function updatePrice() {
    const selectedGlazing = glazingSelect.value; 
    const selectedPackSize = parseInt(packSizeSelect.value); 
    const basePrice = rolls[rollType].basePrice;

    const glazingPrice = glazingOptions[selectedGlazing] || 0;

    const totalPrice = (basePrice + glazingPrice) * selectedPackSize; 
    document.getElementById('priceDisplay').innerText = `$${totalPrice.toFixed(2)}`; 
}

glazingSelect.addEventListener('change', updatePrice);
packSizeSelect.addEventListener('change', updatePrice);

// Add to Cart
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

    get totalPrice() {
        const glazingOptions = {
            "Keep Original": 0.00,
            "Sugar Milk": 0.50,
            "Vanilla Milk": 0.50,
            "Double Chocolate": 1.50
        };

        const packSizeOptions = {
            1: 1,
            3: 3,
            6: 5,
            12: 10
        };

        const glazingPrice = glazingOptions[this.glazing] || 0;
        const multiplier = packSizeOptions[this.size] || 1;

        return (this.basePrice + glazingPrice) * multiplier;
    }
}

let cart = loadCartFromLocalStorage(); 

const addToCartButton = document.getElementById('addToCartBtn');

addToCartButton.addEventListener('click', function() {
    const rollType = document.getElementById('roll-name').textContent.split(' ')[0]; 
    const glazing = glazingSelect.value; 
    const packSize = packSizeSelect.value;
    const basePrice = rolls[rollType].basePrice; 

    const rollItem = new Roll(rollType, glazing, packSize, basePrice);

    cart.push(rollItem); 
    saveCartToLocalStorage(); 

    console.log(cart); 
});

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    } else {
        return [];
    }
}
