const products = [
      { nama: "Slai-olai", harga: 2500, gambar: "produk/slai_olai.jpg" },
      { nama: "Apetito", harga: 2500, gambar: "produk/apetito.jpg" },
      { nama: "Better", harga: 2500, gambar: "produk/better.jpg" },
      { nama: "Malkis roma", harga: 1500, gambar: "produk/malkist_roma.jpg" },
      { nama: "Nextar", harga: 3000, gambar: "produk/nextar.jpg" },
      { nama: "Nabati", harga: 3000, gambar: "produk/nabati.jpg" }, 
      { nama: "Arden", harga: 3000, gambar: "produk/arden.jpg" }, 
      { nama: "Sari gandum", harga: 2500, gambar: "produk/sari-gandum.jpg" }, 
      { nama: "Kalpa", harga: 2500, gambar: "produk/kalpa.jpg" }, 
      { nama: "Mini astor", harga: 2500, gambar: "produk/mini-astor.jpg" }, 
      { nama: "Beng-beng", harga: 3000, gambar: "produk/beng-beng.jpg" }, 
      { nama: "Bonita", harga: 3000, gambar: "produk/bonita.jpg" }, 
      { nama: "Superstar", harga: 1500, gambar: "produk/superstar.jpg" }, 
      { nama: "Choki-choki", harga: 1500, gambar: "produk/choki-choki.jpg" }, 
      { nama: "Fruit vit", harga: 1500, gambar: "produk/fruit_vit.jpg" }, 
      { nama: "Pocky", harga: 5000, gambar: "produk/pocky.jpg" }, 
      { nama: "Mentos", harga: 4000, gambar: "produk/mentos.jpg" }, 
      { nama: "Fruta gummy", harga: 2500, gambar: "produk/fruita_gummy.jpg" }, 
      { nama: "Prima 600 ml", harga: 3000, gambar: "produk/prima.jpg" }, 
      { nama: "Susu ultra", harga: 7000, gambar: "produk/ultra_milk.jpg" }, 
      { nama: "Kis", harga: 1000, gambar: "produk/kis.jpg" }, 
      { nama: "Alpenliebe", harga: 1000, gambar: "produk/alpenliebe.jpg" }, 
      { nama: "Pulpen standar", harga: 3000, gambar: "produk/pulpen_standar.jpg" }, 
      { nama: "Joyco-jel", harga: 5000, gambar: "produk/joyco-jel.jpg" }, 
      { nama: "Pensil 2B", harga: 5000, gambar: "produk/pensil_2b.jpg" }, 
      { nama: "Penggaris 30cm", harga: 4000, gambar: "produk/penggaris_30cm.jpg" }, 
      { nama: "Correction tape 12m", harga: 7000, gambar: "produk/ct.jpg" }, 
      { nama: "Buku tulis 36 lembar", harga: 6000, gambar: "produk/buktul.jpg" }, 
      { nama: "Kertas folio", harga: 500, gambar: "produk/folio.jpg" }, 
      { nama: "Charm kecil", harga: 1500, gambar: "produk/charm_kecil.jpg" }, 
      { nama: "Charm 290mm", harga: 4000, gambar: "produk/charm.jpg" }, 
      { nama: "Tissue tessa", harga: 3000, gambar: "produk/tisu.jpg" }, 
      { nama: "Yoghurt stick", harga: 3500, gambar: "produk/yoghurt_stick.jpg" }, 
      { nama: "Susu cimory", harga: 7000, gambar: "produk/cimory.jpg" }, 
      { nama: "Alpenliebe lolipop", harga: 1500, gambar: "produk/alpenliebe_lolipop.jpg" }, 
      { nama: "Cornetto cookies", harga: 6000, gambar: "produk/cornetto_cookie.jpg" }, 
      { nama: "Heart crunch", harga: 5000, gambar: "produk/heart.jpg" }, 
      { nama: "Le Minerale", harga: 5000, gambar: "produk/le_minerale.jpg" }, 
      { nama: "Spongebob stick", harga: 5000, gambar: "produk/spongebob.jpg" }, 
      { nama: "Nutri boost", harga: 7000, gambar: "produk/nutriboost.jpg" }, 
      { nama: "Coca cola", harga: 6000, gambar: "produk/coca-cola.jpg" }, 
      { nama: "Pulpy orange", harga: 6000, gambar: "produk/pulpy_orange.jpg" }, 
      { nama: "Sari Roti", harga: 5000, gambar: "produk/sari_roti.jpg" }, 
      { nama: "Fruit tea", harga: 6000, gambar: "produk/fruit_tea.jpg" }, 
      { nama: "Adem sari kaleng", harga: 8000, gambar: "produk/adem_sari.jpg" }, 
      { nama: "Teh pucuk", harga: 5000, gambar: "produk/teh_pucuk.jpg" }, 
      { nama: "Nipis madu", harga: 5000, gambar: "produk/nipismadu.jpg" }, 
      { nama: "Pulpen kenko", harga: 5000, gambar: "produk/pulpen_kenko.jpg" }, 
      { nama: "Pocari sweat", harga: 7000, gambar: "produk/pocari_sweat.jpg" }, 
      { nama: "Sosis kanzler", harga: 1500, gambar: "produk/sosis_kanzler.jpg" }, 
      { nama: "Chupa cups stick", harga: 1500, gambar: "produk/chupa_chups.jpg" }, 
      { nama: "Chupa cups jelly", harga: 2000, gambar: "produk/chupa_chups_jelly.jpg" },
      { nama: "Makaroni", harga: 5000, gambar: "produk/makaroni.jpg" }, 
       { nama: "Nextar chocolate pie", harga: 3000, gambar: "produk/chocolate_pie.jpg" },
      // ... (produk lain tetap sama)
    
];

 const cart = [];

