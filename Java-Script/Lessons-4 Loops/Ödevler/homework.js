// ------------------ Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.------------------//

let adet = Number(prompt("How many do you use number"))
let ortalama = 0;

for( i=1 ; i<=adet ; i++) {
    number = Number(prompt(`Enter your ${i}th number`))
    let toplam=0;
    toplam=toplam+number
    ortalama=toplam/adet
}

console.log(`Sayilarin ortalamasi ${ortalama}`)