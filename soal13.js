const sliceManual = require('./function.js');
const users = require('./users');

// 13) setiap nama dari user tukar nama belakang dan depan nya, contoh = "imam taufiq" menjadi "taufiq imam"
const tukarPosisiNama = () => {
    // 1. membuat variabel result untuk menampung hasil fungsi
    let result = [];
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let h=0; h < users.length; h++){
        // console.log(`Sebelum di Ubah : ${[users[h].name]}`);
        // 3. melakukan perulangan untuk mengecek setiap karakter dari nama user satu persatu
        for (let i=0; i<users[h].name.length; i++){
            // 4. membuat 2 variabel untuk menampung nama depan dan nama belakang yang akan ditukar nantinya
            let namaDepan = []
            let namaBelakang = []
            // 5. mengecek jika perulangan karakter dari nama telah sampai spasi yang menjadi pemisah antara nama depan dan belakang
            if(users[h].name[i] === " "){
                // 6. menyimpan nama depan ke variabel namaDepan, data diambil  dari index 0 hingga index sebelum spasi
                namaDepan = [sliceManual([users[h].name], 0, i)]
                // 7. menyimpan nama belakang ke variabel namaBelakang, data diambil  dari index setelah spasi hingga index terujung
                namaBelakang = [sliceManual([users[h].name], i+1, users[h].name.length)]
                // 8. melakukan pertukaran posisi nama yang kemudian disimpan ke variabel baru yaitu namaTukar
                let namaTukar = `${namaBelakang} ${namaDepan}`
                // 9 menyimpan nama yang telah ditukar ke key name di object users
                users[h].name = namaTukar
                // 10. menambahkan hasil nama yang sudah ditukar ke variabel result
                result.push(namaTukar)
                // 11. berhenti melakukan perulangan apabila pertukaran nama selesai dan lanjut ke data selanjutnya
                break
            }
            
        }
        // console.log(`Sesudah di Ubah : ${[users[h].name]}`);
    }
    // 12. mengembalikan data user yang sudah diubah
    return {
        namaUser : result
    }
}

// 13. membuat variabel dataBaru untuk menampung hasil
const dataBaru = tukarPosisiNama()
// 14. menampilkan dataBaru
console.log(dataBaru);