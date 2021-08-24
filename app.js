// phone plus button
document.getElementById("phone-plus").addEventListener("click", function () {
	const getValue = getInnerValue('phone-count');
	const addValue = getValue + 1;
	document.getElementById("phone-count").value = addValue;
	phonePriceUpdate(addValue, "phone-price", 1219);
	calculateSubTotal();
	taxCalculation();
});
// get inner value form input tag
function getInnerValue(fieldId) {
	const getTag = document.getElementById(fieldId);
	const getValueInText = getTag.value;
    const getValue = parseInt(getValueInText);
    return getValue;
}

function phonePriceUpdate(id, priceField, productPrice) {
	const getTag = document.getElementById(priceField);
	const price = productPrice * id;
	getTag.innerText = price;
}

// phone minus button
document.getElementById("phone-minus").addEventListener("click", function () {
	const getValue = getInnerValue('phone-count');
	if (getValue >= 1) {
		const minusValue = getValue - 1;
		document.getElementById("phone-count").value = minusValue;
		phonePriceUpdate(minusValue, "phone-price", 1219);
		calculateSubTotal();
		taxCalculation();
	}
});

// case plus button
document.getElementById("case-plus").addEventListener("click", function () {
	const getValue = getInnerValue('case-count');
	const addValue = getValue + 1;
	document.getElementById("case-count").value = addValue;
	phonePriceUpdate(addValue, "case-price", 59);
	calculateSubTotal();
	taxCalculation();
});

// case minus buttion
document.getElementById("case-minus").addEventListener("click", function () {
	const getValue = getInnerValue('case-count');
	if (getValue >= 1) {
		const minusValue = getValue - 1;
		document.getElementById("case-count").value = minusValue;
		phonePriceUpdate(minusValue, "case-price", 59);
		calculateSubTotal();
		taxCalculation();
	}
});

// get innner Text
function getInnerText(fieldId) {
	const getTag = document.getElementById(fieldId);
	const getValueInText = getTag.innerText;
	const getValue = parseInt(getValueInText);
	return getValue;
}

//sub total calculation

function calculateSubTotal() {
	const getValuePhone = getInnerText('phone-price');
	const getValueCase = getInnerText('case-price');
	const subTotal = getValuePhone + getValueCase;
	const sub = document.getElementById("sub-total");
	sub.innerText = subTotal;
}

// total calculation after adding 10% tax

function taxCalculation() {
	const getValue = getInnerText('sub-total');
	const tax = getValue * 0.1;
	const getTagTax = document.getElementById("tax");
	getTagTax.innerText = parseInt(tax);
	const total = getValue + parseInt(tax);
	const getTagTotal = document.getElementById("total");
	getTagTotal.innerText = parseInt(total);
}

//remove all data in phone section
document.getElementById("remove-phone").addEventListener("click", function () {
	const getTagPhonePrice = document.getElementById("phone-price");
	const getTagPhoneCount = document.getElementById("phone-count");
	getTagPhonePrice.innerText = 0;
    getTagPhoneCount.value = 0;
	calculateSubTotal();
	taxCalculation();
});

//remove all data in case section
document.getElementById("remove-case").addEventListener("click", function () {
	const getTagPhonePrice = document.getElementById("case-price");
	const getTagPhoneCount = document.getElementById("case-count");
	getTagPhoneCount.value = 0;
	getTagPhonePrice.innerText = 0;
	calculateSubTotal();
	taxCalculation();
});
