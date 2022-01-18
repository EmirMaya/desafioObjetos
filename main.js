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

};


let comision;
let usdt;
let max;
let balance = 4000;
const cuenta = new Cuenta('Emir Maya', '24', 'cornu 1234', balance);
let convertir = prompt(`a que desea convertir sus usdt? eth o btc`).toLowerCase();

switch (convertir) {
    case `eth`:
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
        //quería hacerlo un poco más complejo, es decir si pongo que si, convierte todo el balance a la crypto
        // y si no, elijo un monto menor. El problema es que en console no me sale ningun error y tampoco me ejecutaba el alert así que por ahora lo dejo más simple

        // usdt = Number(prompt(`Ingrese la cantidad de usdt a convertir a eth`));
        // alert(`${cuenta.convertirAEth(usdt)} BTC con una comisión de ${comision} usdt`);
        break;

    case `btc`:
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

    default:
        alert(`¡Error, no ha seleccionado nada!`)
        break;
};
