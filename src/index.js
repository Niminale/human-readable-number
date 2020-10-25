module.exports = function toReadable (number) {
    const ones = ['null','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['null','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let zero = 'zero';
    let numString = number.toString();

    if (numString == '0'){
        return zero;
    } else if (numString.length == '1') {
        return ones[numString];
    } else if (numString[0] == '1' && numString.length == '2'){
        return teens[numString[numString.length - 1]];
    } else if (numString[0] != '1' && numString.length == '2' && numString[1] == '0'){
        return tens[numString[0]];
    } else if (numString[0] != '1' && numString.length == '2') {
        return `${tens[numString[0]]} ${ones[numString[1]]}`;
    } else if (numString[1] != '0' && numString[2] != '0' && numString[3] != '1' && numString.length == '3'){
        return `${ones[numString[0]]} ${hundred} ${tens[numString[1]]} ${ones[numString[numString.length - 1]]}`;
    } else if (numString[1] != '0' && numString[1] != '1' && numString.length == '3'){
        return `${ones[numString[0]]} ${hundred} ${tens[numString[1]]}`;
    } else if (numString[1] == '0' && numString[2] != '0' && numString.length == '3'){
        return `${ones[numString[0]]} ${hundred} ${ones[numString[numString.length - 1]]}`;
    } else if (numString[1] == '0' && numString[2] == '0' && numString.length == '3'){
        return `${ones[numString[0]]} ${hundred}`;
    } else if (numString[1] == '1' && numString.length == '3'){
        return `${ones[numString[0]]} ${hundred} ${teens[numString[numString.length - 1]]}`;
    }
};
