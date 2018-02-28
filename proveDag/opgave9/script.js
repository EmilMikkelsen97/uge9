document.addEventListener('DOMContentLoaded', function (event) {
    let alder = 20;
    // let alder = 17;
    let besked = "Velkommen";

    if(alder < 18) {
        besked = "Desværre, du er ikke gammel nok";
    }

    console.log(besked);
});