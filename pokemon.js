class Pokemon {
    constructor(name, hp, attack, defense, luck) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.luck = luck;
    }

    getSTATSpokemon(){ 
        console.log('Stats de' + this.name + '-' + 'Attack:' + this.attack + ', Defense:' + this.defense + ', Hp:'+ this.hp + ', Luck:' + this.luck);
    }

    isLucky () {
        let random = Math.random();

        if (random <= this.luck) {
            return true
        }
        else {
            return false
        }
    }

    attackPokemon(cible) {
        let degat = this.attack - cible.defense;
        cible.hp = cible.hp - degat;

        console.log ("stats de" + cible.name + 'a' + cible.hp + "de vie");    
    }
}

    

let Dracofeu = new Pokemon("Dracofeu", 100, 50, 20, 0.5);
let Pikachu = new Pokemon("Pikachu", 100, 30, 10, 0.6);

while (Dracofeu.hp > 0 && Pikachu.hp > 0) {
    if (Dracofeu.isLucky()) {    
        Dracofeu.attackPokemon(Pikachu);
        console.log("Pikachu a subi " + Dracofeu.attack  + " et il reste " + Pikachu.hp + " à Pikachu" ) 
    }
    else {
        console.log("Dracofeu a raté son coup")
    }   
    if (Pikachu.isLucky()) {
        Pikachu.attackPokemon(Dracofeu);
        console.log("Dracofeu a subi " + Pikachu.attack  + " et il reste " + Dracofeu.hp + " à Dracofeu" )
    }
    else {
        console.log("Pikachu a raté son coup")
    } 
}
