// tentukan user yang gender female dan ada berapa jumlah user nya
const users = require("./users")

const genderCheck = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalFemale = 0;
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i = 0; i < data.length; i++){
        // 3. mengecek jika gender user adalah female, jalankan program
        if(data[i].gender === "female"){
            // 4. menambahkan 1 ke value totalFemale
            totalFemale += 1
            // 5. menambahkan data user kedalam variabel result
            result.push({
                id : data[i]._id,
                name : data[i].name,  
                gender : data[i].gender
        })
        }
    }
    // 6. mengembalikan hasil
    return {
        result,
        total : totalFemale
    }
}

// 7. menampilkan hasil
console.log(genderCheck(users));