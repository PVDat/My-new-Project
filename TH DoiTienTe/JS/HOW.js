function conv()
{
    let tVao = document.getElementById("tVao").value;
    let tRa = document.getElementById("tRa").value;
    let soTien = parseInt(document.getElementById("soTien").value);

    if(tVao === "USD" && tRa === "VND")
    {
        document.getElementById("ketQua").value = soTien*23260;
    }
    else
    if(tVao === "USD" && tRa === "YEN")
    {
        document.getElementById("ketQua").value = soTien*108;
    }
    else
    if(tVao === "YEN" && tRa === "VND")
    {
        document.getElementById("ketQua").value = soTien*200;
    }
    else
    if(tVao === "YEN" && tRa === "USD")
    {
        document.getElementById("ketQua").value = soTien/108;
    }
    else
    if(tVao === "VND" && tRa === "USD")
    {
        document.getElementById("ketQua").value = soTien/23260;
    }
    else
    if(tVao === "VND" && tRa === "YEN")
    {
        document.getElementById("ketQua").value = soTien/200;
    }
    else
        document.getElementById("ketQua").value = soTien;

}