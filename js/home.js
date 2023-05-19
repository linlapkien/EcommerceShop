let cuaHang = {};
const XuatCuaHang = (cuaHang, tag) => {
  let html = `
    <div class="container px-4 px-lg-5 my-5">
    <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">${cuaHang.Ten}</h1>
        <p class="lead fw-normal text-white-50 mb-0">
        Địa chỉ: ${cuaHang.Dia_chi} <br/>
        Email: ${cuaHang.Email} 
        - Tel: ${cuaHang.Dien_thoai}
        </p>
    </div>
</div>
    `;
  tag.innerHTML = html;
};

const XuatKhuyenMai = (ds = [], tag, nhom = 1) => {
  let html = ``;
  ds.forEach((item) => {
    html += `
      <div class="col mb-5">
            <div class="card h-100">
              <!-- Sale badge-->
              <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                Sale
              </div>
              <!-- Product image-->
              <img
                class="card-img-top"
                src="${urlImg}/${item.Ma_so}.png"
                alt="..." onclick="showModal(this)"
              />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">${item.Ten}</h5>
                  <!-- Product reviews-->
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <!-- Product price-->
                  <span class="text-muted text-decoration-line-through"
                    >${item.Don_gia_Ban.toLocaleString()}<sup>đ</sup></span
                  >
                  ${(item.Don_gia_Ban * 0.9).toLocaleString()}<sup>đ</sup>
                  </br>
                  <input type="number" min="1" max="10" value="1" style="width: 50px; text-aligh:right" id="sl${
                    item.Ma_so
                  }">
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="javaScript:void(0)" onclick="addCart('${
                    item.Ma_so
                  }', ${nhom})"
                    >Add to cart</a
                  >
                </div>
              </div>
            </div>
          </div>
      `;
  });
  tag.innerHTML = html;
};
