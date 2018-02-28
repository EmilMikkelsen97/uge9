document.addEventListener("DOMContentLoaded", event => {
    // Definere functionen
    function prisMedMoms(pris) {
        let h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(pris * 25 / 100 + pris));
        document.body.appendChild(h1);
    }
    // Kalder min function 2 gange men med forskellige priser
    prisMedMoms(200);
    prisMedMoms(800);
});