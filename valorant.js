const nomsAttaquants = ["Jett1", "Phoenix1", "Omen1", "Fade1, Chamber1"];
const nomsDefenseurs = ["Jett2", "Phoenix2", "Omen2", "Fade2, Chamber2"];

function random() {
    return Math.random();
}

function randomNom(tableau) {
    const index = Math.floor(Math.random() * tableau.length);
    return tableau[index];
}

function duel(attaquant, defenseur) {
    if (random() < 0.5) {
        console.log(attaquant + 'gagne le duel contre' + defenseur);
        return attaquant;
    } else {
        console.log(defenseur + 'gagne le duel contre' + attaquant);
        return defenseur;
    }
}

function debutManche() {
    const equipeAleatoire = random() < 0.5 ? 'Attaquants' : 'Défenseurs';
    const joueurAleatoire = equipeAleatoire === 'Attaquants' ? randomNom(nomsAttaquants) : randomNom(nomsDefenseurs);
    
    console.log('Début de la manche :' + joueurAleatoire + "de l'équipe" + equipeAleatoire + 'tue son adversaire.');

    const chanceAmorcage = equipeAleatoire === 'Défenseurs' ? 0.6 : 0.4;
    if (random() < chanceAmorcage) {
        console.log('Le spike est amorcé.');
        const chanceDuel = 0.7;
        const gagnant = duel('Attaquant', 'Défenseur');
        if (gagnant === 'Attaquant') {
            console.log('Les Attaquants gagnent la manche.');
        } else {
            console.log('Les Défenseurs gagnent la manche.');
        }
    } else {
        console.log("Le spike n'est pas amorcé.");
        const gagnant = duel('Attaquant', 'Défenseur');
        if (gagnant === 'Attaquant') {
            console.log('Les Attaquants gagnent la manche.');
        } else {
            console.log('Les Défenseurs gagnent la manche.');
        }
    }
}
    


