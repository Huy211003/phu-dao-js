function isStringIncludeJava(str) {
    return str.includes('java')
}
function bai1() {
    const btn = document.querySelector('.bai-1 button')
    const input = document.querySelector('.bai-1 input')
    let value
    let result = document.querySelector('.bai-1 .result')
    btn.addEventListener('click', function () {
        value = isStringIncludeJava(input.value)
        result.innerText = value
    })
}
bai1()

// Bài 1
function isStringIncrease(str) {
    var arr = str.split('')
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false
        }
    }
    return true
}
function bai1_1() {
    const btn = document.querySelector('.bai-1-1 button')
    const input = document.querySelector('.bai-1-1 input')
    let value
    let result = document.querySelector('.bai-1-1 .result')
    btn.addEventListener('click', function () {
        value = isStringIncrease(input.value)
        result.innerText = value
    })
}
bai1_1()

// Bài 2
function numberDisplayedTheMostTimes(str) {
    const numbers = str.split('').map(char => {
        const number = Number(char);
        return !isNaN(number) ? number : undefined;
    }).filter(number => number !== undefined);

    if (!numbers.length) {
        return 'Không tìm thấy số hợp lệ trong dữ liệu đầu vào.';
    }

    const counts = {};
    numbers.forEach(function (num) {
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    });

    let maxCount = 0;
    let mostFrequentNumber;
    for (const num in counts) {
        if (counts[num] >= maxCount) {
            maxCount = counts[num];
            mostFrequentNumber = num;
        }
    }

    return mostFrequentNumber
}
function bai2() {
    const btn = document.querySelector('.bai-2 button')
    const input = document.querySelector('.bai-2 input')
    let value
    let result = document.querySelector('.bai-2 .result')
    btn.addEventListener('click', function () {
        value = numberDisplayedTheMostTimes(input.value)
        result.innerText = value
    })
}
bai2()

// Bài 3
function deleteDuplicateElements(str) {
    var arr = str.split('')
    var resultArr = []
    for (var i = 0; i < arr.length; i++) {
        if (resultArr.indexOf(arr[i]) === -1) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
}
function bai3() {
    const btn = document.querySelector('.bai-3 button')
    const input = document.querySelector('.bai-3 input')
    let value
    let result = document.querySelector('.bai-3 .result')
    btn.addEventListener('click', function () {
        value = deleteDuplicateElements(input.value)
        result.innerText = value.join(', ')
    })
}
bai3()

// Bài 4
function longestWordInString(str) {
    var arr = str.split(' ')
    var result = arr[0]

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= result.length) {
            result = arr[i]
        }
    }

    return result
}
function bai4() {
    const btn = document.querySelector('.bai-4 button')
    const input = document.querySelector('.bai-4 input')
    let value
    let result = document.querySelector('.bai-4 .result')
    btn.addEventListener('click', () => {
        value = longestWordInString(input.value)
        result.innerText = value
    })
}
bai4()

// Bài 5
function secondLongestWordInString(str) {
    var arr = str.split(' ')
    var longestWord = ''
    var secondLongestWord = ''

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            secondLongestWord = longestWord
            longestWord = arr[i]
        } else if (arr[i].length > secondLongestWord.length && arr[i] !== longestWord) {
            secondLongestWord = arr[i]
        }
    }

    return secondLongestWord
}
function bai5() {
    const btn = document.querySelector('.bai-5 button')
    const input = document.querySelector('.bai-5 input')
    let value
    let result = document.querySelector('.bai-5 .result')
    btn.addEventListener('click', () => {
        value = secondLongestWordInString(input.value)
        result.innerText = value
    })
}
bai5()

// Bài 6
function totalEven(str) {
    var sum = str.split('').reduce(function (acc, curr) {
        var digit = parseInt(curr)
        if (!isNaN(digit) && curr % 2 === 0) {
            return acc + digit
        } else {
            return acc
        }
    }, 0)
    return sum
}
function bai6() {
    const btn = document.querySelector('.bai-6 button')
    const input = document.querySelector('.bai-6 input')
    let value
    let result = document.querySelector('.bai-6 .result')
    btn.addEventListener('click', () => {
        value = totalEven(input.value)
        result.innerText = value
    })
}
bai6()

