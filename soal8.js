const users = require("./users")

const checkFirstCharacterOfCompany = (data) => {
    const result = []

    for(let i=0; i < data.length; i++){
        if(data[i].company.charAt(0) === "L"){
            result.push(data[i])
        }
    }

    const totalData = result.length
    return {result, totalData}
}

const data = checkFirstCharacterOfCompany(users)

const resultData = data.result

const totalData = data.totalData

console.log({resultData});
console.log({totalData});