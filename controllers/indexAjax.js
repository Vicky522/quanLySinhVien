// console.log(axios);
// kết nối dữ liệu backend dựa vào thư viện axios

var svService = new SinhVienService();
var layDanhSachSinhVienApi = function () {
  var promise = svService.layDanhSachSinhVien();

  // goi den BE lay data
  var promise = axios(objectAjax);

  // xu li cho truong hop thanh cong
  promise.then(function (result) {
    console.log("Ket qua", result.data);
    // lay du lieu server tra ve goi ham tao table
    renderTable(result.data);
  });

  // xu li truong hop that bai
  promise.catch(function (error) {
    console.log(error);
  });
};

var renderTable = function (mangSinhVien) {
  var noiDungTable = "";
  for (var i = 0; i < mangSinhVien.length; i++) {
    var sv = new SinhVien();
    sv.maSinhVien = mangSinhVien[i].maSinhVien;
    sv.tenSinhVien = mangSinhVien[i].tenSinhVien;
    sv.diemToan = mangSinhVien[i].diemToan;
    sv.diemLy = mangSinhVien[i].diemLy;
    sv.diemHoa = mangSinhVien[i].diemHoa;
    sv.diemRenLuyen = mangSinhVien[i].diemRenLuyen;
    sv.loaiSinhVien = mangSinhVien[i].loaiSinhVien;
    sv.email = mangSinhVien[i].email;

    // tao tr chua thong tin sinh vien tuong ung
    noiDungTable += `<tr>
      <td>${sv.maSinhVien}</td>
      <td>${sv.tenSinhVien}</td>
      <td>${sv.email}</td>
      <td>${sv.diemTrungBinh()}</td>
      <td>${sv.xepLoai()}</td>
      <td>
      <button class="btn btn-danger" onclick="xoaSinhVien('${
        sv.maSinhVien
      }')">Xoa</button>
      <button class="btn btn-primary" onclick="suaSinhVien('${
        sv.maSinhVien
      }')">Chinh sua</button>
      </td>
    </tr>`;
  }

  document.querySelector("#tableSinhVien").innerHTML = noiDungTable;
};

layDanhSachSinhVienApi();

// chuc nang them sinh vien luu tri vao server thong qua API BE
document.querySelector("#btnXacNhan").onclick = function () {
  // lay du lieu tu nguoi dung nhap vao
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sv.email = document.querySelector("#email").value;
  console.log("sinh vien", sv);

  //   dung axios dua du lieu ve server thong qua API BE
  var promise = svService.themSinhVien();

  //   ham thuc thi khi goi ajax thanh cong
  promise.then(function (result) {
    console.log(result.data);

    // location.reload();
    // Goi phuong thuc lay thong tin tao lay table moi
    layDanhSachSinhVienApi();
  });

  //   ham thuc thi khi loi xay ra
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};

// chuc nang xoa sinh vien server dua vao api BE
var xoaSinhVien = function (maSinhVien) {
  var promise = svService.xoaSinhVien();

  // ham xu ly thanh cong
  promise.then(function (result) {
    console.log(result.data);
  });

  //   ham xu ly that bai
  promise.catch(function (error) {
    console.log(error.response.data);
  });
};

// chinh sua
var suaSinhVien = function (maSinhVien) {
  var promise = svService.layThongTinSinhVien();

  promise.then(function (result) {
    console.log(result.data);
    var sv = result.data;
    // gan du lieu server tra ve len giao dien nguoi dung nhap thong tin
    document.querySelector("#maSinhVien").value = sv.maSinhVien;
    document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
    document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;
    document.querySelector("#diemToan").value = sv.diemToan;
    document.querySelector("#diemLy").value = sv.diemLy;
    document.querySelector("#diemHoa").value = sv.diemHoa;
    document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
    document.querySelector("#email").value = sv.email;
  });

  promise.catch(function (error) {
    console.log(error.response.data);
  });
};

// chuc nang luu thong tin sinh vien server dua vao api BE
document.querySelector("#btnLuuThongTin").onclick = function () {
  // lay du lieu tu nguoi dung nhap vao dua doi tuong theo dung format cua BE yeu cau
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sv.email = document.querySelector("#email").value;

  //   Goi ajax dua du lieu ve server cap nhat
  var promise = svService.capNhatSinhVien();

  promise.then(function (result) {
    console.log(result.data);

    layDanhSachSinhVienApi();
  });

  promise.catch(function (error) {
    console.log(error.response.data);
  });
};
