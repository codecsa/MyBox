function compteARebours(){
    var dateActuelle = new Date();
    var annee= dateActuelle.getFullYear();   
    var mai= new Date(annee, 4, 1, 8, 0, 0);
    
       
    var tempsRestant = mai.getTime() - dateActuelle.getTime();  
    var secondesRestantes = tempsRestant/1000;
    var minutesRestantes = secondesRestantes/60;
    var heuresRestantes = minutesRestantes /60;   
    var joursRestants = heuresRestantes / 24;
    
    secondesRestantes = Math.floor(secondesRestantes % 60);
    minutesRestantes = Math.floor(minutesRestantes % 60);
    heuresRestantes = Math.floor(heuresRestantes % 24); 
    joursRestants = Math.floor(joursRestants);      
    
    var mois_fr = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');

    var texte =  "<strong>" +joursRestants+ " jour(s)</strong>, <strong>" +heuresRestantes+ " heure(s)</strong>," +
    " <strong>" +minutesRestantes+ " minute(s)</strong> et <strong>" +secondesRestantes+ " seconde(s)</strong> avant la prochaine BOX !";

    document.getElementById("compteur").innerHTML = texte;
   
    }

setInterval(compteARebours, 100); // Rappel de la fonction toutes les 1000 millisecondes.
