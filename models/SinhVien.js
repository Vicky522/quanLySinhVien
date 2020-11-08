// khai báo lớp đối tượng trong JS Class (Prototype)
var SinhVien = function (
  maSV,
  tenSV,
  loaiSV,
  email,
  soDienThoai,
  diemToan,
  diemLy,
  diemHoa,
  diemRenLuyen
) {
  this.maSinhVien = maSV;
  this.tenSinhVien = tenSV;
  this.loaiSinhVien = loaiSV;
  this.email = email;
  this.soDienThoai = soDienThoai;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
  this.diemRenLuyen = diemRenLuyen;
  this.diemTrungBinh = function () {
    var dtb =
      (Number(this.diemToan) + Number(this.diemHoa) + Number(this.diemLy)) / 3;
    return dtb;
  };

  this.xepLoai = function () {
    var dtb = this.diemTrungBinh();
    if (this.dtb < 5) {
      return "yeu";
    } else if (dtb >= 5 && dtb < 6) {
      return "tb";
    } else if (dtb >= 6 && dtb < 7) {
      return "Trung Binh Kha";
    } else if (dtb >= 7 && dtb < 8) {
      return "Kha";
    } else if (dtb >= 8 && dtb < 9) {
      return "Gioi";
    } else if (dtb >= 9 && dtb < 10) {
      return "Xuat Sac";
    } else {
      return "yeu";
    }
  };
};
