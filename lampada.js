const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ( 'lamp-broken') > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = 'img/lamp-on.png'
    }
}
function lampOff () {
    if ( !isLampBroken () ) {
    lamp.src = 'img/lamp-off.png'
    }
}

function lampBroken () {
    lamp.src = 'img/lamp-broken.png'
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampBroken);