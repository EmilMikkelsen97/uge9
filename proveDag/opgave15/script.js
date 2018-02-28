let svar = Math.floor((Math.random() * 100) + 1);
let antalGæt = 1;
let forsøg = 10;
let tilbage = "";

console.log("Kan du gætte rigtigt? Gæt på et tal mellem 1 til 100. Held og lykke")
while (ditGæt != svar){
    var ditGæt = prompt(`Du har ${forsøg} forsøg ${tilbage}`);
    
    if (antalGæt == 10) {
        console.log("YOU DIED");
        break;
    }
    else if (ditGæt == svar){
        console.log(`Tillykke! Du gættede rigtigt, Svaret er ${svar}`);
        console.log(`Det tog dig kun ${antalGæt} forsøg`);
    }
    else if (ditGæt < svar){
        console.log("too low");
    }
    else if (ditGæt > svar){
        console.log("too high");
    }
    else if (ditGæt > 100){
        console.log("Hørte du ikke efter? Det skal være under 100...");
    }
    else if (ditGæt < 0){
        console.log("Seriøst? minus tal virker altså ikke...");
    }
    
    antalGæt++;
    forsøg--;
    tilbage = "tilbage";
}