// tentukan user yang mempunyai teman bernama Grace dan favorit fruit nya apple atau banana

const users = require("./users")

const fruitGraceFriendsCheck = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalCheck = 0
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i = 0; i < data.length; i++){
        let hasGrace = false
        // 3.melakukan perulangan untuk mengecek friend user satu persatu
        for (let j=0; j < data[i].friends.length; j++){
            // 4. mengecek jika data user memiliki teman "Grace", maka jalankan program
            if(data[i].friends[j].name === "Grace"){
                // 5. ubah value Grace jadi true
                hasGrace = true
                // 6. keluar dari perulangan
                break
            }
        }

        // 7. melakukan pengecekan apakah memiliki teman Grace dan favoriteFruit adalah banana atau apple
        if (hasGrace && (data[i].favoriteFruit === "banana" || data[i].favoriteFruit === "apple")){
            // 8. menambahkan 1 ke value
            totalCheck += 1
            // 9. menambahkan data user kedalam variabel result
            result.push({
                id : data[i]._id,
                name : data[i].name, 
                favFruit : data[i].favoriteFruit, 
                friends : data[i].friends
            })
        }
    }
    // 10. mengembalikan hasil
    return {
        result,
        totalCheck
    }
}

// 11. menampilkan hasil
console.log(fruitGraceFriendsCheck(users));