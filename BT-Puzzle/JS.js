let Images = {
    imgsDB:
        [
            ["funny-cat1_part1x1.jpg",
                "funny-cat1_part2x1.jpg",
                "funny-cat1_part3x1.jpg",
                "funny-cat1_part4x1.jpg",
                "funny-cat1_part5x1.jpg"],
            ["monkey_part1x1.jpg",
                "monkey_part2x1.jpg",
                "monkey_part3x1.jpg",
                "monkey_part4x1.jpg",
                "monkey_part5x1.jpg"],
        ],
    imgpos: [0, 0, 0, 0, 0]
};
function setImagesRandom() {
    for (let i=1; i <= 5; i++)
    {
        let topicImg = Math.floor ((Math.random() * 2));
        replaceImage(i, topicImg);
    }
}
function replaceImage(index, topicImg) {
    Images.imgpos[index - 1] = topicImg;
    let imageName = "img" + index.toString();
    document.getElementById(imageName).setAttribute("src", "./Img/" + Images.imgsDB[topicImg][index - 1]);
}
function imageClick(index) {
    let topicImg = Images.imgpos[index - 1];
    if (topicImg === 0) {
        replaceImage(index, 1);
    }
    else if (topicImg === 1) {
        replaceImage(index, 2);
    }
    else {
        replaceImage(index, 0);
    }
    checkDone();
}
function checkDone() {
    let check = true;
    for ( let i = 1; i < 5; i++) {
        if (Images.imgpos[i] !== Images.imgpos[i - 1]) {
            check = false;
        }
    }
    if (check == false) {
        for (let i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "black 2px 3px 3px";
        }
        document.getElementById("result").innerHTML = "";
    } else {
        for (let i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "green 4px 4px 9px";
        }
        document.getElementById("result").innerHTML = "Done!";
    }
}
function main(){
    setImagesRandom();
}


window.onload = main();