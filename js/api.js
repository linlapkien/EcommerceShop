//const urlService = `https://jsservices.onrender.com`;
//const urlService = `http://172.23.34.220:8080`;
const urlService = `http://localhost:8080`;
const urlImg = `https://res.cloudinary.com/daacyls4c/image/upload/v1/images`;

const apiTivi = () => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiName = 'dsTivi';
    Xu_ly_HTTP.open('GET', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send();
  });
};
const apiDienthoai = () => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiName = 'dsDienthoai';
    Xu_ly_HTTP.open('GET', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send();
  });
};
const apiMathang = () => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiName = 'dsMathang';
    Xu_ly_HTTP.open('GET', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send();
  });
};

const apiHocsinh = () => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiName = 'dsHocsinh';
    Xu_ly_HTTP.open('GET', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send();
  });
};

const apiCuahang = () => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiName = 'Cuahang';
    Xu_ly_HTTP.open('GET', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send();
  });
};

const apiLienhe = (thongTin) => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiName = 'Lienhe';
    Xu_ly_HTTP.open('POST', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send();
  });
};

const apiDathang = (dsDonHang) => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    }; //
    let apiName = 'Dathang';
    Xu_ly_HTTP.open('POST', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send(JSON.stringify(dsDonHang));
  });
};
