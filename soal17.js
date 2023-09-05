// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.


function solution(n) {
    // tulis jawabanmu disini
    // 1. mengecek input nilai n apabila diantara 91-100 maka jalankan program
    if (n > 90 && n <= 100){
        return "A"
    }
    // 2. mengecek input nilai n apabila diantara 81-90 maka jalankan program 
    else if (n > 80 && n <= 90){
        return "B"
    } 
    // 3. mengecek input nilai n apabila diantara 71-80 maka jalankan program
    else if (n > 70 && n <= 80){
        return "C"
    } 
    // 4. mengecek input nilai n apabila diantara 61-70 maka jalankan program
    else if (n >60 && n <= 70){
        return "D"
    } 
    // 5. mengecek input nilai n apabila kurang dari sama dengan 60 jalankan program
    else if(n <= 60) {
        return "E"
    } 
    // 6. jalankan program jika tidak ada syarat if dan else if yang terpenuhi
    else {
        return "Masukan nilai dengan range 1 - 100"
    }
}

console.log(solution(95)) // expected output A
console.log(solution(76)) // expected output C