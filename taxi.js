
  const personnage = {
    prenom: "John",
    santeMentale: 10,
  };
  

  const musiques = ["Chanson 1", "Chanson 2", "Chanson 3", "Chanson 4", "Anissa - Wejdene"];
  

  function choisirMusique() {
    const musiqueIndex = Math.floor(Math.random() * musiques.length);
    return musiques[musiqueIndex];
  }
  

  function simulerTrajet() {
    const trajet = {
      feuxRouges: 30,
      changementsDeTaxi: 0,
    };
  
    while (trajet.feuxRouges > 0 && personnage.santeMentale > 0) {
      const musique = choisirMusique();
      console.log('Musique jouée :' + musique + '- Feux restants :' + trajet.feuxRouges);
      if (musique === "Anissa - Wejdene") {
        personnage.santeMentale--;
        trajet.changementsDeTaxi++;
      }
      trajet.feuxRouges--;
    }
  
    if (trajet.feuxRouges === 0) {
      console.log('John est bien arrivé chez lui en'+ trajet.changementsDeTaxi + 'changements de taxi.');
    } else {
      console.log("Explosion");
    }
  }
  

  simulerTrajet();
  