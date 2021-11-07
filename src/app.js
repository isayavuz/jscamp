function Asalmi(...Sayilar) {
    let gelenParametreSayi = Sayilar.length;
    for (let index = 0; index < gelenParametreSayi; index++) {
        let sayac = 0
        for (let index2 = 2; index2 < Sayilar[index]; index2++) {
            let kontrol = Sayilar[index] % index2
            if (kontrol == 0) {
                sayac+=1
            }
        }
        if (sayac != 0) {
            console.log(Sayilar[index] +" asal Değildir.")
        }
        else{
            console.log(Sayilar[index] +" asaldır.")
        }
    }
}

Asalmi(2,3,33,37,73,74,97,100,99)

console.log("-----------------------------------")

function ArkadasSayimi(Sayi1, Sayi2) {
    let toplam1 = 0, toplam2 = 0
    for (let index = 1; index < Sayi1; index++) {
        if (Sayi1 % index == 0) {
            toplam1+=index
        }
    }
    for (let index2 = 1; index2 < Sayi2; index2++) {
        if (Sayi2 % index2 == 0) {
            toplam2+=index2
        }
    }
    if (Sayi1 == toplam2 && Sayi2 == toplam1) {
        console.log(Sayi1+" ve "+Sayi2+" arkadaş sayıdır.")
    }
    else{
        console.log(Sayi1+" ve "+Sayi2+" arkadaş sayı değildir.")
    }
}

ArkadasSayimi(1184, 1210)
console.log("-----------------------------------")
function MukemmelSayilar() {
    for (let index = 1; index < 1001; index++) {
        let toplam = 0
        for (let index2 = 0; index2 < index; index2++) {
            if (index % index2 == 0) {
                toplam+=index2
            }
        }
        if (toplam == index) {
            console.log(index + " mükemmel sayıdır.")
        }
    }
}

MukemmelSayilar()
console.log("-----------------------------------")
function AsalSayilar() {
    for (let index = 2; index < 1001; index++) {
        let kontrol = 0
        for (let index2 = 2; index2 < index; index2++) {
            if (index % index2 == 0) {
                kontrol = 1
            }
        }
        if (kontrol!=1) {
            console.log(index + " asal sayıdır.")
        }
    }
}

AsalSayilar()