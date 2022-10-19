function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('slider').style.opacity='0.7';
    document.getElementById('couponContents').style.opacity='1'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('slider').style.opacity='1'
}

function changeMode(anchor){
    let mybody = document.body;
    mybody.classList.toggle('mydark');

    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

