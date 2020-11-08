// var sv = new SinhVien();
// sv.maSinhVien = 1;
// sv.tenSinhVien = "Nguyen Van A";

// var sv2 = new SinhVien();
// sv2.maSinhVien = 2;
// sv2.tenSinhVien = "Nguyen Van B";

// console.log(sv);
// console.log(sv2);

// dinh nghia khi nguoi dung bam nut Xac Nhan
var mangSinhVien = [];
var validate = new Validation();
document.querySelector("#btnXacNhan").onclick = function () {
  // tao ra doi tuong sinh vien lay thong tin nguoi dung tu giao dien
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.email = document.querySelector("#email").value;
  sv.soDienThoai = document.querySelector("#soDienThoai").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

  console.log(sv);

  //   them 1 sv

  mangSinhVien.push(sv);
  console.log("mang sinh vien", sv);

  // kiem tra hop le
  // .trim(): loai bo khoang trang dau cuoi chuoi
  var valid = true;
  // if (sv.maSinhVien.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-maSinhVien").innerHTML =
  //     "Ma SV khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-maSinhVien").innerHTML = "";
  // }

  // if (sv.tenSinhVien.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-tenSinhVien").innerHTML =
  //     "Ten SV khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-tenSinhVien").innerHTML = "";
  // }

  // if (sv.email.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-email").innerHTML =
  //     "Email khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-email").innerHTML = "";
  // }

  // if (sv.soDienThoai.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-soDienThoai").innerHTML =
  //     "So dien thoai khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-soDienThoai").innerHTML = "";
  // }

  // if (sv.diemToan.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-diemToan").innerHTML =
  //     "Diem toan khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-diemToan").innerHTML = "";
  // }

  // if (sv.diemLy.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-diemLy").innerHTML =
  //     "Diem ly khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-diemLy").innerHTML = "";
  // }

  // if (sv.diemHoa.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-diemHoa").innerHTML =
  //     "Diem hoa khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-diemHoa").innerHTML = "";
  // }

  // if (sv.diemRenLuyen.trim() === "") {
  //   // DOM den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
  //   document.querySelector(".kiemTraRong-diemRenLuyen").innerHTML =
  //     "Diem ren luyen khong duoc bo trong!";
  //   valid = false;
  // } else {
  //   document.querySelector(".kiemTraRong-diemRenLuyen").innerHTML = "";
  // }

  // kiểm tra định dạng dữ liệu

  //Kiểm tra rổng
  valid &=
    validate.kiemTraRong(
      sv.maSinhVien,
      "Mã sinh viên",
      ".kiemTraRong-maSinhVien"
    ) &
    validate.kiemTraRong(
      sv.tenSinhVien,
      "Tên sinh viên",
      ".kiemTraRong-tenSinhVien"
    ) &
    validate.kiemTraRong(sv.email, "Email", ".kiemTraRong-email") &
    validate.kiemTraRong(
      sv.soDienThoai,
      "Số điện thoại",
      ".kiemTraRong-soDienThoai"
    ) &
    validate.kiemTraRong(sv.diemToan, "Điểm toán", ".kiemTraRong-diemToan") &
    validate.kiemTraRong(sv.diemLy, "Điểm lý", ".kiemTraRong-diemLy") &
    validate.kiemTraRong(sv.diemHoa, "Điểm hóa", ".kiemTraRong-diemHoa") &
    validate.kiemTraRong(
      sv.diemRenLuyen,
      "Điểm rèn luyện",
      ".kiemTraRong-diemRenLuyen"
    );

  //Kiểm tra định dạng dữ liệu
  //kiểm tra định dạng email

  valid &= validate.kiemTraEmail(sv.email, "Email", ".kiemTraDinhDang-email");

  //Kiểm tra định dạng tenSinhVien
  valid &= validate.kiemTraTatCaKyTu(
    sv.tenSinhVien,
    "Tên sinh viên",
    ".kiemTraDinhDang-tenSinhVien"
  );
  //Kiểm tra định dạng số điện thoại & và điểm tất cả phải nhập số
  valid &=
    validate.kiemTraTatCaLaSo(
      sv.soDienThoai,
      "Số điện thoại",
      ".kiemTraDinhDang-soDienThoai"
    ) &
    validate.kiemTraTatCaLaSo(
      sv.diemToan,
      "Điểm toán",
      ".kiemTraDinhDang-diemToan"
    ) &
    validate.kiemTraTatCaLaSo(sv.diemLy, "Điểm lý", ".kiemTraDinhDang-diemLy") &
    validate.kiemTraTatCaLaSo(
      sv.diemHoa,
      "Điểm hóa",
      ".kiemTraDinhDang-diemHoa"
    ) &
    validate.kiemTraTatCaLaSo(
      sv.diemRenLuyen,
      "Điểm rèn luyện",
      ".kiemTraDinhDang-diemRenLuyen"
    );

  //Kiểm tra giá trị
  valid &=
    validate.kiemTraGiaTri(
      sv.diemToan,
      "Điểm toán",
      ".kiemTraGiaTri-diemToan",
      0,
      10
    ) &
    validate.kiemTraGiaTri(
      sv.diemLy,
      "Điểm lý",
      ".kiemTraGiaTri-diemLy",
      0,
      10
    ) &
    validate.kiemTraGiaTri(
      sv.diemHoa,
      "Điểm hóa",
      ".kiemTraGiaTri-diemHoa",
      0,
      10
    ) &
    validate.kiemTraGiaTri(
      sv.diemRenLuyen,
      "Điểm rèn luyện",
      ".kiemTraGiaTri-diemRenLuyen",
      0,
      10
    );

  //Kiểm tra độ dài
  valid &= validate.kiemTraDoDaiChuoi(
    sv.email,
    "Email",
    ".kiemTraDoDaiChuoi-email",
    6,
    32
  );
  valid &= validate.kiemTraDoDaiChuoi(
    sv.tenSinhVien,
    "Tên sinh viên",
    ".kiemTraDoDaiChuoi-tenSinhVien",
    6,
    50
  );

  if (!valid) {
    return;
  }
  renderTable(mangSinhVien);
  // lưu localstorge
  luuLocalStorage();

  //   //   tao the tr : document.createElemet('tenThe')'
  //   var trSinhVien = document.createElement("tr");
  //   var tdMaSinhVien = document.createElement("td");
  //   tdMaSinhVien.innerHTML = sv.maSinhVien;

  //   var tdTenSinhVien = document.createElement("td");
  //   tdTenSinhVien.innerHTML = sv.tenSinhVien;

  //   var tdEmail = document.createElement("td");
  //   tdEmail.innerHTML = sv.email;

  //   var tdSoDienThoai = document.createElement("td");
  //   tdSoDienThoai.innerHTML = sv.soDienThoai;

  //   var tdDiemTrungBinh = document.createElement("td");
  //   tdDiemTrungBinh.innerHTML = sv.diemTrungBinh().toFixed(2);

  //   var tdXepLoai = document.createElement("td");
  //   tdXepLoai.innerHTML = sv.xepLoai();

  //   var tdChucNang = document.createElement("td");

  //   var buttonXoa = document.createElement("button");
  //   buttonXoa.innerHTML = "Xoa";
  //   buttonXoa.className = "btn btn-danger";
  //   buttonXoa.onclick = function () {
  //     // this: la nut Xoa
  //     // this: la vi tri hien tai the button => .parentElement la the td => td.paretElement => the tr => .remove() :xoa
  //     this.parentElement.parentElement.remove();
  //   };

  //   tdChucNang.appendChild(buttonXoa);
  //   // chen the con vao the cha: theCha.appendChild(theCon)
  //   trSinhVien.appendChild(tdMaSinhVien);
  //   trSinhVien.appendChild(tdTenSinhVien);
  //   trSinhVien.appendChild(tdEmail);
  //   trSinhVien.appendChild(tdSoDienThoai);
  //   trSinhVien.appendChild(tdDiemTrungBinh);
  //   trSinhVien.appendChild(tdXepLoai);
  //   //trSinhVien.appendChild(buttonXoa);
  //   trSinhVien.appendChild(tdChucNang);

  //   // Dom den the tbody => appendChild the tr vao
  //   document.querySelector("#tableSinhVien").appendChild(trSinhVien);
};

