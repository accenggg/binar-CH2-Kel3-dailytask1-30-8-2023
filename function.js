const hasilPenambahan = (a, b) => {
    return a + b;
}

const cetakHasilPenambahan = () => {
    console.log(`ini hasil penambahan function diatas = ${hasilPenambahan(3, 5)}`);
}

// cetakHasilPenambahan()

const sliceManual = (data, startIndex, LastIndex) => {
    let result = ""
    for (let i = startIndex; i < LastIndex; i++){
        result += data[0][i]
    }
    return result
}

module.exports = sliceManual
// console.log(sliceManual(data, 0, 5))