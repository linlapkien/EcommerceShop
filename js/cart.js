let carts = [];

const addCart = (maSo, maNhom) => {
  //Nhóm mặt hàng
  getArray(Number(maNhom)).then((result) => {
    let id = maSo;
    let sl = Number(document.querySelector(`#sl${id}`).value);
    //lưu trữ vào session
    let vt = -1;
    //Lưu vào sessionStorage
    if (sessionStorage.getItem('carts') != undefined) {
      carts = JSON.parse(sessionStorage.getItem('carts'));
      vt = carts.findIndex((item) => item.maso == id);
    }

    if (vt == -1) {
      let tmp = result.find((x) => x.Ma_so == id);
      let cart = {
        maso: id,
        soluong: sl,
        ten: tmp.Ten,
        dongiaban: Number(tmp.Don_gia_Ban),
        manhom: maNhom,
      };
      carts.push(cart); // Thêm
    } else {
      carts[vt].soluong += sl; // Cập nhật lại số lượng
    }

    if (carts.length > 0) {
      sessionStorage.setItem('carts', JSON.stringify(carts));
    } else {
      sessionStorage.removeItem('carts');
    }
    document.getElementById('Th_Giohang').innerHTML = carts.length;
  });
};

const getArray = async (maNhom) => {
  let ds = [];
  if (maNhom == 1) {
    ds = await apiTivi();
  } else if (maNhom == 2) {
    ds = await apiMathang();
  } else {
    ds = await apiDienthoai();
  }
  return ds;
};

const openCart = () => {
  if (sessionStorage.getItem('carts') != undefined) {
    window.location = `../cart/`;
  }
};

const xuatCart = (carts, Th_Cha) => {
  let html = '';
  let total = 0;
  carts.forEach((item) => {
    total += item.dongiaban * item.soluong;
    html += `
            <tr>
                <td><img
                class="card-img-top"
                style="width:100px"
                src="${urlImg}/${item.maso}.png"
                /></td>
                <td>${item.soluong}</td>
                <td>${item.ten}</td>
                <td>${item.dongiaban.toLocaleString()}<sup>đ</sup></td>
                <td>${(
                  item.dongiaban * item.soluong
                ).toLocaleString()}<sup>đ</sup></td>
                <td><a href="#!" style="color: red" onclick="xoaGiohang('${
                  item.maso
                }')">Xoá</a></td>
            </tr>
        `;
  });
  Th_Cha.innerHTML = html;
  if (carts.length >= 1) tongThanhTien();
  else {
    Th_TongThanhTien.innerHTML = '';
  }
};

const tongThanhTien = () => {
  let total = 0;
  carts = JSON.parse(sessionStorage.getItem('carts'));
  carts.forEach((item) => {
    total += item.soluong * item.dongiaban;
  });
  Th_TongThanhTien.innerHTML = `
            <p style="text-align: right; color:red">Tổng thành tiền: ${total.toLocaleString()}<sup>đ</sup></p>
        `;
};

const xoaGiohang = (Ma_so) => {
  carts = JSON.parse(sessionStorage.getItem('carts'));
  let vt = carts.findIndex((x) => x.maso == Ma_so);
  carts.splice(vt, 1);
  sessionStorage.setItem('carts', JSON.stringify(carts));
  xuatCart(carts, Th_TableGioHang);
};

const datHang = () => {
  let dsDonHang = [];
  carts = JSON.parse(sessionStorage.getItem('carts'));
  let Khach_hang = {
    Ho_ten: document.querySelector('#Th_Ho_ten').value,
    Dien_thoai: document.querySelector('#Th_Dien_thoai').value,
    Email: document.querySelector('#Th_Email').value,
    Dia_chi: document.querySelector('#Th_Dia_chi').value,
  };
  carts.forEach((item) => {
    let donDathang = {
      Ngay_Dat_hang: new Date().toLocaleDateString(),
      Ngay_Giao_hang: document.querySelector('#datepicker').value,
      So_luong: Number(item.soluong),
      Don_gia_Ban: Number(item.dongiaban),
      Tien: Number(item.soluong) * Number(item.dongiaban),
      Trang_thai: 'CHUA_GIAO_HANG',
      Khach_hang: Khach_hang,
    };
    let maso = item.maso;
    let manhom = item.manhom;
    let donhang = {
      key: maso,
      nhom: manhom,
      dathang: donDathang,
    };
    dsDonHang.push(donhang);
    //console.log(dsDonHang);
  });
  console.log(dsDonHang);
  // Gọi API
  apiDathang(dsDonHang)
    .then((result) => {
      console.log(result);
      alert('Đơn đặt hàng thành công...');
    })
    .catch((err) => {
      console.log(err);
    });
};
