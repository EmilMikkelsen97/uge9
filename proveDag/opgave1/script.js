    // Definere functionen
    function sammenlign(tekst1, tekst2) {
        if (tekst1 == tekst2) {
            return true;
        } else {
            return false
        }
    }
    // Kalder functione
    let result = sammenlign(10, 20);
    console.log(result);