var renderTable = function (arrSV) {
  var noiDungTable = "";
  for (var index = 0; index < arrSV.length; index++) {
    // moi lan lap lay ra 1 doi tuong SV
    var sinhVien = arrSV[index];
    var sv = new SinhVien(
      sinhVien.maSinhVien,
      sinhVien.tenSinhVien,
      sinhVien.loaiSinhVien,
      sinhVien.email,
      sinhVien.soDienThoai,
      sinhVien.diemToan,
      sinhVien.diemLy,
      sinhVien.diemHoa,
      sinhVien.diemRenLuyen
    );

    // sv.maSinhVien = sinhVien.maSinhVien;
    // sv.tenSinhVien = sinhVien.tenSinhVien;
    // sv.email = sinhVien.email;
    // sv.soDienThoai = sinhVien.soDienThoai;
    // sv.diemToan = sinhVien.diemToan;
    // sv.diemHoa = sinhVien.diemHoa;
    // sv.diemLy = sinhVien.diemLy;
    // sv.diemRenLuyen = sinhVien.diemRenLuyen;
    // sv.loaiSinhVien = sinhVien.loaiSinhVien;

    // tao ra noi dung <tr></tr>
    noiDungTable += `
        <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.soDienThoai}</td>
            <td>${sv.diemTrungBinh()}</td>
            <td>${sv.xepLoai()}</td>
            <td><button class='btn btn-danger' onclick="xoaSinhVien('${
              sv.maSinhVien
            }')">Xoá</button></td>
            <td><button class='btn btn-primary' onclick="chinhSua('${
              sv.maSinhVien
            }')">Chỉnh sửa</button></td>
        </tr>`;
  }
  console.log(noiDungTable);
  document.querySelector("#tableSinhVien").innerHTML = noiDungTable;
};

