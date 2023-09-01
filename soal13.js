const users = require('./users');

// 13) setiap nama dari user tukar nama belakang dan depan nya, contoh = "imam taufiq" menjadi "taufiq imam"
const tukarPosisiNama = () => {
    // 1. melakukan perulangan untuk mengecek
    for (let h=0; h < users.length; h++){
        // console.log(`Sebelum di Ubah : ${[users[h].name]}`);
        for (let i=0; i<users[h].name.length; i++){
            let namaDepan = []
            let namaBelakang = []
            if(users[h].name[i] === " "){
                namaDepan += users[h].name.slice(0, i)
                namaBelakang += users[h].name.slice(i+1)
                let namaTukar = `${namaBelakang} ${namaDepan}`
                users[h].name = namaTukar
                break
            }
            
        }
        // console.log(`Sesudah di Ubah : ${[users[h].name]}`);
    }
    return users
}

const dataBaru = tukarPosisiNama()
console.log(dataBaru);