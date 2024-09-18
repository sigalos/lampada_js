const turnOn = document.getElementById ('turnOnOff');
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

function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampBroken);