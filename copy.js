const sliceManual = require('./function.js');
const users = require('./users');

// 14) rubah setiap company user menjadi binar dan pada email setiap user berubah menjadi @binar.org, contoh = imam@fsw2.com menjadi imam@binar.org
const ubahDomain = () => {
    for (let h=0; h<users.length; h++){
        for (let i=0; i<users[h].email.length; i++){
        let domainBinar = "@binar.org"
        let emailLama =[]
        let emailBaru = []
        if(users[h].email[i] === "@"){
            emailLama = [sliceManual([users[h].email],0,i)]
            // emailLama += users[h].email.slice(0,i)
            emailBaru = emailLama + domainBinar
            users[h].email = emailBaru
            
            break
            }
        }
    }
    return users
}

const dataBaru = ubahDomain()
console.log(dataBaru);