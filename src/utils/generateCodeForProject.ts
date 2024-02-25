const alphabet_s = 'qwertyuiopasdfghjklzxcvbnm';
const alphabet_b = alphabet_s.toUpperCase();
const alphabet = alphabet_s.concat(alphabet_b);


// NOT SURE
export function generateCodeForProject(): string {
    let result: string = '';
    const date = Date.now().toString()
    const left = date.slice(0, 6);
    const right = date.slice(6, 11);

    result += left;

    for(let i = 0; i < 5; i++) {
        result += alphabet[Math.floor(Math.random() * 52)];
    }

    result += ':';

    for(let i = 0; i < 5; i++) {
        result += alphabet[Math.floor(Math.random() * 52)];
    }

    result += right;

    return result;
}