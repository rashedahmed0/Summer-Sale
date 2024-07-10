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

    const apply = document.getElementById('apply');
    if (twoDigit >= 200) {
        apply.removeAttribute('disabled')
    }


}
