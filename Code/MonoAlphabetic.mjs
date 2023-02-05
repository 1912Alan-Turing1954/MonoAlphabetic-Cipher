import { Alphabet, wiredPairs} from '../Spindles/Spindles.mjs'


const MonoAlphabetic = (message, keyLetter) => {
    let keyLetterTxt = keyLetter.split('').map(key => wiredPairs[key]);
    let numberSum = 0;
    for (let i = 0; i < keyLetterTxt.length; i++) {
        (numberSum += keyLetterTxt[i]);
    }
    console.log(numberSum);
    let messageTxt = message.toLowerCase().split('');
    let messageRequire = messageTxt.map(el => wiredPairs[el]);
    let messageFinal = messageRequire.map(el => {
        let txtMessage =  (el + numberSum) % 26;
        numberSum = (numberSum * 2) % 26; 
        // console.log(numberSum);
        return txtMessage; 
    }) 
    let txt = messageFinal.map(el => Alphabet[el]).join('').toUpperCase();
    return txt;
}                           

console.log(MonoAlphabetic('a', 'b'))