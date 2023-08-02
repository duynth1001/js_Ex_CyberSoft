// bai 1
// input: 
// so ngay lam
// luong 1 ngay
// process:
// so ngay*luong 1 ngay = tien luong 
// output:
// tien luong
console.log("==============Bai 1==============");
var luong1Ngay=100000;
var soNgayLam=2;
var tienLuong=luong1Ngay*soNgayLam;
console.log("Tien luong cua ban la:",tienLuong);
// bai 2
// input: 
// 5 so thuc
// process:
// gia tri trung binh = tong 5 so thuc /5
// output:
// gia tri trung binh
console.log("\n==============Bai 2==============");
var so1=1.2;
var so2=2.4;
var so3=3.4;
var so4=5.7;
var so5=7.4;
var soTrungBinh=(so1+so2+so3+so4+so5)/5;
console.log("So trung binh la:",soTrungBinh.toFixed(2));
// bai 3
// input: 
// gia do la: 23.500 vnd
// so tien VND nguoi dung nhap vao
// process:
// so tien sau khi quy doi = so tien VND * gia do la
// output:
// so tien sau khi quy doi
console.log("\n==============Bai 3==============");
var giaDoLa=23.500;
var tienVND=300000;
var soTienQuyDoi=giaDoLa*tienVND;
console.log("So tien sau khi quy doi la:",soTienQuyDoi.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
// bai4
// input: chieu dai va chieu rong
// process:
// dien tich=dai*rong
// chuvi=(dai+rong)*2
// output:
// dien tich
// chu vi
console.log("\n==============Bai 4==============");
var chieuDai=15;
var chieuRong=23;
var dienTich=chieuDai*chieuRong;
var chuVi=(chieuDai+chieuRong)*2;
console.log("Dien tich cua hinh chu nhat la:",dienTich);
console.log("Chu vi cua hinh chu nhat la:",chuVi);
// bai5
// input: so co 2 chu so
// process: 
// lay tung so tu hang don vi den hang chuc
// luu 2 so vao 2 bien hang chuc va hang don vi
// tinh tong hai so vua lay ra
// output:
// tong cua 2 ki so trong so vua nhap
console.log("\n==============Bai 5==============");
var soCo2ChuSo=89;
var soHangDonVi=soCo2ChuSo%10;
var soHangChuc=soCo2ChuSo/10;
var tongCua2KiSo=Math.floor(soHangChuc)+soHangDonVi;
console.log("Tong cua 2 ki so la:",tongCua2KiSo);