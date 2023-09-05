const users = require('./users')

// 15) rubah user yang gender female address nya menjadi laut, dan user yang gender male address nya gunung
const ubahAlamat = ()=>{
    // 1. membuat variabel result untuk menampung hasil fungsi
    let result = []
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let h=0; h<users.length;h++){
        // 3. melakukan pengecekan gender user dengan ternary operator, apabila gender adalah "male", maka ubah address jadi gunung, tapi jika bukan "male", ubah jadi laut
        users[h].address = users[h].gender === "male" ? "gunung" : "laut";
        // 4. menambahkan address yang sudah diubah menurut gender ke variabel result
        result.push({
            address : users[h].address,
            gender : users[h].gender
        })
    }
    // 5. mengembalikan variabel result
    return result
}

// 6. membuat variabel dataBaru untuk menampung hasil
const dataBaru = ubahAlamat()
// 7. menampilkan dataBaru
console.log(dataBaru);