// Bài 7
function replaceCharacters(str) {
    var arr = str.split('')
}
function bai7() {
    const btn = document.querySelector('.bai-7 button')
    const input = document.querySelector('.bai-7 input')
    let value
    let result = document.querySelector('.bai-7 .result')
    btn.addEventListener('click', () => {
        value = replaceCharacters(input.value)
        result.innerText = value
    })
}
bai7()

// Bài 8
function createString(str) {
    var arr = str.split('')
    if (arr.length % 2 !== 0 && arr.length >= 3) {
        var middleIndex = Math.floor(arr.length / 2)
        var result = arr.slice(middleIndex - 1, middleIndex + 2)
        return result.join('')
    } else {
        return 'Khong hop le'
    }
}
function bai8() {
    const btn = document.querySelector('.bai-8 button')
    const input = document.querySelector('.bai-8 input')
    let value
    let result = document.querySelector('.bai-8 .result')
    btn.addEventListener('click', () => {
        value = createString(input.value)
        result.innerText = value
    })
}
bai8()

// Bài 9
function myF(str) {

}
function bai9() {
    const btn = document.querySelector('.bai-9 button')
    const input = document.querySelector('.bai-9 input')
    let value
    let result = document.querySelector('.bai-9 .result')
    btn.addEventListener('click', () => {
        value = (input.value)
        result.innerText = value
    })
}
bai9()

// Bài 11
function findCommonElements(str1, str2) {

    const arr1 = str1.split('').map(char => char.trim());
    const arr2 = str2.split('').map(char => char.trim());

    const commonElements = arr2.filter(element => arr1.includes(element));

    const uniqueCommonElements = [...new Set(commonElements)];
    return uniqueCommonElements;
}
function bai11() {
    const btn = document.querySelector('.bai-11 button')
    const input1 = document.querySelector('.bai-11 .arr1')
    const input2 = document.querySelector('.bai-11 .arr2')
    let result = document.querySelector('.bai-11 .result')
    btn.addEventListener('click', () => {
        const str1 = input1.value;
        const str2 = input2.value;

        const commonElements = findCommonElements(str1, str2);
        result.innerText = JSON.stringify(commonElements);
    })
}
bai11()

// Bài 12
function mergeAndRemoveDuplicates(str1, str2) {

    const arr1 = str1.split('').map(char => char.trim());
    const arr2 = str2.split('').map(char => char.trim());

    const uniqueArray = [...new Set([...arr1, ...arr2])];
    return uniqueArray;
}
function bai12() {
    const btn = document.querySelector('.bai-12 button')
    const input1 = document.querySelector('.bai-12 .arr1')
    const input2 = document.querySelector('.bai-12 .arr2')
    let result = document.querySelector('.bai-12 .result')
    btn.addEventListener('click', () => {
        const str1 = input1.value;
        const str2 = input2.value;

        const commonElements = mergeAndRemoveDuplicates(str1, str2);
        result.innerText = JSON.stringify(commonElements);
    })
}
bai12()
// Bài 13
function findUniqueElements(str1, str2) {

    const arr1 = str1.split('').map(char => char.trim());
    const arr2 = str2.split('').map(char => char.trim());

    const uniqueArray1 = arr1.filter(element => !arr2.includes(element));
    const uniqueArray2 = arr2.filter(element => !arr1.includes(element));

    return [...uniqueArray1, ...uniqueArray2];
}
function bai13() {
    const btn = document.querySelector('.bai-13 button')
    const input1 = document.querySelector('.bai-13 .arr1')
    const input2 = document.querySelector('.bai-13 .arr2')
    let result = document.querySelector('.bai-13 .result')
    btn.addEventListener('click', () => {
        const str1 = input1.value;
        const str2 = input2.value;

        const commonElements = findUniqueElements(str1, str2);
        result.innerText = JSON.stringify(commonElements);
    })
}
bai13()

// Bài 16
function squareOddNumbers(str) {
    var arr = str.split('')
    const squareNumbers = arr.filter(num => num % 2 !== 0).map(num => num * num)
    return squareNumbers
}
function bai16() {
    const btn = document.querySelector('.bai-16 button')
    const input = document.querySelector('.bai-16 input')
    let value
    let result = document.querySelector('.bai-16 .result')
    btn.addEventListener('click', () => {
        value = squareOddNumbers(input.value)
        result.innerText = JSON.stringify(value)
    })
}
bai16()

