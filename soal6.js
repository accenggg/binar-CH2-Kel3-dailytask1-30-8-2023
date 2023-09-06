// tentukan user yang gender female ATAU user yang eyeColor nya brown dan ada berapa jumlah user nya

const users = require("./users")

const eyeColorGenderCheck = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalFemaleEyeBrown = 0;
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i = 0; i < data.length; i++){
        // 3. mengecek jika eyeColor user adalah brown dan gender user adalah female, jalankan program
        if(data[i].eyeColor === "brown" && data[i].gender === "female"){
            // 4. menambahkan 1 ke value totalFemaleEyeBrown
            totalFemaleEyeBrown += 1
            // 5. menambahkan data user kedalam variabel result
            result.push({
                id : data[i]._id,
                name : data[i].name,  
                gender : data[i].gender,
                eyeColor : data[i].eyeColor
        })
        }
    }
    // 6. mengembalikan hasil
    return {
        result,
        total : totalFemaleEyeBrown
    }
}

// 7. menampilkan hasil
console.log(eyeColorGenderCheck(users));