// let sayi = Number(prompt("Sayi giriniz"))

// for(i=1 ; i<=20 ; i++){
//     let bas = 10 ** i;
//     let hesaplama = sayi%bas;
    
// }

//! ODEV3 (COZUM): Consoledan girilen bir sayının basamak sayisini hesaplayarak consolea bastiran kodu donguler yarimiyle yaziniz//


//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.


let counter = 0
let number = Number(prompt("Your number: "))

while (number != 0 ) {
    number = Math.trunc(number / 10)
    counter ++
}

console.log(`Digit count is : ${counter}`)