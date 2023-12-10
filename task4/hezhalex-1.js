function VigenèreCipher (key, abc) {
    this.key = key;
    this.alphabet = abc;


    this.encode = function (str) {
        return this.translateText(str, (char, keyChar) => {
            const charIndex = this.alphabet.indexOf(char);
            if (charIndex === -1) {
                return char; // Character not in the alphabet
            }
            const keyIndex = this.alphabet.indexOf(keyChar);
            const newIndex = (charIndex + keyIndex) % this.alphabet.length;
            return this.alphabet[newIndex];
        });
    }

    this.decode = function (str) {
        return this.translateText(str, (char, keyChar) => {
            const charIndex = this.alphabet.indexOf(char);
            if (charIndex === -1) {
                return char; // Character not in the alphabet
            }
            const keyIndex = this.alphabet.indexOf(keyChar);
            const newIndex = (charIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
            return this.alphabet[newIndex];
        });
    }

    this.translateText = function(str, operation) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const keyChar = this.key[i % this.key.length];
            result += operation(char, keyChar);
        }
        return result;
    }
}

// Example usage:
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';
const cipher = new VigenèreCipher(key, alphabet);

const encodedText = cipher.encode('codewars');
const decodedText = cipher.decode('laxxhsj');

console.log(encodedText); // should return 'rovwsoiv'
console.log(decodedText); // should return 'waffles'