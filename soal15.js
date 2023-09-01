const users = require('./users')

// 15) rubah user yang gender female address nya menjadi laut, dan user yang gender male address nya gunung

const ubahAlamat = ()=>{
    for (let h=0; h<users.length;h++){
        users[h].address = users[h].gender === "male" ? "gunung" : "laut";
    }
    return users
}

const dataBaru = ubahAlamat()
console.log(dataBaru);