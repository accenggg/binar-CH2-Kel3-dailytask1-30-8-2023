// tentukan user yang eyeColor nya blue dan ada berapa jumlah nya

const users = require("./users")

const eyeColorCheck = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalEyeBlue = 0;
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i = 0; i < data.length; i++){
        // 3. mengecek jika gender user adalah female, jalankan program
        if(data[i].eyeColor === "blue"){
            // 4. menambahkan 1 ke value totalFemale
            totalEyeBlue += 1
            // 5. menambahkan data user kedalam variabel result
            result.push({
                id : data[i]._id,
                name : data[i].name,  
                eyeColor : data[i].eyeColor
        })
        }
    }
    // 6. mengembalikan hasil
    return {
        result,
        total : totalEyeBlue
    }
}

// 7. menampilkan hasil
console.log(eyeColorCheck(users));