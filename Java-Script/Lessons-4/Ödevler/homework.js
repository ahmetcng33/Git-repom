// ------------------ Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.------------------//

let adet = number(prompt("How many do you use number"))


for(i=1, i<=adet,i++){
    let number = number(prompt(`Enter your ${i}th number`))
    number+=number
    console.log(`Sayiyarin ortalamasi ${number/i}`)}