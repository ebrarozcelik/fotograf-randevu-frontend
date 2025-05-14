function randevuEkle() {
    var paket = document.getElementById("paket").value;
    var tarih = document.getElementById("tarih").value;
    var mekan = document.getElementById("mekan").value;
    var kullaniciAdi = document.getElementById("kullaniciAdi").value;

    if (paket && tarih && mekan && kullaniciAdi) {
        $.ajax({
            url: `http://localhost:8080/randevu-ekle?paket=${paket}&tarih=${tarih}&mekan=${mekan}&kullaniciAdi=${kullaniciAdi}`,
            type: 'GET',
            success: function(response) {
                var modalBaslik = document.getElementById("modalBaslik");
                var modalMesaji = document.getElementById("modalMesaji");
                
                if (response > 0) {
                    modalBaslik.textContent = "Başarılı";
                    modalMesaji.textContent = "Randevu başarılı bir şekilde eklendi.";
                    window.location.href = '/randevuGoruntule/randevuGoruntule.html';
                } else {
                    modalBaslik.textContent = "Başarısız";
                    modalMesaji.textContent = "Randevu ekleme işlemi başarısız oldu.";
                }
                
                $('#sonucModal').modal('show');
                
            },
            error: function() {
                alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            }
        });
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
}
