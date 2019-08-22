let regex = /^[0-9]{2,2}0+[0-9]{9,9}$/;
function check(str) {
    if (regex.test(str)){
        console.log(str +" "+true)
    } else {
        console.log(str +" "+false)
    }
}