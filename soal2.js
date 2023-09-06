// tentukan user yang gender female dan ada berapa jumlah user nya
const users = require("./users")

const genderCheck = (data) => {
    let result = []
    let totalFemale = 0;
    for (let i = 0; i < data.length; i++){
        if(data[i].gender === "female"){
            totalFemale += 1
            result.push({
                id : data[i]._id,
                name : data[i].name,  
                gender : data[i].gender
        })
        }
    }
    return {
        result,
        total : totalFemale
    }
}

console.log(genderCheck(users));