// Bài 17
function filterNamesByFirstChar(nameStr, filterChar) {
    var nameArr = nameStr.split(',').map(name => name.trim())
    var filterNames = nameArr.filter(name => name[0] === filterChar);
    return filterNames;
}
function bai17() {
    const btn = document.querySelector('.bai-17 button')
    const inputNames = document.querySelector('.bai-17 .arr1')
    const inputChar = document.querySelector('.bai-17 .filterChar')
    let result = document.querySelector('.bai-17 .result')
    btn.addEventListener('click', () => {
        const namesString = inputNames.value;
        const filterChar = inputChar.value;
        if (filterChar.length !== 1) {
            result.innerText = 'Kí tự đầu phải là 1 kí tự duy nhất'
            return
        }
        const filterNames = filterNamesByFirstChar(namesString, filterChar);
        result.innerText = JSON.stringify(filterNames)
    })
}
bai17()

// Bài 18
const shoppingCart = [
    { name: "Shirt", price: 20, discount: 0.1 },
    { name: "Jeans", price: 40, discount: 0.2 },
    { name: "Shoes", price: 60, discount: 0.15 }
];

function totalPrice(str) {
    var arr = JSON.parse(str)
    var result = arr.reduce((acc, cur) => acc + cur.price, 0);
    return result;
}
function bai18() {
    const btn = document.querySelector('.bai-18 button')
    const input = document.querySelector('.bai-18 input')
    let value

    let result = document.querySelector('.bai-18 .result')
    btn.addEventListener('click', () => {
        console.log(input.value);
        value = totalPrice(input.value)
        result.innerText = value
    })
}
bai18()

// Bài 19
function flatArray(str) {
    var arr = JSON.parse(str)
    var result = arr.reduce((acc, cur) => acc.concat(cur), []);
    return result;
}
function bai19() {
    const btn = document.querySelector('.bai-19 button')
    const input = document.querySelector('.bai-19 input')
    let value
    let result = document.querySelector('.bai-19 .result')
    btn.addEventListener('click', () => {
        value = flatArray(input.value)
        result.innerText = value
    })
}
bai19()

// Bài 20
const students = [
    { "name": "Alice", "score": 80 },
    { "name": "Bob", "score": 55 },
    { "name": "Charlie", "score": 90 },
    { "name": "Dave", "score": 70 }
]

function filterStudentsByScore(str) {
    var arr = JSON.parse(str)
    var result = arr.filter(students => students.score >= 70).map(item => item.name);
    return result
}
function bai20() {
    const btn = document.querySelector('.bai-20 button')
    const input = document.querySelector('.bai-20 input')
    let value
    let result = document.querySelector('.bai-20 .result')
    btn.addEventListener('click', () => {
        value = filterStudentsByScore(input.value)
        result.innerText = value
    })
}
bai20()

// Bài 21
function calculateAverage(str) {
    const arr = str.split(',').map(Number);
    if (arr.some(isNaN)) {
        return 'Đầu vào không hợp lệ, vui lòng nhập các chữ số, cách nhau bằng dấu phẩy'
    }

    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const average = sum / arr.length;
    return average;
}
function bai21() {
    const btn = document.querySelector('.bai-21 button')
    const input = document.querySelector('.bai-21 input')
    let value
    let result = document.querySelector('.bai-21 .result')
    btn.addEventListener('click', () => {
        value = calculateAverage(input.value)
        result.innerText = value
    })
}
bai21()

// Bài 22
function calculateAge(str) {
    const parts = str.split('/');
    const day = parseInt(parts[0])
    const month = parseInt(parts[1])
    const year = parseInt(parts[2])

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear = (
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
    )

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age;
}
function bai22() {
    const btn = document.querySelector('.bai-22 button')
    const input = document.querySelector('.bai-22 input')
    let result = document.querySelector('.bai-22 .result')
    btn.addEventListener('click', () => {
        const birthdateStr = input.value;
        const age = calculateAge(birthdateStr);
        result.innerText = `Tuổi của bạn là: ${age}`;
    })
}
bai22()

// Bài 23
function calculateDateDifference(dateStr) {
    const parts = dateStr.split('/');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    const selectedDate = new Date(year, month, day);
}
function bai23() {
    const btn = document.querySelector('.bai-23 button')
    const input = document.querySelector('.bai-23 input')
    let value
    let result = document.querySelector('.bai-23 .result')
    btn.addEventListener('click', () => {
        value = (input.value)
        result.innerText = value
    })
}
bai23()