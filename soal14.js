const sliceManual = require('./function.js');
const users = require('./users');

// 14) rubah setiap company user menjadi binar dan pada email setiap user berubah menjadi @binar.org, contoh = imam@fsw2.com menjadi imam@binar.org
const ubahDomain = () => {
    // 1. membuat variabel result untuk menampung hasil fungsi
    let result = []
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let h=0; h<users.length; h++){
        // 3. melakukan perulangan untuk mengecek setiap karakter dari email user satu persatu
        for (let i=0; i<users[h].email.length; i++){
        // 4. menyiapkan variabel untuk menyimpan domain "@binar.org", nama email, dan email baru
        let domainBinar = "@binar.org"
        let namaEmail =[]
        let emailBaru = []
        // 5. mengecek jika perulangan karakter dari email telah sampai "@" yang menjadi pemisah antara nama email dan domain
        if(users[h].email[i] === "@"){
            // 6. menyimpan nama email ke variabel namaEmail, data diambil  dari index 0 hingga index sebelum spasi
            namaEmail = [sliceManual([users[h].email],0,i)]
            // 7. menambahkan nama email dan domain binar menjadi satu lalu menyimpannya kedalam variabel emailBaru
            emailBaru = namaEmail + domainBinar
            // 8. menyimpan email yang telah diubah ke key email di object users
            users[h].email = emailBaru
            // 9. menambahkan hasil nama yang sudah ditukar ke variabel result
            result.push(emailBaru)
            // 10. berhenti melakukan perulangan apabila email baru telah diubah dan lanjut ke data selanjutnya
            break
            }
        }
    }
    // 11. mengembalikan data user yang sudah diubah
    return {
        newEmail : result
    }
}

// 13. membuat variabel dataBaru untuk menampung hasil
const dataBaru = ubahDomain()
// 14. menampilkan dataBaru
console.log(dataBaru);