let sayi = Number(prompt("Sayi giriniz"))

for(i=1 ; i<=20 ; i++){
    let bas = 10 **i;
    let hesaplama = sayi/bas;
    if(hesaplama<10){
        console.log("anan");
    }

}