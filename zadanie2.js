function Oferta (marka, model, cena, spalanie, rocznik) {
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.spalanie = spalanie;
    this.rocznik = rocznik;
    this.koszt100km = function() {
        let koszt = this.spalanie * pb95;
        return koszt;
    };
    this.wiekSamochodu = function() {
        let data=new Date()
        let wiek=Number(data.getFullYear())-this.rocznik;
        if(wiek==1) { wiek=wiek+' rok'; }
        else if (wiek>1 && wiek <5) { wiek=wiek+' lata'; }
        else { wiek=wiek+' lat'; }
        return wiek;
    }
}
const Komis = {
    Oferta1: new Oferta("Kia","Carens",60000,8,2018),
    Oferta2: new Oferta("Opel", "Astra", 70000, 10, 1998),
    Oferta3: new Oferta ("Renout", "clio", 50000, 6, 2008),
}
console.log(Komis.Oferta1)

 for(n of Object.keys(Komis))
 {
     console.log(Komis[n])
     let wiek =Komis[n].wiekSamochodu()
     let rocznik = Komis[n].rocznik
    //  console.log(wiek.tab.slice(0, 1))
    console.log(wiek)
    let wiekAuta=wiek[0]+wiek[1]
     console.log(wiekAuta)
    
    var listaOfert= document.getElementById("marki")
     if(wiekAuta <=5)
     {
         console.log("automłode")
         let marka= Komis[n].marka
         let newElement = document.createElement('li')
         let tekst = document.createTextNode(marka +" wiek auta " + wiek+ "cena "+ Komis[n].cena +"zl")
         listaOfert.appendChild(newElement).appendChild(tekst)
     }
     else{
         console.log("stare")
     }
 }
 // Ponizej znajdują się dwa sposoby jak wyswietlic objekt. w tym wypadku nie działa to z dwóch przyczyn
 //---1 niestety są wyswietlane ciała funckji a nie wynik return
 // ---2 nie wiem jak zrobic by wyswietlało 
// document.getElementById("dane").innerHTML =Object.values(Komis.Oferta)
// var x, txt = "";
// var person = {name:"John", age:30, city:"New York"};
//  for (x in person) {
//     txt += person[x] + " ";
//     };
    
//     document.getElementById("demo").innerHTML = txt;