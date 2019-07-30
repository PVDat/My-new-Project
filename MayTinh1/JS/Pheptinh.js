function ADD()
{
    let soHang1 = parseInt(document.getElementById("soHang1").value);
    let soHang2 = parseInt(document.getElementById("soHang2").value);
    KetQua = soHang1 + soHang2;

    let hienThiKetQua = document.getElementById("hienThiKetQua");
    hienThiKetQua.innerHTML = "Ket qua bang: " + KetQua;
}
function SUB()
{
    let soHang1 = parseInt(document.getElementById("soHang1").value);
    let soHang2 = parseInt(document.getElementById("soHang2").value);
    KetQua = soHang1 - soHang2;

    let hienThiKetQua = document.getElementById("hienThiKetQua");
    hienThiKetQua.innerHTML = "Kết quả bằng: " + KetQua;
}
function MULTI()
{
    let soHang1 = parseInt(document.getElementById("soHang1").value);
    let soHang2 = parseInt(document.getElementById("soHang2").value);
    KetQua = soHang1 * soHang2;

    let hienThiKetQua = document.getElementById("hienThiKetQua");
    hienThiKetQua.innerHTML = "Kết quả bằng: " + KetQua;
}
function DIV()
{
    let soHang1 = parseInt(document.getElementById("soHang1").value);
    let soHang2 = parseInt(document.getElementById("soHang2").value);
    KetQua = soHang1 / soHang2;

    let hienThiKetQua = document.getElementById("hienThiKetQua");
    hienThiKetQua.innerHTML = "Kết quả bằng: " + KetQua;
}