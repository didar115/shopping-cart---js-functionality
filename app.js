
// phone plus button
document.getElementById("phone-plus").addEventListener("click", function () {
	const getTag = document.getElementById("phone-count");
	const getValueInText = getTag.value;
	const getValue = parseInt(getValueInText);
	const addValue = getValue + 1;
	getTag.value = addValue;
    phonePriceUpdate(addValue, "phone-price", 1219);
    calculateSubTotal();
    taxCalculation();
    
});

function phonePriceUpdate(id, priceField, productPrice) {
	const getTag = document.getElementById(priceField);
	const price = productPrice * id;
    getTag.innerText = price;
    
}


// phone minus button 
document.getElementById("phone-minus").addEventListener("click", function () {
	const getTag = document.getElementById("phone-count");
	const getValueInText = getTag.value;
	const getValue = parseInt(getValueInText);
	if (getValue >= 1) {
		const minusValue = getValue - 1;
		getTag.value = minusValue;
        phonePriceUpdate(minusValue, "phone-price", 1219);
        calculateSubTotal();
        taxCalculation();
	}
});



// case plus button
document.getElementById("case-plus").addEventListener("click", function () {
	const getTag = document.getElementById("case-count");
	const getValueInText = getTag.value;
	const getValue = parseInt(getValueInText);
	const addValue = getValue + 1;
	getTag.value = addValue;
    phonePriceUpdate(addValue, "case-price", 59);
    calculateSubTotal();
    taxCalculation();
});


// case minus buttion 
document.getElementById("case-minus").addEventListener("click", function () {
	const getTag = document.getElementById("case-count");
	const getValueInText = getTag.value;
	const getValue = parseInt(getValueInText);
	if (getValue >= 1) {
		const minusValue = getValue - 1;
		getTag.value = minusValue;
        phonePriceUpdate(minusValue, "case-price", 59);
        calculateSubTotal();
        taxCalculation();
	}
});

//sub total calculation

function calculateSubTotal() {
    const getTagPhone = document.getElementById('phone-price');
    const getValueInTextPhone = getTagPhone.innerText;
    const getValuePhone = parseInt(getValueInTextPhone);

    const getTagCase = document.getElementById('case-price');
    const getValueInTextCase = getTagCase.innerText;
    const getValueCase = parseInt(getValueInTextCase);
   

    const subTotal = getValuePhone + getValueCase;
    const sub = document.getElementById('sub-total');
   
    sub.innerText = subTotal;
}

// total calculation after adding 10% tax 

function taxCalculation() {
    const getTag = document.getElementById('sub-total');
    const getValueInText = getTag.innerText;
    const getValue = parseInt(getValueInText);
    const tax = getValue * .10;
    const getTagTax = document.getElementById('tax');
    getTagTax.innerText = parseInt(tax);
    const total = getValue + parseInt(tax);

    const getTagTotal = document.getElementById('total');
    
    getTagTotal.innerText = parseInt(total);


}
