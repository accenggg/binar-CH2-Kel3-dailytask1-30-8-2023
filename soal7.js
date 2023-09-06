// tentukan user yang tidak mempunya teman bernama Irfi dan Adella dan ada berapa jumlah nya

const users = require("./users")

const notIrfiAdellaFriends = (data) => {
    // 1. menyiapkan variabel untuk menampung hasil
    let result = []
    let totalFriends = 0;
    // 2. melakukan perulangan untuk mengecek data user satu persatu
    for (let i = 0; i < data.length; i++) {
        // 3. inisialisasi variabel untuk irfi dan adella sama dengan false
        let hasIrfi = false;
        let hasAdella = false;

        // 4. melakukan perulangan untuk mengecek friend user satu persatu
        for (let j = 0; j < data[i].friends.length; j++) {
            // 5. mengecek jika data memiliki teman Irfi
            if (data[i].friends[j].name === "Irfi") {
                // 6. ubah value Irfi jadi true
                hasIrfi = true;
            } 
            // 7. mengecek jika data memiliki teman Adella
            else if (data[i].friends[j].name === "Adella") {
                // 8. ubah value Adella jadi true
                hasAdella = true;
            }
        }

        // 9. menambahkan data user yang tidak memiliki teman "Irfi" atau "Adella"
        if (!hasIrfi && !hasAdella) {
            result.push({
                id: data[i]._id,
                name: data[i].name,
                friends: data[i].friends,
            });
            totalFriends += 1;
        }
    }
    // 10. mengembalikan hasil
    return {
        result,
        totalFriends
    }
}

// 11. menampilkan hasil
console.log(notIrfiAdellaFriends(users));