function tambahKeKeranjang(index) {
  cart.push({ ...products[index], id: Date.now() });
  updateCart();
}

function hapusDariKeranjang(id) {
  const idx = cart.findIndex(item => item.id === id);
  if (idx > -1) {
    cart.splice(idx, 1);
    updateCart();
  }
}

function updateCart() {
  const cartContainer = document.getElementById("cart");
  if (cart.length === 0) {
    cartContainer.innerHTML = "<h3>Keranjang Belanja</h3><p>Belum ada produk di keranjang.</p>";
    return;
  }

  let total = 0;
  let list = "<ul>";
  cart.forEach(item => {
    list += `
      <li>
        ${item.nama} - Rp ${item.harga.toLocaleString()}
        <button onclick="hapusDariKeranjang(${item.id})">Hapus</button>
      </li>`;
    total += item.harga;
  });
  list += "</ul>";

  cartContainer.innerHTML = `
    <h3>Keranjang Belanja</h3>
    ${list}
    <p><strong>Total: Rp ${total.toLocaleString()}</strong></p>
  `;
}

function showContent(page) {
  const content = document.getElementById("main-content");
  content.classList.remove("show");

  setTimeout(() => {
    if (page === "home") {
      content.innerHTML = `
        <h2>SELAMAT DATANG</h2>
        <p>Gunakan menu di atas untuk menjelajahi layanan koperasi SMAN 103 Jakarta</p>
      `;
    } else if (page === "tentang") {
      content.innerHTML = `
        <h2>Tentang Koperasi</h2>
        <div class="justify">
          <br><p>Koperasi merupakan tempat jual beli barang yang biasanya terdapat di lingkungan sekolah dan berfungsi untuk menyediakan berbagai kebutuhan siswa, termasuk makanan ringan. 
          Tujuan utama koperasi adalah membantu siswa memperoleh kebutuhan mereka dengan harga terjangkau serta memastikan ketersediaan produk yang sehat dan berkualitas. 
          Dengan adanya koperasi sekolah, siswa dapat memenuhi kebutuhan sehari-hari secara lebih mudah dan ekonomis, sekaligus mendukung kelancaran kegiatan belajar mengajar.</p></br>
        </div>
         <h2>VISI KOPERASI</h2>
        <div class="justify">
          <br><p>koperasi Sekolah yang berdaya dan sejahtera</p></br></div>
          <h2>MISI KOPERASI</h2>
        <div class="justify">
          <br><p>Memberdayakan dan mensejahterakan anggotanya maksud dan tujuan dibentuknya koperasi ini adalah membentuk koperasi Guru dan Karyawan dengan memberdayakan dan membantu anggotanya untuk sejahtera</p></br>
        </div>
      `;
    } else if (page === "kepengurusan") {
      content.innerHTML = `
        <h2>Struktur Kepengurusan Koperasi</h2>
        <p>Berikut adalah susunan pengurus koperasi siswa SMAN 103 Jakarta tahun 2025:</p>
        <ul style="list-style:none; margin-top:20px;">
          <li><strong>Ketua: Rachmat A. Syukur, S.PD</strong></li> 
          <li><strong>Sekretaris : Ibu Yuli -Tata Usaha</strong></li>
          <li><strong>Bendahara: Yunita Noor Alfiah, S.Pd</strong></li> 
          <li><strong>Seksi seragam: Neneng Fatimah, S. Pd</strong></li>
          <li><strong>Seksi toko: Yuniati Azkia, S.Pd</strong></li>
          <li><strong>Badan pengawas: Dra. Asfiyah, MM & Meto Firmansyah, S.Kom</strong></li>   
          <li><strong>Pembina: Suparini, M.Pd</strong></li> 
          </ul>
       
      `;
    } else if (page === "checkout") {
      let productHTML = `
        <h2>Checkout Produk</h2>
        <div class="product-list">
      `;
      products.forEach((p, i) => {
        productHTML += `
          <div class="product">
            <img src="${p.gambar}" alt="${p.nama}">
            <h3>${p.nama}</h3>
            <p>Rp ${p.harga.toLocaleString()}</p>
            <button onclick="tambahKeKeranjang(${i})">Tambah ke Keranjang</button>
          </div>
        `;
      });
      productHTML += `</div><div id="cart"><h3>Keranjang Belanja</h3><p>Belum ada produk di keranjang.</p></div>`;
      content.innerHTML = productHTML;
    }

    content.classList.add("show");
  }, 300);
}