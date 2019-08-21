let regAcc = /^[a-z0-9_]{6,}$/;

function check(str) {
    if (regAcc.test(str)){
        console.log(str +" "+true)
    } else {
        console.log(str +" "+false)
    }
}
