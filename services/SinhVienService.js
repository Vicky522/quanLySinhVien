// lop doi tuong chua cac phuong thuc giao tiep voi BE
var SinhVienService = function () {
  this.layDanhSachSinhVien = function () {
    var promise = axios({
      url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
      method: "GET",
    });
    return promise;
  };

  this.layThongTinSinhVien = function () {
    var promise = axios({
      url:
        "http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=" +
        maSinhVien,
      method: "GET",
    });
    return promise;
  };

  this.themSinhVien = function () {
    var promise = axios({
      url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
      method: "POST",
      data: sv, // du lieu gui di (luu y: du lieu gui di phai dung format BE yeu cau)
    });
    return promise;
  };

  this.xoaSinhVien = function () {
    var promise = axios({
      url:
        "http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=" +
        maSinhVien,
      method: "DELETE",
    });
    return promise;
  };

  this.capNhatSinhVien = function () {
    var promise = axios({
      url:
        "http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=" +
        sv.maSinhVien,
      method: "PUT",
      data: sv,
    });
    return promise;
  };
};
