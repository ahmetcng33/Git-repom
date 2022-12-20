// ------------------ Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.------------------//

let adet = Number(prompt("How many do you use number"))
let toplam = 0;

for(let i=1 ; i<=adet ; i++) {
    number = Number(prompt(`Enter your ${i}th number`))
    toplam+=number
}

console.log(`Sayilarin ortalamasi ${toplam/adet}`)