let inputheigh;
let inputwidgh;
{
    inputheigh = prompt("Nhập chiều dài: ");
    inputwidgh = prompt("Nhập chiều rộng: ");
}
let widgh = parseInt(inputwidgh);
let heigh = parseInt(inputheigh);
let area = heigh * widgh;
{
    document.write("Chiều dài bằng: " + inputheigh);
    document.write("<br/>");
    document.write("Chiều rộng bằng: " + inputwidgh);
    document.write("<br/>");
    document.write("Diện tích là: " + area);
}