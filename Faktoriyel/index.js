    
    function faktoriyel(num) {
        num = parseInt(num);
        if (typeof (num) == 'number' && num > 0 && num != NaN) {
            let sayi = 1;
            for (i = num; i >= 1; i--) {
                sayi = sayi * i;
            }
            return num + " sayısının faktoriyeli:" + sayi;
        } else {
            return "Lütfen pozitif bir tamsayı giriniz";
        }
    }

    let num = prompt("Lütfen bir sayı giriniz");
    alert(faktoriyel(num));