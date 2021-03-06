const btn = document.getElementById("btn");
const output = document.getElementById("output");
const notes = [100, 50, 20, 10, 5, 2, 1];

btn.addEventListener("click", function(){
    let price = document.getElementById("x").value;
    let paid = document.getElementById("y").value;
    calculate(price, paid);
});

function calculate(price, paid) {
    
    let remaining = paid - price;
    output.insertAdjacentHTML("beforebegin", `
    <p>Totalsumma: ${remaining}</p>
    <hr />Av varje valör:`);
    
    for (let note of notes) {
        let amount = Math.floor(remaining/note);
        remaining = remaining%note;

        if(amount != 0){
            output.insertAdjacentHTML("beforeend", `<li>${note}: ${amount}st</li>`);
        };
        
    };
   
};

// Skapa en funktion som tar 2 st parametrar. 
// Hur mycket som skall betalas, samt med vilken valör som betalats. 

// Sedan skall funktionen returnera hur mcyket växel som skall lämnas tillbaks. 
// Tex skall jag betala 321 kr och betalar med 500 kr så skall jag få tillbaks
// 179 kr eller

// 1 st 100 kr sedel

// 3 st 20 kr sedlar

// 1 st tio mynt

// 1 st femkronor

// 2 st tvåkronor. 

