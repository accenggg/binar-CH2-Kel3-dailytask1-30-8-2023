// tentukan user yang berumur dibawah 30 dan registered sesudah tahun 2018 dan berapa jumlah nya

const sliceManual = require("./function")
const users = require("./users")

const checkAgeRegistration = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalAge30Regis = 0
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i=0; i < data.length; i++){
        // 3. mengambil tahun registrasi users
        let registerYear = sliceManual([data[i].registered], 0, 4)
         // 4. mencari user yang registered diatas tahun 2018 dan berumur dibawah 30 tahun, maka jalankan program
        if (registerYear > 2018 && data[i].age < 30){
            // 5. menambahkan 1 ke value totalAge30Regis
            totalAge30Regis += 1
            // 6. menambahkan data user kedalam variabel result
            result.push({
                id : data[i]._id,
                name : data[i].name,
                age : data[i].age,
                registered : data[i].registered
            })
        }
    }
    // 7. mengembalikan hasil
    return {
        result,
        total : totalAge30Regis
    }
}
// 8. menampilkan hasil
console.log(checkAgeRegistration(users))