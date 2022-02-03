class Cuenta {
    constructor(nombre, edad, direccion, balance) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.balance = balance;
    };

    convertirAEth(usdt) {
        //1eth ------ 4000 usdt
        // x eth ---- tantos usdt
        //100% --- son la cant de usdt que queremos convertir.
        // 0.5%--- tantos usdt
        let eth = 4000;
        comision = (usdt * 0.5) / 100;
        this.balance = (usdt - comision) / eth;
        return this.balance;
    };

    convertirABtc(usdt) {
        //1btc------ 40000 usdt
        // x btc ---- tantos usdt
        //100% --- son la cant de usdt que queremos convertir.
        // 0.5%--- tantos usdt
        let btc = 40000;
        comision = (usdt * 0.5) / 100;
        this.balance = (usdt - comision) / btc;
        return this.balance;
    };

    convertirAAda(usdt) {
        let ada = 1.4;
        comision = (usdt * 0.5) / 100;
        this.balance = (usdt - comision) / ada;
        return this.balance;
    };

    convertirADot(usdt) {
        let dot = 41;
        comision = (usdt * 0.5) / 100;
        this.balance = (usdt - comision) / dot;
        return this.balance;
    };

    convertirASol(usdt) {
        let sol = 77;
        comision = (usdt * 0.5) / 100;
        this.balance = (usdt - comision) / sol;
        return this.balance;
    };

    convertirADoge(usdt) {
        let doge = 0.6;
        comision = (usdt * 0.5) / 100;
        this.balance = (usdt - comision) / doge;
        return this.balance;
    };

};


let comision;
let usdt;
let max;
let balance = 4000;
let conversion; // esta variable es para mostrar la conversion en el input
const cuenta = new Cuenta('Emir Maya', '24', 'cornu 1234', balance);


const cryptos = [`BTC`, `ETH`, `ADA`, `DOT`, `DOGE`, `SOL`];

// basicamente primero llamo al DOM para los inputs y para el boton y el select, cada uno con su clase
const boton = document.querySelector(".convertButton"); 

const cryptoList = document.querySelector(".cryptoList");

let inputUsdt = document.querySelector(".usdtInput");

let input = document.querySelector(".convertInput");


// hago un evento para el select, que a su vez tendra todos los eventos de las conversiones
cryptoList.addEventListener('change', (evt)=>{
   const crp = evt.target.value; //guardo el valor del evento en una ctte
   console.log(`elegiste ${crp}`); // lo muestro para ver si funciona
   if (crp == 'BTC') { // entonces aca hacemos un if, si eligo btc, procede al sgte evento
       boton.addEventListener('click', respClick) //si le doy click a convertir donde previamente llene el input de usdt
       function respClick() { 
         localStorage.setItem('USDT', inputUsdt.value); //guarda mi cant de usdt
         usdt = localStorage.getItem('USDT'); // se la agrego a una variable
         conversion = cuenta.convertirABtc(usdt); //los convierto a btc
         console.log(usdt); // lo muestro solo para verificara
         console.log(input.value = conversion); // el input de conversion muestra la convertido.
         const com = document.querySelector('p'); // por ultimo agrego una p para mostrar la comision
         com.textContent = `La comision es de ${comision} USDT`;
        };
   } else if (crp == 'ETH') { // lo mismo para las demas cryptos
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      conversion = cuenta.convertirAEth(usdt);
      console.log(usdt);
      console.log(input.value = conversion);
      const com = document.querySelector('p');
      com.textContent = `La comision es de ${comision} USDT`;
     };
   } else if (crp == 'ADA') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      conversion = cuenta.convertirAAda(usdt);
      console.log(usdt);
      console.log(input.value = conversion);
      const com = document.querySelector('p');
      com.textContent = `La comision es de ${comision} USDT`;
     };
   } else if (crp == 'DOT') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      conversion = cuenta.convertirADot(usdt);
      console.log(usdt);
      console.log(input.value = conversion);
      const com = document.querySelector('p');
      com.textContent = `La comision es de ${comision} USDT`;
     };
   } else if (crp == 'DOGE') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      conversion = cuenta.convertirADoge(usdt);
      console.log(usdt);
      console.log(input.value = conversion);
      const com = document.querySelector('p');
      com.textContent = `La comision es de ${comision} USDT`;
     };
   } else if (crp == 'SOL') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      conversion = cuenta.convertirASol(usdt);
      console.log(usdt);
      console.log(input.value = conversion);
      const com = document.querySelector('p');
      com.textContent = `La comision es de ${comision} USDT`;
     };
   };
});




// boton.addEventListener('click', respClick)
// function respClick() {
//     localStorage.setItem('USDT', inputUsdt.value);
//     usdt = localStorage.getItem('USDT');
//     console.log(inputUsdt.value);
//     console.log(input.value = conversion);
// }

// buttonClick.addEventListener('click',() => {
//     console.log(input.value = cuenta.convertirABtc(usdt));
// });






// // creo una lista de crypto
// let cryptoList = [{nombre: "ETH", precio: 4000 }, 
// { nombre: "BTC", precio: 40000 },
// { nombre: "ADA", precio: 1.4 },
// { nombre: "DOT", precio: 41 },
// { nombre: "DOGE", precio: 0.6 },
// { nombre: "SOL", precio: 77 }];

// recorro la lista con un for each
// for(const crypto of cryptoList){
// // por cada crypto creo un contenedor
// let contenedor = document.createElement("div");
// // cada contenedor tiene un h2 un h3 y un form para convertir
// contenedor.innerHTML = `<h2>Convertir usdt a ${crypto.nombre}</h2>
// <h3>El precio hoy es $ ${crypto.precio}</h3>
//  <form>
//      <input type="text">
//      <button>Convertir</button>
//  </form>`;
 

// document.body.appendChild(contenedor); }

