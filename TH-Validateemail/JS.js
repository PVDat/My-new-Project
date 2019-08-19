
let regemail = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

function isAnEmail(str) {
    if (regemail.test(str)){
        console.log(str +" "+ true);
    } else {
        console.log(str +" "+ false);
    }
}
