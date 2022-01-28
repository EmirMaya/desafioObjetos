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
const cuenta = new Cuenta('Emir Maya', '24', 'cornu 1234', balance);


const cryptos = [`BTC`, `ETH`, `ADA`, `DOT`, `DOGE`, `SOL`];
const stableCoins = [`USDT`, `DAI`, `USDC`];
let convertir = prompt(`a que desea convertir sus USDT?`).toUpperCase();
//DEPENDE LO QUE ESCRIBA BUSCAREMOS SI ESTA LA CRYPTO O NO CON UN FIND
let encontrar;
do {
    encontrar = cryptos.find(elemento => elemento === convertir);
    if (encontrar) {
        alert(`La criptomoneda ${convertir} está disponible`);
    } else {
        convertir = prompt(`La cryptomoneda no se encuentra, escriba otra`).toUpperCase();
    };
} while (encontrar != convertir);

//Todavia no funciona pero quiero que una sola funcion convierta todas las monedas
// if (convertir === `ETH` || convertir === `BTC` || convertir === `DOT` || convertir === `ADA` || convertir === `SOL`|| convertir === `DOGE`){
//     max = prompt(`¿Quiere convertir todo su balance? si/no`).toLowerCase();
//         if (max == 'si') {
//             alert(`${cuenta.convertirAEth(balance)} LUCIA con una comisión de ${comision} usdt`);
//         } else if (max == 'no') {
//             usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a ${convertir}`));
//             if (usdt <= balance) {
//                 alert(`${cuenta.convertirAEth(usdt)} ${convertir} con una comisión de ${comision} usdt`);
//             } else {
//                 usdt = Number(prompt(`Ingrese la cantidad de usdt menora su balance máximo para convertir a ${convertir}`));
//                 alert(`${cuenta.convertirAEth(usdt)} ${convertir} con una comisión de ${comision} usdt`);
//             };
//         };
// }

switch (convertir) {
    case `ETH`:
        max = prompt(`¿Quiere convertir todo su balance? si/no`).toLowerCase();
        if (max == 'si') {
            alert(`${cuenta.convertirAEth(balance)} ETH con una comisión de ${comision} usdt`);
        } else if (max == 'no') {
            usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a eth`));
            if (usdt <= balance) {
                alert(`${cuenta.convertirAEth(usdt)} ETH con una comisión de ${comision} usdt`);
            } else {
                usdt = Number(prompt(`Ingrese la cantidad de usdt menora su balance máximo para convertir a eth`));
                alert(`${cuenta.convertirAEth(usdt)} ETH con una comisión de ${comision} usdt`);
            };
        };
        break;

    case `BTC`:
        max = prompt(`¿Quiere convertir todo su balance? si/no`).toLowerCase();
        if (max == 'si') {
            alert(`${cuenta.convertirABtc(balance)} BTC con una comisión de ${comision} usdt`);
        } else if (max == 'no') {
            usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a BTC`));
            if (usdt <= balance) {
                alert(`${cuenta.convertirABtc(usdt)} BTC con una comisión de ${comision} usdt`);
            } else {
                usdt = Number(prompt(`Ingrese la cantidad de usdt menora su balance máximo para convertir a BTC`));
                alert(`${cuenta.convertirABtc(usdt)} BTC con una comisión de ${comision} usdt`);
            };
        };
        break;
    case `ADA`:
        max = prompt(`¿Quiere convertir todo su balance? si/no`).toLowerCase();
        if (max == 'si') {
            alert(`${cuenta.convertirAAda(balance)} ADA con una comisión de ${comision} usdt`);
        } else if (max == 'no') {
            usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a ADA`));
            if (usdt <= balance) {
                alert(`${cuenta.convertirAAda(usdt)} ADA con una comisión de ${comision} usdt`);
            } else {
                usdt = Number(prompt(`Ingrese la cantidad de usdt menora su balance máximo para convertir a ADA`));
                alert(`${cuenta.convertirAAda(usdt)} ADA con una comisión de ${comision} usdt`);
            };
        };
        break;

    case `DOGE`:
        max = prompt(`¿Quiere convertir todo su balance? si/no`).toLowerCase();
        if (max == 'si') {
            alert(`${cuenta.convertirADoge(balance)} DOGE con una comisión de ${comision} usdt`);
        } else if (max == 'no') {
            usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a DOGE`));
            if (usdt <= balance) {
                alert(`${cuenta.convertirADoge(usdt)} DOGE con una comisión de ${comision} usdt`);
            } else {
                usdt = Number(prompt(`Ingrese la cantidad de usdt menora su balance máximo para convertir a DOGE`));
                alert(`${cuenta.convertirADoge(usdt)} DOGE con una comisión de ${comision} usdt`);
            };
        };
        break;

    case `DOT`:
        max = prompt(`¿Quiere convertir todo su balance? si/no`).toLowerCase();
        if (max == 'si') {
            alert(`${cuenta.convertirADot(balance)} DOT con una comisión de ${comision} usdt`);
        } else if (max == 'no') {
            usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a DOT`));
            if (usdt <= balance) {
                alert(`${cuenta.convertirADot(usdt)} DOT con una comisión de ${comision} usdt`);
            } else {
                usdt = Number(prompt(`Ingrese la cantidad de usdt menora su balance máximo para convertir a DOT`));
                alert(`${cuenta.convertirADot(usdt)} DOT con una comisión de ${comision} usdt`);
            };
        };
        break;

        case `SOL`:
        max = prompt(`¿Quiere convertir todo su balance? si/no`).toLowerCase();
        if (max == 'si') {
            alert(`${cuenta.convertirASol(balance)} SOL con una comisión de ${comision} usdt`);
        } else if (max == 'no') {
            usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a SOL`));
            if (usdt <= balance) {
                alert(`${cuenta.convertirASol(usdt)} SOL con una comisión de ${comision} usdt`);
            } else {
                usdt = Number(prompt(`Ingrese la cantidad de usdt menora su balance máximo para convertir a SOL`));
                alert(`${cuenta.convertirASol(usdt)} SOL con una comisión de ${comision} usdt`);
            };
        };
        break;

    default:
        alert(`¡Error, no ha seleccionado nada!`)
        break;
};

// creo una lista de crypto
let cryptoList = [{nombre: "ETH", precio: 4000 }, 
{ nombre: "BTC", precio: 40000 },
{ nombre: "ADA", precio: 1.4 },
{ nombre: "DOT", precio: 41 },
{ nombre: "DOGE", precio: 0.6 },
{ nombre: "SOL", precio: 77 }];

// recorro la lista con un for each
for(const crypto of cryptoList){
// por cada crypto creo un contenedor
let contenedor = document.createElement("div");
// cada contenedor tiene un h2 un h3 y un form para convertir
contenedor.innerHTML = `<h2>Convertir usdt a ${crypto.nombre}</h2>
<h3>El precio hoy es $ ${crypto.precio}</h3>
 <form>
     <input type="text">
     <button>Convertir</button>
 </form>`;
 

document.body.appendChild(contenedor); }

