// buat looping sehingga membuat angka 1 sampai dengan 100
// tapi setiap modulu 3, 5 dan 3 DAN 5 ada spesial nya spt penjelasan dibawah ini =

// Ada sebuah mantra yang mengeluarkan mantra Fizz Buzz dengan rule:

// Mantra “Fizz” akan keluar dengan nilai modulo 3
// Mantra “Buzz” akan keluar dengan nilai modulo 5 
// Mantra akan “Fizz Buzz” akan keluar dengan nilai modulo 3 dan 5

// Bisa diskusi dengan teman kelompokmu ya!

function spellFizzBuzz () {
    // 1. membuat variabel printSpell untuk menyimpan data
    let printSpell = ""
    // 2. melakukan perulangan 1 - 100
    for (let i=1; i <= 100; i++){
        // 3. mengecek jika nilai modulo 3 dan 5 sama dengan 0, maka jalankan program
        if (i % 3 === 0 && i % 5 === 0){
            // 4. isi variabel printSpell dengan FizzBuzz
            printSpell = "FizzBuzz"
        } 
        // 5. mengecek jika nilai modulo 3 sama dengan 0, maka jalankan program
        else if ( i % 3 === 0){
            // 6. isi variabel printSpell dengan Fizz
            printSpell = "Fizz"
        } 
        // 7. mengecek jika nilai modulo 5 sama dengan 0, maka jalankan program
        else if ( i % 5 === 0){
            // 8.isi variabel printSpell dengan Buzz
            printSpell = "Buzz"
        } 
        // 9. mengecek jika tidak ada syarat terpenuhi, maka jalankan program
        else {
            // 10. isi variabel printSpell dengan nilai index
            printSpell = i
        }
        // 11.menampilkan value printSpell
        console.log(printSpell);
    }
}

spellFizzBuzz()
// expected output :
// 1
// 2
// Fizz
// 3
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// dan seterus nya sampai dengan 100

