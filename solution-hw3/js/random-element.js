let glazingOptions = [
    { name: 'Keep original', price: 0.00 },
    { name: 'Sugar milk', price: 0.00 },
    { name: 'Vanilla milk', price: 0.50 },
    { name: 'Double chocolate', price: 1.50 }
  ];
  
  let packSizeOptions = [
    { size: '1', multiplier: 1 },
    { size: '3', multiplier: 3 },
    { size: '6', multiplier: 5 },
    { size: '12', multiplier: 10 }
  ];
  
  let basePrice = 2.49;
  
  function updatePrice() {
    let glazingSelect = document.querySelector('#glazingSelect').value;
    let packSizeSelect = document.querySelector('#packSizeSelect').value;
  
    let selectedGlazing = glazingOptions[glazingSelect];
    let selectedPackSize = packSizeOptions[packSizeSelect];
  
    let totalPrice = (basePrice + selectedGlazing.price) * selectedPackSize.multiplier;

    document.querySelector('#priceDisplay').innerText = `$${totalPrice.toFixed(2)}`
    document.querySelector('#addToCartBtn').disabled = false;;
  }
  
  function populateDropdowns() {
    let glazingSelect = document.querySelector('#glazingSelect');
    let packSizeSelect = document.querySelector('#packSizeSelect');
  
    glazingOptions.forEach((glazing, index) => {
      let option = document.createElement('option');
      option.text = glazing.name;
      option.value = index;
      glazingSelect.add(option);
    });
  
    packSizeOptions.forEach((packSize, index) => {
      let option = document.createElement('option');
      option.text = packSize.size;
      option.value = index;
      packSizeSelect.add(option);
    });
  }
  
  document.querySelector('#glazingSelect').addEventListener('change', updatePrice);
  document.querySelector('#packSizeSelect').addEventListener('change', updatePrice);
  
  window.onload = function() {
    populateDropdowns();
    updatePrice(); 
};