// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
    // tulis jawabanmu disini
    // 1. membuat variabel result untuk menampung hasil fungsi
    let result = 0
    // 2. melakukan while loop untuk mengambil nilai dari integer secara satu persatu
    while (n > 0) {
        // 3. mengambil digit terakhir dengan menggunakan operator modulus untuk sisa pembagian 10 dari angka n
        const digit = n % 10; 
        // 4. menambahkan digit kedalam angka yang ada di result
        result += digit; 
        // 5. membagi angka n dengan 10 untuk menghilangkan digit terakhir, floor division digunakan agar hasilnya dibulatkan kebawah
        n = Math.floor(n / 10);
    }
    // 6. mengembalikan nilai result
    return result;
}

console.log(solution(2022)) // expected output 6
console.log(solution(1001)) // expected output 2
