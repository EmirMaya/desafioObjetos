

let balanceTotal = 40000;
let btc;
let eth;
let ada;
let doge;
let dot;
let sol;
//utilice la api de binance para los precios de las cryptos
let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
  .then(respuesta => respuesta.json())
  .then(datos => mostrarData(datos))
  .catch(e => console.log(e))


const mostrarData = (data) => {
  //voy a ir recorriendo la lista de los pares de precios, y solo voy a agregar a la tabla los que voy a usar
  //ya que con esta api se pueden pasar los precios de todos los pares de binance que son como 13mil
  let body = ''
  let options = '<option value="" selected disabled>Seleccione una crypto ...</option>'
  for (let i = 0; i < data.length; i++) {
    if (data[i].symbol == 'ETHUSDT') { //entonces si el simbolo es igual al que quiero, en este caso ETHUSDT lo agrego a la tabla
      eth = data[i].price;
      body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
      options += `<option value="${data[i].symbol}"> ${data[i].symbol}</option>`
    }

    if (data[i].symbol == 'BTCUSDT') {
      btc = data[i].price;
      body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
      options += `<option value="${data[i].symbol}"> ${data[i].symbol}</option>`
    }

    if (data[i].symbol == 'ADAUSDT') {
      ada = data[i].price;
      body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
      options += `<option value="${data[i].symbol}"> ${data[i].symbol}</option>`
    }

    if (data[i].symbol == 'DOTUSDT') {
      dot = data[i].price;
      body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
      options += `<option value="${data[i].symbol}"> ${data[i].symbol}</option>`
    }

    if (data[i].symbol == 'DOGEUSDT') {
      doge = data[i].price;
      body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
      options += `<option value="${data[i].symbol}"> ${data[i].symbol}</option>`
    }

    if (data[i].symbol == 'SOLUSDT') {
      sol = data[i].price;
      body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
      options += `<option value="${data[i].symbol}"> ${data[i].symbol}</option>`
    }

  }
  document.getElementById('data').innerHTML = body
  document.getElementById('listaCrypto').innerHTML = options
}


class Crypto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  };

  convertirAEth(usdt) {
    //1eth ------ precio de binance usdt
    // x eth ---- tantos usdt
    //100% --- son la cant de usdt que queremos convertir.
    // 0.5%--- tantos usdt
    //reglas de 3 simple para sacar las conversiones de las cryptos
    comision = (usdt * 0.5) / 100;
    balanceTotal = balanceTotal - comision;
    convert = (usdt - comision) / eth;
    return convert;
  };

  convertirABtc(usdt) {
    comision = (usdt * 0.5) / 100;
    balanceTotal = balanceTotal - comision;
    convert = (usdt - comision) / btc;
    return convert;
  };

  convertirAAda(usdt) {
    comision = (usdt * 0.5) / 100;
    balanceTotal = balanceTotal - comision;
    convert = (usdt - comision) / ada;
    return convert;
  };

  convertirADot(usdt) {
    comision = (usdt * 0.5) / 100;
    balanceTotal = balanceTotal - comision;
    convert = (usdt - comision) / dot;
    return convert;
  };

  convertirASol(usdt) {
    comision = (usdt * 0.5) / 100;
    balanceTotal = balanceTotal - comision;
    convert = (usdt - comision) / sol;
    return convert;
   
  };

  convertirADoge(usdt) {
    comision = (usdt * 0.5) / 100;
    balanceTotal = balanceTotal - comision;
    convert = (usdt - comision) / doge;
    return convert;
  };

};

let comision;
let usdt;
let convert;


let bal = document.createElement('p')
bal.innerHTML = `<div class = "cuenta">
<h5 class = "balance" id = "balanceId">Balance Total: ${balanceTotal}</h5> </div>`;
document.getElementById('bal').appendChild(bal);
let conversion; // esta variable es para mostrar la conversion en el input
const BTC = new Crypto('BTC' , btc );
const ETH = new Crypto('ETH' , eth );
const DOT = new Crypto('DOT' , dot );
const ADA = new Crypto('ADA' , ada );
const DOGE = new Crypto('DOGE' , doge );
const SOL = new Crypto('SOL' , sol );
const cryptos = [`BTC`, `ETH`, `ADA`, `DOT`, `DOGE`, `SOL`];

// basicamente primero llamo al DOM para los inputs y para el boton y el select, cada uno con su clase
const boton = document.querySelector(".convertButton");

const cryptoList = document.querySelector(".cryptoList");

let inputUsdt = document.querySelector(".usdtInput");