// cai dat su kien cho nut xoa
var xoaSinhVien = function (maSV) {
  for (var index = mangSinhVien.length - 1; index >= 0; index--) {
    // Moi lan duyen lay ra 1 doi tuong sv
    var sv = mangSinhVien[index];

    if (sv.maSinhVien === maSV) {
      // splice: xoa phan tu cua mang dua vao index
      mangSinhVien.splice(index, 1);
    }

    // sau khi xoa goi ham tao lai table truyen vao mang sv da xoa
    renderTable(mangSinhVien);
  }
};

// chinh sua
var chinhSua = function (maSV) {
  console.log(maSV);
  document.querySelector("#maSinhVien").disabled = true;
  // Tu maSV tim sinh vien trong mangSinhVien
  for (var index = 0; index < mangSinhVien.length; index++) {
    // moi lan duyet mang lay ra 1 doi tuong sv
    var sv = mangSinhVien[index];
    // so sanh neu maSV  === voi doi tuong dang duyet => gan nguoc lai len control phia tren
    if (maSV === sv.maSinhVien) {
      document.querySelector("#maSinhVien").value = sv.maSinhVien;
      document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
      document.querySelector("#email").value = sv.email;
      document.querySelector("#soDienThoai").value = sv.soDienThoai;
      document.querySelector("#diemToan").value = sv.diemToan;
      document.querySelector("#diemLy").value = sv.diemLy;
      document.querySelector("#diemHoa").value = sv.diemHoa;
      document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
    }
  }
};

// cap nhat thong tin
document.querySelector("#btnLuuThongTin").onclick = function () {
  // lay thong tin nguoi dung thay doi gan vao doi tuong sinh vien
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.email = document.querySelector("#email").value;
  sv.soDienThoai = document.querySelector("#soDienThoai").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

  // tim trong mangSV doi tuong cung mã => cập nhật lại giá trị
  for (var index = 0; index < mangSinhVien.length; index++) {
    var sinhVienCapNhat = mangSinhVien[index];
    debugger;
    // Tim ra sv trong mang co ma = voi ma sv tren giao dien => cap nhat lai gia tri
    if (sinhVienCapNhat.maSinhVien === sv.maSinhVien) {
      sinhVienCapNhat.maSinhVien = sv.maSinhVien;
      sinhVienCapNhat.tenSinhVien = sv.tenSinhVien;
      sinhVienCapNhat.email = sv.email;
      sinhVienCapNhat.soDienThoai = sv.soDienThoai;
      sinhVienCapNhat.loaiSinhVien = sv.loaiSinhVien;
      sinhVienCapNhat.diemToan = sv.diemToan;
      sinhVienCapNhat.diemLy = sv.diemLy;
      sinhVienCapNhat.diemHoa = sv.diemHoa;
      sinhVienCapNhat.diemRenLuyen = sv.diemRenLuyen;
    }
  }
  // goi lai ham tao bang
  renderTable(mangSinhVien);

  // goi lai ham luu vao localStorage
  luuLocalStorage();
};

var luuLocalStorage = function () {
  // Bien mang sinh vien thanh chuoi
  var sMangSinhVien = JSON.stringify(mangSinhVien);
  // Dem mang sinh vien luu vao localstorage
  localStorage.setItem("mangSinhVien", sMangSinhVien);
};

// Viet phuong thuc lay du lieu tu localStorage => khi nguoi dung vua vao trang web
var layMangSinhVienStorage = function () {
  // kiem tra du lieu co trong localstorage khong
  if (localStorage.getItem("mangSinhVien")) {
    // lay du lieu luu trong localstorage ra ngoai
    var sMangSinhVien = localStorage.getItem("mangSinhVien");

    // bien du lieu tu chuoi chuyen ve object js gan vao mang sinh vien
    mangSinhVien = JSON.parse(sMangSinhVien);

    // sau khi lay du lieu goi ham tao bang
    renderTable(mangSinhVien);
  }
};

layMangSinhVienStorage();
