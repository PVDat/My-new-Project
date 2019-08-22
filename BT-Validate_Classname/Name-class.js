let regex= /^[CAP]?[0-9]{4,4}[G-M]$/;

function isClassName(str) {
    if (regex.test(str)){
        console.log(str+" "+true);
    }else{
        console.log(str+" "+false)
    }
}