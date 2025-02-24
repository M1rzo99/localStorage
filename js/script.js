//   regular expression  ( / pattern / ) shu ko'rinishda yoziladi

// const frName = 'MaIirzo sdfdsfds'
// const regEx = /t/m; // ytoq qiymatni bersak, search() da -1(faslse) qaytaradti/ match()da null qaytaradi
// i - register flag. tepadagi i harfi kattami kichikmi birinchi topganini qaytaradi
// g - global flag. barcha ixtiyoriy i harflarni qaytaradi
// m - bitta qatordan kop bolsas
// replace ()  - qiymatni biz bergan qiymatga almashtiradi
// \d - digits degani
//\w  - words degani
// \s - space degani
// \D - not difgits degani
//  \W - not words degani

const friName = "Mirzo1234 "
const regEx = /\W/ig;
console.log(friName.match(regEx)); // test() - true yoki false qaytaradi. agar Mirzo dagi yo'q harifni chqairsak false qaytardi


// const pass = "pass...." // pass... - adan kn nuqta ko'rsatmoqchi bolsak, (/\./) bn ishlaymiz(\  - teskari bbelgi)
// console.log(pass.replace(/\./g, "*")); // .  - barcha belgilar degani

// const date = '2205:01:24' // 2205-01-24 ko'rinishiga keltirish un
// console.log(date.replace(/:/g, "-")); // /:/ ni "-" ga almashtir degani 


// // console.log(frName.search(regEx)); // search() birinchi regEx ni indexini qaytardi
// console.log(frName.search(regEx)); // regEx dagi umumiy nechta  malumot bolsa hammasini  qaytaradi. match masssive qaytaradi/