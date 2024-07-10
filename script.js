// let total = 0;

function productOnClick(productId, priceId) {
    // product section 
    const productName = productId;
    // console.log(productName);
    const productNameInnerText = productName.innerText;
    const nameContainer = document.getElementById('name-container');
    const li = document.createElement('li');
    li.innerText = productNameInnerText;
    nameContainer.appendChild(li);

    // price section 
    const productPrice = priceId;
    const pPInnerText = productPrice.innerText;
    const numberPPInnerText = parseFloat(pPInnerText);
    console.log(numberPPInnerText);

    // total price section
    const TotalPrice = document.getElementById('Total-price');
    const TotalPriceInner = TotalPrice.innerText;
    const numberTotalPrice = parseFloat(TotalPriceInner);
    const finalPrice = numberTotalPrice + numberPPInnerText;
    const twoDigit = finalPrice.toFixed(2);
    TotalPrice.innerText = twoDigit

    // Purchase section
    const Purchase = document.getElementById('Purchase');
    if (twoDigit > 0) {
        Purchase.removeAttribute('disabled')
    }

    const applyButton = document.getElementById('apply');
    if (finalPrice >= 200) {
        applyButton.removeAttribute('disabled');
    }

    // apply section
    applyButton.addEventListener('click', function () {
        const input = document.getElementById('apply-input');
        const inputValue = input.value;
        // console.log(inputValue);
        if (inputValue === 'SELL200') {
            const discount = 20 / 100;
            const finalDiscount = finalPrice * discount;
            const discountPriceElement = document.getElementById('discount');
            discountPriceElement.innerText = finalDiscount.toFixed(2);
            const total = finalPrice - finalDiscount;
            const totalContainer = document.getElementById('total');
            totalContainer.innerText = total.toFixed(2);
        }
    });
}
