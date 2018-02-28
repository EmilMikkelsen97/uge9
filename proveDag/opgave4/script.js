document.addEventListener("DOMContentLoaded", event => {
    let hojde = 3;
    let laengde = 2;
    // Definere functionen
    function hentAreal() {
        let h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(hojde * laengde));
        document.body.appendChild(h2);
    }
    // Kalder functionen
    hentAreal();
});