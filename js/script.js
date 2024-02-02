 const display = document.getElementById("display");

function appendKeys(input){
    display.value += input;  /*pour  ajouter le contenu de l'argument à la fin du champ texte*/
}

function clearDisplay(){
    display.value = ""; /*pour  effacer le contenu de l'affichage*/
}

function calculate(){
    try{
        display.value = eval(display.value);/*  pour  exécuter les calculs  */
    }
    catch(error){
        display.value = "Error";
    }
}   
 