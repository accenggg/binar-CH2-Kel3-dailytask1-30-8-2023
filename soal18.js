// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
    // tulis jawabanmu disini
    // 1. menyiapkan variabel berisi string kosong untuk menampung hasil
    let result = ""
    // 2. melakukan perulangan untuk mengecek karakter string satu persatu
    for (let i = 0; i<str.length; i++){
        // 3. mengecek jika karakter string adalah '.', maka jalankan program
        if (str[i] === "."){
            // 4. simpan tanda () ke dalam result
            result += "()"
        } 
        // 5. jika karakter bukan '.', maka jalankan program
        else {
            // 5. simpan karakter kedalam result
            result += str[i]
        }
    }
    // 6. mengembalikan hasil
    return result

}

console.log(solution("1.1.1.1")) // expected output 1()1()1()1()
console.log(solution("192.168.1.1")) // expected output 192()268()1()1()