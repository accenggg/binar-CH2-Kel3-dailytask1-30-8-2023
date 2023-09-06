// tentukan user yang company huruf belakang nya berawal E dan ada berapa jumlah user nya

const users = require("./users")

const checkLastCharacterOfCompany = (data) => {
    // 1. membuat variabel result untuk menampung hasil fungsi
    const result = []
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for(let i=0; i < data.length; i++){
        // 3. mengecek data company setiap user yang breakhiran huruf L, maka jalankan program
        if(data[i].company[data[i].company.length-1] === "E"){
            // 4. menambahkan data user kedalam variabel result
            result.push(data[i])
        }
    }

    // 5. mengembalikan hasil
    const totalData = result.length
    return {result, totalData}
}

console.log(checkLastCharacterOfCompany(users));