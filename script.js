// typing effect
const txtElement = ["Web Desginer","Front end Developer"];
let count = 0;
let txtIndex = 0;
let currenTxt = '';
let words = '';

(function ngetik() {
    if(count == txtElement.length) {
        count = 0;
    }

    currenTxt = txtElement[count];
    words = currenTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currenTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 350);

})();
// end typing effect
