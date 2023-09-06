// tentukan user yang registered pada tahun 2014 sampai dengan 2018 dan ada berapa jumlah user nya

const sliceManual = require("./function")
const users = require("./users")

const checkRegistration = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalRegis = 0
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i=0; i < data.length; i++){
        // 3. mengambil tahun registrasi users
        let registerYear = sliceManual([data[i].registered], 0, 4)
         // 4. mencari user yang registered pada tahun 2014 sampai dengan 2018, maka jalankan program
        if (registerYear >= 2014 && registerYear <= 2018){
            // 5. menambahkan 1 ke value totalRegis
            totalRegis += 1
            // 6. menambahkan data user kedalam variabel result
            result.push({
                id : data[i]._id,
                name : data[i].name,
                registered : data[i].registered
            })
        }
    }
    // 7. mengembalikan hasil
    return {
        result,
        total : totalRegis
    }
}
// 8. menampilkan hasil
console.log(checkRegistration(users))