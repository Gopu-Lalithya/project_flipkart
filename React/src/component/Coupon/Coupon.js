import React from "react";

const Coupon = () => {

	const closeCoupon = () => {
		document.getElementById('coupon').style.visibility = 'hidden';
		document.getElementById('main').style.opacity='1';
	}

	return (
		<div id="coupon">
			<button className="btn-coupon" onClick={closeCoupon}>X</button>
			<img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/edc6e78958d41dd3.jpg?q=50" alt="coupon"/>
		</div>
	)
};

export default Coupon;