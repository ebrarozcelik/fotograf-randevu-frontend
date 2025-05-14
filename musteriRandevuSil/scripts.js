// Randevu silme işlemini gerçekleştiren fonksiyon
function randevuSil(paket, kullaniciAdi) {
    // AJAX isteği oluştur
    $.ajax({
        url: 'http://localhost:8080/randevu-sil', // API endpointi
        type: 'GET', // GET isteği
        data: {
            paket: paket,
            kullaniciAdi: kullaniciAdi
        },
        success: function(response) {
            var modalMesaji = document.getElementById("modalMesaji");
            modalMesaji.textContent = "Randevu başarılı bir şekilde silindi.";

            $('#sonucModal').modal('show');
            mevcutRandevulariListele();
        },
        error: function(xhr, status, error) {
            // Hata oluştuğunda modalı güncelle
            $('#modalMesaji').text('Hata oluştu: ' + error);
            $('#sonucModal').modal('show');
        }
    });
}

// Sayfa yüklendiğinde mevcut randevuları listele
function mevcutRandevulariListele() {
    $.ajax({
        url: 'http://localhost:8080/randevular', // API endpointi
        type: 'GET', // GET isteği
        success: function(response) {
            // Başarılı yanıt aldığımızda tabloyu güncelle
            var tbody = $('#randevuListesi tbody');
            tbody.empty(); // Tabloyu temizle
            $.each(response, function(index, randevu) {
                // Her bir randevuyu tabloya ekle
                var row = '<tr>' +
                    '<td>' + randevu.id + '</td>' +
                    '<td>' + randevu.paket + '</td>' +
                    '<td>' + randevu.tarih + '</td>' +
                    '<td>' + randevu.mekan + '</td>' +
                    '<td>' + randevu.kullaniciAdi + '</td>' +
                    '<td><button class="btn btn-danger" onclick="randevuSil(' + randevu.paket + ', \'' + randevu.kullaniciAdi + '\')">Sil</button></td>' +
                    '</tr>';
                tbody.append(row);
            });
        },
        error: function(xhr, status, error) {
            // Hata oluştuğunda modalı güncelle
            $('#modalMesaji').text('Hata oluştu: ' + error);
            $('#sonucModal').modal('show');
        }
    });
}

$(document).ready(function() {
    // Sayfa yüklendiğinde mevcut randevuları listele
    mevcutRandevulariListele();
});
