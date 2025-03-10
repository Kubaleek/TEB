const AlfabetDuze = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
const AlfabetMale = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];

const PlusValue = () => {
    const key = document.getElementById('key');
    key.value < 25 ? (
        key.value = parseInt(key.value) + 1
    ) : (
        alert("Osiągnąłeś Limit")
    )
}

const MinusValue = () => {
    const key = document.getElementById('key');
    key.value = parseInt(key.value) - 1
}

const Szyfr = (przesuniecie, tekst) => {
    let w = [];
    let s = tekst.split('');

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < AlfabetDuze.length; j++) {
            if (s[i] === AlfabetDuze[j]) {
                // nowy indeks który mieści się w granicach długości tablicy
                let index = (j + przesuniecie) % AlfabetDuze.length;
                 // Alfabet od końca tablicy gdy liczba jest ujemna
                if (index < 0) index += AlfabetDuze.length;
                w.push(AlfabetDuze[index]);
            }
        }

        for (let j = 0; j < AlfabetMale.length; j++) {
            if (s[i] === AlfabetMale[j]) {
                let index = (j + przesuniecie) % AlfabetMale.length;
                // Alfabet od końca tablicy gdy liczba jest ujemna
                if (index < 0) index += AlfabetMale.length;
                w.push(AlfabetMale[index]);
            }
        }
    }

    return `${przesuniecie}#${w.join('')}`;
}

const Deszyfr = (przesuniecie, tekst) => {
    let w = [];
    let s = tekst.split('');

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < AlfabetDuze.length; j++) {
            if (s[i] === AlfabetDuze[j]) {
                let index = (j - przesuniecie + AlfabetDuze.length) % AlfabetDuze.length;
                w.push(AlfabetDuze[index]);
                break;
            }
        }

        for (let j = 0; j < AlfabetMale.length; j++) {
            if (s[i] === AlfabetMale[j]) {
                let index = (j - przesuniecie + AlfabetMale.length) % AlfabetMale.length;
                w.push(AlfabetMale[index]);
                break;
            }
        }
    }

    return `${przesuniecie}#${w.join('')}`;
}

const Szyfruj = () => {
    const przesuniecie = parseInt(document.getElementById("key").value);
    const tekst = document.getElementById("text").value;
    const zaszyfrowany = Szyfr(przesuniecie, tekst);
    document.getElementById("s").innerHTML = zaszyfrowany;
}

const Deszyfruj = () => {
    const wynikSzyfr = document.getElementById("s").innerHTML;
    const [przesuniecia, zaszyfrowany] = wynikSzyfr.split("#"); // Rozdzielamy na dwie zmienne przesuniecia i wynik szyfrowania
    const przesuniecie = parseInt(przesuniecia); // zmiana stringa przesuniecia na liczbę 
    const odszyfrowany = Deszyfr(przesuniecie, zaszyfrowany);
    document.getElementById("d").innerHTML = odszyfrowany;
}
