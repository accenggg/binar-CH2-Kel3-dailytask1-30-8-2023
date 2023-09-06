// tentukan user yang mempunya friend bernama Imam dan ada berapa jumlah user nya

const users = require("./users")

const imamFriendsCheck = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalFriends = 0;
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i = 0; i < data.length; i++){
        // 3.melakukan perulangan untuk mengecek friend user satu persatu
        for (let j=0; j < data[i].friends.length; j++){
            // 4. mengecek jika data user memiliki teman "Imam", maka jalankan program
            if(data[i].friends[j].name === "Imam"){
                // 5. menambahkan 1 ke value
                totalFriends += 1
                // 6. menambahkan data user kedalam variabel result
                result.push({
                    id : data[i]._id,
                    name : data[i].name,  
                    friends : data[i].friends
                })
            }
        }
    }
    // 7. mengembalikan hasil
    return {
        result,
        totalFriends
    }
}

// 8. menampilkan hasil
console.log(imamFriendsCheck(users));