// tentukan user yang company huruf depan nya berawal L dan ada berapa jumlah user nya

const users = require("./users")

const checkFirstCharacterOfCompany = (data) => {
    // 1. membuat variabel result untuk menampung hasil fungsi
    const result = []
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for(let i=0; i < data.length; i++){
        // 3. mengecek data company setiap user yang berawal huruf L, maka jalankan program
        if(data[i].company[0] === "L"){
            // 4. menambahkan data user kedalam variabel result
            result.push(data[i])
        }
    }

    // 5. mengembalikan hasil
    const totalData = result.length
    return {result, totalData}
}

console.log(checkFirstCharacterOfCompany(users));