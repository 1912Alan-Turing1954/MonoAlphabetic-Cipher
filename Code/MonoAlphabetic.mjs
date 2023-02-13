import { Alphabet, wiredPairs} from '../Spindles/Spindles.mjs'


const MonoAlphabetic = (message, keyLetter) => {
    let keyLetterTxt = keyLetter.split('').map(key => wiredPairs[key]);
    let messageTxt = message.toLowerCase().split('');
    let messageRequire = messageTxt.map(el => wiredPairs[el]);
    let messageFinal = messageRequire.map(el => {
        for (let i = 0; i < keyLetterTxt.length; i++) {
            message = el += keyLetterTxt[i];
            el++;
            console.log(keyLetterTxt[i])
        }
        return message; 
    }) 
    let txt = messageFinal.map(el => Alphabet[el]).join('').toUpperCase();
    return txt;
}                           

console.log(MonoAlphabetic('', ''))