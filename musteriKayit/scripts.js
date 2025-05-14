function kayitOl() {
    var kullaniciAdi = document.getElementById("kullaniciAdi").value;
    var adSoyad = document.getElementById("adSoyad").value;
    var telefon = document.getElementById("telefon").value;
    var sifre = document.getElementById("sifre").value;

    if (kullaniciAdi && adSoyad && telefon && sifre) {
        $.ajax({
            url: `http://localhost:8080/kayit?kullaniciAdi=${kullaniciAdi}&sifre=${sifre}&adSoyad=${adSoyad}&telefon=${telefon}`,
            type: 'GET',
            success: function(response) {
                alert("Kayıt başarılı!");
                window.location.href = '/musteriPanel/musteriPanel.html'; // Başarılı kayıt sonrası yönlendirme
            },
            error: function() {
                alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            }
        });
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
}
