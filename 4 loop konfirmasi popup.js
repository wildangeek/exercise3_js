let munculPopUp;
let totalKlik=0;
do {
    munculPopUp = confirm("Apakah Anda mau mengulang?");
    totalKlik++;
}
while (munculPopUp == true);

console.log(`Kamu sudah mengulang sebanyak ${totalKlik-1} kali`)
