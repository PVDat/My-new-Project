function  nobitadiLen() {
    let doiTuongN = document.getElementById("nobita");
    doiTuongN.style.top = parseInt(doiTuongN.style.top) - 5 + "px";
}
function nobitadiXuong() {
    let doiTuongN = document.getElementById("nobita");
    doiTuongN.style.top = parseInt(doiTuongN.style.top) + 5 + "px";
}
function nobitasangTrai() {
    let doiTuongN = document.getElementById("nobita");
    doiTuongN.style.left = parseInt(doiTuongN.style.left) - 5 + "px";
}
function nobitasangPhai() {
    let doiTuongN = document.getElementById("nobita");
    doiTuongN.style.left = parseInt(doiTuongN.style.left) + 5 + "px";
}
function xukadiLen() {
    let doiTuongX = document.getElementById("xuka");
    doiTuongX.style.top = parseInt(doiTuongX.style.top) - 5 + "px";
}
function xukadiXuong() {
    let doiTuongX = document.getElementById("xuka");
    doiTuongX.style.top = parseInt(doiTuongX.style.top) + 5 + "px";
}
function xukasangTrai() {
    let doiTuongX = document.getElementById("xuka");
    doiTuongX.style.left = parseInt(doiTuongX.style.left) - 5 + "px";
}
function xukasangPhai() {
    let doiTuongX = document.getElementById("xuka");
    doiTuongX.style.left = parseInt(doiTuongX.style.left) + 5 + "px";
}


function dieuKhienN(evt) {
    switch (evt.keyCode){

        case 87:
            nobitadiLen();
            break;
        case 83:
            nobitadiXuong();
            break;
        case 65:
            nobitasangTrai();
            break;
        case 68:
            nobitasangPhai();
            break;
    }

}
function dieuKhienX(evt1) {
    switch (evt1.keyCode) {
        case 38:
            xukadiLen();
            break;
        case 40:
            xukadiXuong();
            break;
        case 37:
            xukasangTrai();
            break;
        case 39:
            xukasangPhai();
            break;

    }
}

function docReady() {
    window.addEventListener('keydown', dieuKhienN);
    window.addEventListener('keydown', dieuKhienX);
}