function calculatePrice (pricePer, amount) {
			document.getElementById(SSVprice).innerHTML = pricePer * amount;
		}

		function roundAmount (amount) {
			return Math.round (amount);
		}