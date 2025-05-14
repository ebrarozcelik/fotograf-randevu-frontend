function girisYap() {
    var kullaniciAdi = document.getElementById("kullaniciAdi").value;
    var sifre = document.getElementById("sifre").value;

    if (kullaniciAdi && sifre) {
        $.ajax({
            url: `http://localhost:8080/giris?kullaniciAdi=${kullaniciAdi}&sifre=${sifre}`,
            type: 'GET',
            success: function(response) {
                var modalBaslik = document.getElementById("modalBaslik");
                var modalMesaji = document.getElementById("modalMesaji");
                
                if (response > 0) {
                    modalBaslik.textContent = "Başarılı Giriş";
                    modalMesaji.textContent = "Giriş başarılı! Hoş geldiniz.";
                    window.location.href = '../musteriPanel/musteriPanel.html';
                } else {
                    modalBaslik.textContent = "Başarısız Giriş";
                    modalMesaji.textContent = "Kullanıcı adı veya şifre yanlış.";
                }
                
                $('#sonucModal').modal('show');
            },
            error: function() {
                alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            }
        });
    } else {
        alert("Lütfen hem kullanıcı adını hem de şifreyi girin.");
    }
}
