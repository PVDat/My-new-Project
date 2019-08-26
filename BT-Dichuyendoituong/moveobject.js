
function object(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getObject =function () {
        return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top:'+this.top+'px;left:'+this.left+'px;position:absolute;" />';
    };

    this.movement = function () {
        this.left +=20;
    }

}

let face = new object('56.png',50, 50, 50);
function start() {
    if (face.left < window.innerWidth - face.size){
        face.movement()
    }
    document.getElementById("supriseFace").innerHTML = face.getObject();
    setTimeout(start,500)
}
start();

