//  Export -  o'zgaruvchi va Object
const log = "Mirzo";
const lastName = "Shomuaratov";
const ukasi = "Latif"

function logaName() {
    console.log("Hello World");
};

export { lastName, ukasi, log, logaName }
//  Export Default - har bitta js filedan faqat bitta export qilib bilamiz
export default function logger() {
    console.log("Hello Logger");

}