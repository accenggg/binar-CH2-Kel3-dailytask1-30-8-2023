// tentukan user yang mempunyai nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown

const users = require("./users")

const userCheck = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalCheck = 0;
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i = 0; i < data.length; i++){
        // 3. mengecek user yang mempunyai nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown
        if(data[i].name.length < 10 && data[i].age > 30 && data[i].eyeColor === "brown" && data[i].gender === "male"){
            // 4. menambahkan 1 ke value totalCheck
            totalCheck += 1
            // 5. menambahkan data user kedalam variabel result
            result.push({
                id : data[i]._id,
                name : data[i].name,
                age : data[i].age,  
                gender : data[i].gender,
                eyeColor : data[i].eyeColor
        })
        }
    }
    // 6. mengembalikan hasil
    return {
        result,
        total : totalCheck
    }
}

// 7. menampilkan hasil
console.log(userCheck(users));