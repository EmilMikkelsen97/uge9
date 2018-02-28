document.addEventListener("DOMContentLoaded", event => {
    let fornavn = "Emil ";
    let efternavn = "Mikkelsen, ";
    let vej = "Maglegårdsvej ";
    let husnummer = 8 + ", ";
    let postnummer = 4000;
    let bynavn = " Roskilde";
// Definere functionen
    function adresselabel() {
        // Laver en div, et ptag og tekst
        let div = document.createElement('div');
        let p = document.createElement('p');
        let f = document.createTextNode(fornavn);
        let e = document.createTextNode(efternavn);
        let v = document.createTextNode(vej);
        let h = document.createTextNode(husnummer);
        let pn = document.createTextNode(postnummer);
        let b = document.createTextNode(bynavn);
        // Her lægger jeg så teksten ned i mit ptag
        p.appendChild(f);
        p.appendChild(e);
        p.appendChild(v);
        p.appendChild(h);
        p.appendChild(pn);
        p.appendChild(b);
        // Lægger ptagget end i min div
        div.appendChild(p);
        // udskriver div
        document.body.appendChild(div);
    }
    // Kalder functionen
    let result = adresselabel();
});