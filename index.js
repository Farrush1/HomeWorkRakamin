// - Buatlah 100 nilai random (1 sampai 50) pada 1 array

// - Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array

// Gunakan 2 array yang telah dibuat untuk mendapatkan
// - Min
// - Max
// - Total
// - Rata rata

// - Bandingkan kedua buah array, contoh
// - Min lebih besar array genap
// - Max lebih besar array ganjil
// - Total memiliki nilai sama antara array genap dan ganjil
// - Rata rata lebih besar array ganjil

// Output dari aplikasi:
// - Array dengan jumlah index 100 V
// - Array genap dengan jumlah index 50 V
// - Array ganjil dengan jumlah index 50 V
// - Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
// - Perbandingan nilai min, max, total dan rata rata
// Catatan :
// Dilarang menggunakan fungsi bawaan untuk min, max, total dan rata rata
// Buatlah menjadi beberapa fungsi agar kode dapat digunakan kembali
// Push ke REPO dan upload link REPO, tolong repo dalam status public

// 100 nilai random antara 1-50
function generateRandomArray(length, min, max) {
    const randomValue = [];
    for (let i = 0; i < length; i++) {
        randomValue.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return randomValue;
}
const randomValue = generateRandomArray(100, 1, 50);

// Pecah jadi 2 array, 1 ganjil, 1 genap
function splitNumber(oddEvenNumber){
    const oddArray = []
    const evenArray = []
    for (let i = 0; i < oddEvenNumber.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(oddEvenNumber[i]);
        } else { 
            oddArray.push(oddEvenNumber[i]);
        }
    }
    return { oddArray, evenArray };
}
const {oddArray, evenArray} = splitNumber(randomValue);

// mendapatkan Min,Max, Total, dan rata-rata dari 2 array di atas
function calculateArray(oddEvenNumber) {
    let min = oddEvenNumber[0];
    let max = oddEvenNumber[0];
    let total = oddEvenNumber[0];
    
    for (let i = 0; i < oddEvenNumber.length; i++) {
        if (oddEvenNumber[i] < min) {
            min = oddEvenNumber[i];
        }
        if (oddEvenNumber[i] > max) {
            max = oddEvenNumber[i];
        }
        total += oddEvenNumber[i];
    }

    const average = total / oddEvenNumber.length;

    return { min, max, total, average };
}
const evenArrayStats = calculateArray(evenArray);
const oddArrayStats = calculateArray(oddArray);

// Fungsi untuk membandingkan nilai antara dua array
function compareArray(stats1, stats2) {
    const comparison = {
        min: stats1.min > stats2.min ? 'Min lebih besar array genap' : 'Min lebih besar array ganjil',
        max: stats1.max > stats2.max ? 'Max lebih besar array genap' : 'Max lebih besar array ganjil',
        total: stats1.total === stats2.total ? 'Total memiliki nilai sama antara array genap dan ganjil' : 'Total memiliki nilai berbeda antara array genap dan ganjil',
        average: stats1.average > stats2.average ? 'Rata rata lebih besar array genap' : 'Rata rata lebih besar array ganjil'
    };

    return comparison;
}
const comparisonResult = compareArray(evenArrayStats, oddArrayStats);

// output console
console.log('100 nilai random antara 1 sampai 50 sebagai berikut', randomValue)
console.log('\n')
console.log('Index ganjil pada Array diatas adalah', oddArray)
console.log('\n')
console.log('Index genap pada Array diatas adalah', evenArray)
console.log('\n')
console.log('Statistik Array Ganjil:', oddArrayStats);
console.log('\n')
console.log('Statistik Array Genap:', evenArrayStats);
console.log('\n')
console.log('Perbandingan nilai antara array ganjil dan genap:');
console.log('\n')
console.log(comparisonResult);