// Tạo lớp hợp lê
// Ten doi tuong viet hoa chu cai dau tien
var Validation = function () {
  this.kiemTraRong = function (value, name, selectionError) {
    if (value.trim() === "") {
      document.querySelector(selectionError).innerHTML =
        name + "khong duoc bo trong!";
      return false;
    }
    document.querySelector(selectionError).innerHTML = "";
    return true;
  };

  this.kiemTraEmail = function (value, name, selectorError) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(value)) {
      document.querySelector(selectorError).innerHTML =
        name + "khong dung dinh dang!";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraTatCaKyTu = function (value, name, selectorError) {
    var regexKyTu = /^[A-Za-z]+$/;
    if (!regexKyTu.test(value)) {
      document.querySelector(selectorError).innerHTML =
        name + "Ten khong dung dinh dang";

      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraTatCaLaSo = function (value, name, selectorError) {
    var regexSo = /^[0-9]+$/;
    if (!regexSo.test(value)) {
      document.querySelector(selectorError).innerHTML =
        name + "Ten khong dung dinh dang";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraGiaTri = function (
    value,
    name,
    selectorError,
    minValue,
    maxValue
  ) {
    if (Number(value) < minValue || Number(value) > maxValue) {
      document.querySelector(selectorError).innerHTML =
        name + `tu ${minValue} den ${maxValue}!`;
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraDoDaiChuoi = function (
    value,
    name,
    selectorError,
    minLength,
    maxLength
  ) {
    if (value.trim().lenght < minLength || value.trim().lenght > maxLength) {
      document.querySelector(selectorError).innerHTML =
        name + `do dai ${minLength} - ${maxLength} ky tu`;
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
};
