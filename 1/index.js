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