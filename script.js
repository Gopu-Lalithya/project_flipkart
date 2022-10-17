function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('slider').style.opacity='0.7';
    document.getElementById('couponContents').style.opacity='1'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('slider').style.opacity='1'
}

function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}