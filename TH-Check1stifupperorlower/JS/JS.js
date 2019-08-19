
let regExp = /^[A-Z]/;
function isFirstLetterUpperCase(str) {
     regExp = /^[A-Z]/;
    if(regExp.test(str)){
        console.log(str + ': String first letter is uppercase');
    } else {
        console.log(str + ': String first letter is not uppercase');
    }
}
