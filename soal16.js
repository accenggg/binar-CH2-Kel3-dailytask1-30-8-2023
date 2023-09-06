// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

function solution(x,y) {
    // tulis jawabanmu disini
    // 1. mengecek input user, apabila input x habis dibagi 5, maka jalankan program didalam block
    if (x % 5 === 0){
        // 2. simpan biaya admin kedalam variabel biayaAdmin
        const biayaAdmin = 0.5
        // 3. melakukan perhitungan mengurangkan jumlah uang - uang yang ditarik - biaya admin
        let sisaSaldo = y - x - biayaAdmin
        // 4. mengembalikan sisaSaldo yang sudah diubah
        return sisaSaldo
    // 5. jika x tidak habis dibagi 5
    } else {
        // 6. mengembalikan sisaSaldo yang sudah diubah
        return y
    }
}

console.log(solution(30,120)) // expected output 89.5
console.log(solution(42,100)) // expected output 100
