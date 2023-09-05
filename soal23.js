// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

const students = [
    { name: "Peter", score: 30},
    { name: "Parker", score: 50},
    { name: "Harry", score: 70},
    { name: "Eva", score: 79},
    { name: "Justin", score: 60},
    { name: "Bieber", score: 90},
    { name: "Evan", score: 55},
    { name: "Rowling", score: 90}
]

function cekKelulusan (data) {
    // 1. melakukan perulangan untuk mengecek data student satu persatu
    for (let i = 0; i < data.length; i++){
        // 2. mengecek jika data diatas atau sama dengan 70, maka jalankan program
        if (data[i].score >= 70){
            // 3. menambahkan status lulus ke key baru
            data[i].status = "Lulus"
        } 
        // 4. mengecek jika data diatas atau sama dengan 50 dan dibawah 70, maka jalankan program
        else if (data[i].score >= 50 && data[i].score < 70){
            // 5. menambahkan status remedial ke key baru
            data[i].status = "Remedial"
        } 
        // 6. mengecek jika data dibawah 50, maka jalankan program
        else {
            // 7. menambahkan status tidak lulus ke key baru
            data[i].status = "Tidak Lulus"
        }
    }
    // 8. mengembalikan nilai
    return data
}

// 9. membuat variabel dataBaru untuk menampung hasil
const dataSiswa = cekKelulusan(students)
// 10. menampilkan dataBaru
console.log(dataSiswa);