let input = document.querySelector(".convertInput");
let crp = '';



// hago un evento para el select, que a su vez tendra todos los eventos de las conversiones
cryptoList.addEventListener('change', (evt) => {

  crp = evt.target.value; //guardo el valor del evento en una ctte
  if (crp == 'BTCUSDT') { // entonces aca hacemos un if, si eligo btc, procede al sgte evento
    boton.addEventListener('click', respClick) //si le doy click a convertir donde previamente llene el input de usdt
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value); //guarda mi cant de usdt
      usdt = localStorage.getItem('USDT'); // se la agrego a una variable
      if (usdt <= balanceTotal) {
        conversion = BTC.convertirABtc(usdt); //los convierto a btc
        console.log(usdt);
        console.log(input.value = conversion); //el input muestra el valor de conversion
        const com = document.querySelector('.comision'); // por ultimo agrego una p para mostrar la comision
        com.textContent = `La comision es de ${comision} USDT`;
      } else {
        swal(`Debe ingresar un valor menor o igual a su balance total ${balanceTotal}`)
      }
      mostrarBalance();
    };
  } else if (crp == 'ETHUSDT') { // lo mismo para las demas cryptos
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      if (usdt <= balanceTotal) {
        conversion = ETH.convertirAEth(usdt);
        console.log(usdt);
        console.log(input.value = conversion);
        const com = document.querySelector('.comision');
        com.textContent = `La comision es de ${comision} USDT`;
      } else {
        swal(`Debe ingresar un valor menor o igual a su balance total ${balanceTotal}`)
      }
      mostrarBalance();
    };
  } else if (crp == 'ADAUSDT') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      if (usdt <= balanceTotal) {
        conversion = ADA.convertirAAda(usdt);
        console.log(usdt);
        console.log(input.value = conversion);
        const com = document.querySelector('.comsion');
        com.textContent = `La comision es de ${comision} USDT`;
      } else {
        swal(`Debe ingresar un valor menor o igual a su balance total ${balanceTotal}`)
      }
      mostrarBalance();
    };
  } else if (crp == 'DOTUSDT') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      if (usdt <= balanceTotal) {
        conversion = DOT.convertirADot(usdt);
        console.log(usdt);
        console.log(input.value = conversion);
        const com = document.querySelector('.comision');
        com.textContent = `La comision es de ${comision} USDT`;
      } else {
        swal(`Debe ingresar un valor menor o igual a su balance total ${balanceTotal}`)
      }
      mostrarBalance();
    };
  } else if (crp == 'DOGEUSDT') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      if (usdt <= balanceTotal) {
        conversion = DOGE.convertirADoge(usdt);
        console.log(usdt);
        console.log(input.value = conversion);
        const com = document.querySelector('.comision');
        com.textContent = `La comision es de ${comision} USDT`;
      } else {
        swal(`Debe ingresar un valor menor o igual a su balance total ${balanceTotal}`)
      }
      mostrarBalance();
    };
  } else if (crp == 'SOLUSDT') {
    boton.addEventListener('click', respClick)
    function respClick() {
      localStorage.setItem('USDT', inputUsdt.value);
      usdt = localStorage.getItem('USDT');
      if (usdt <= balanceTotal) {
        conversion = SOL.convertirASol(usdt);
        console.log(usdt);
        console.log(input.value = conversion);
        const com = document.querySelector('.comsion');
        com.textContent = `La comision es de ${comision} USDT`;
      } else {
        swal(`Debe ingresar un valor menor o igual a su balance total ${balanceTotal}`)
      }
      mostrarBalance();
    };
  };
});

// cuando lo convierto queda grabado en el historial de conversiones al final del main
$(document).ready(function () {
  $('.convertButton').on('click', function () {
    if (inputUsdt.value <= balanceTotal) {
      $("main").append(`<p class="comision">¡Conversión Realizada! Cambiaste tus ${inputUsdt.value} USDT a ${crp}</p>`);
    }
  });
});

// esto es para el footer para suscribirse a las novedades de la página
$('.formEmail').submit(function (e) {
  $.ajax({
    type: $('.formEmail').attr('method'),
    url: $('.formEmail').attr('action'),
    data: $('.formEmail').serialize(),
    success: function (data) {
      swal({
        title: "¡Te has suscrito!",
        text: "Te enteraras de todas las novedades",
        icon: "success",
      });;
    }
  });
  e.preventDefault();
});


function mostrarBalance() {
  setText("balanceId",  `Balance Total: ${balanceTotal}`)
}

function setText(id, text) {
  document.getElementById(id).innerHTML = text;
}