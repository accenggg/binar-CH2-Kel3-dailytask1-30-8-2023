// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
    // tulis jawabanmu disini
    // 1. melakukan perulangan untuk mengecek karakter string satu persatu
    for (let i=0; i < str.length; i++){
        // 2. mengecek jika karakter adalah a, jalankan program
        if (str[i] === "a"){
            // 3. melakukan perulangan untuk mengecek karakter string satu persatu
            for (let j=i; j < str.length; j++){
                // 4. mengecek jika karakter adalah b, jalankan program
                if (str[j] === "b"){
                    // 5. jika posisi karakter b - a lebih dari sama dengan 3, maka jalankan program
                    if ((j - i - 1) >= 3){
                        // 6. mengembalikan nilai YES
                        return "YES"
                    }
                }
            }
        } 
        // 7. mengecek jika karakter adalah b, jalankan program
        else if(str[i] === "b"){
            // 8. melakukan perulangan untuk mengecek karakter string satu persatu
            for (let j=i; j < str.length; j++){
                // 9. mengecek jika karakter adalah a, jalankan program
                if (str[j] === "a"){
                    // 10. jika posisi karakter a - b lebih dari sama dengan 3, maka jalankan program
                    if ((j - i - 1) >= 3){
                        // 11. mengembalikan nilai YES
                        return "YES"
                    }
                }
            }
        }
        // 12. mengembalikan nilai NO
        return "NO"
    }

}

console.log(solution("acdebae")) // expected output YES
console.log(solution("cdaecba")) // expected output NO
