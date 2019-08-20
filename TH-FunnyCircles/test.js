let cas = document.getElementById('Cas').getContext("2d");
    cas.width=1280;
    cas.height=610;
function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function Circle(x,y,radius,xSpeed,ySpeed, color) {
    this.drawCircle = function () {
        cas.beginPath();
        cas.arc(x, y, radius, 0, Math.PI * 2, false);
        cas.fillStyle = color;
        cas.fill();
    };
    this.changeD = function () {
        if (x + radius > cas.width || x - radius < 0) {
            xSpeed = -xSpeed;
        }
        if (y + radius > cas.height || y - radius < 0) {
            ySpeed = -ySpeed;
        }
        x += xSpeed;
        y += ySpeed;
        this.drawCircle()
    };
}
    let multiCircle = [];
        for (let i = 0; i<20 ; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let radius = Math.floor(Math.random() * 80);
            let xSpeed = Math.random() * 8;
            let ySpeed = Math.random() * 8;
            let color = getRandomColor();

            multiCircle.push(new Circle(x, y, radius, xSpeed, ySpeed, color));
        }
    function motion() {

        requestAnimationFrame(motion);
        cas.clearRect(0, 0, innerWidth, innerHeight);
        for (let i=0; i< multiCircle.length; i++){
            multiCircle[i].changeD();
        }
    }
    motion();
