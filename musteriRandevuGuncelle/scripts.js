function randevuGuncelle() {
    var paket = document.getElementById("paket").value;
    var tarih = document.getElementById("tarih").value;
    var mekan = document.getElementById("mekan").value;
    var randevuId = document.getElementById("randevuId").value;

    if (paket && tarih && mekan && randevuId) {
        $.ajax({
            url: `http://localhost:8080/randevu-guncelle?paket=${paket}&tarih=${tarih}&mekan=${mekan}&id=${randevuId}`,
            type: 'GET',
            success: function(response) {
                var modalBaslik = document.getElementById("modalBaslik");
                var modalMesaji = document.getElementById("modalMesaji");
                
                if (response > 0) {
                    modalBaslik.textContent = "Başarılı";
                    modalMesaji.textContent = "Randevu başarılı bir şekilde güncellendi.";
                    randevuListesiniGetir();

                } else {
                    modalBaslik.textContent = "Başarısız";
                    modalMesaji.textContent = "Randevu güncelleme işlemi başarısız oldu.";
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

function randevuListesiniGetir() {
    $.ajax({
        url: 'http://localhost:8080/randevular',
        type: 'GET',
        success: function(response) {
            var tbody = document.getElementById("randevuListesi").getElementsByTagName('tbody')[0];
            tbody.innerHTML = "";  // Clear existing rows

            response.forEach(function(randevu) {
                var row = tbody.insertRow();

                var cellId = row.insertCell(0);
                var cellPaket = row.insertCell(1);
                var cellTarih = row.insertCell(2);
                var cellMekan = row.insertCell(3);
                var cellKullaniciAdi = row.insertCell(4);

                cellId.innerHTML = randevu.id;
                cellPaket.innerHTML = randevu.paket;
                cellTarih.innerHTML = randevu.tarih;
                cellMekan.innerHTML = randevu.mekan;
                cellKullaniciAdi.innerHTML = randevu.kullaniciAdi;
            });
        },
        error: function() {
            alert("Randevu listesi alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
    });
}

$(document).ready(function() {
    randevuListesiniGetir();
});
