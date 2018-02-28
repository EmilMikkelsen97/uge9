document.addEventListener('DOMContentLoaded', function (event) {
// Mit array
    let dage = [
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
        "Søndag"
    ]

    // For-løkken
    let txt = "";
    let i;
    for (i = 0; i < dage.length; i++) {
        txt = dage[i];
        console.log(txt);
        let h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(txt));
        document.body.appendChild(h2);
    }

    // forEach løkken
    // dage.forEach(function (index) {
    //     console.log(index);
    //     let h2 = document.createElement('h2');
    //     h2.appendChild(document.createTextNode(index));
    //     document.body.appendChild(h2);
    // });
});