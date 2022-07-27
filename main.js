// Comenzo ejecución
// solicitarDatos();

// Declaración de operaciones

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}


const cobrar = (importe) => {
    let pago = 0;
    while (importe > 0 && pago != importe) {
        pago = Number(prompt(`Ingrese ${importe}`));
    }
    alert(`Muchas gracias por su compra!`);
}

const entregarPedido = (mssg, p) => {
    alert(`Muchas gracias por elegirnos,
    ${mssg} el total es  ${p}`);
    cobrar(p);
}


function evaluarPedido(food, cantidad) {
    let message = '';
    precio = 0;
    switch (food) {
        case 1:
            precio = 40;
            precio = multiplicar(precio, cantidad);
            message = 'Aquí está su Lomito';
            break;
        case 2:
            precio = 30;
            precio = multiplicar(precio, cantidad);
            message = 'Aquí está su Hamburguesa';
            break;
        case 3:
            precio = 35;
            precio = multiplicar(precio, cantidad);
            message = 'Aquí está su Pizza';
            break;
        case 4:
            precio = 20;
            precio = multiplicar(precio, cantidad);
            message = 'Aquí está su Choripan';
            break;
        default:
            message = 'Lo sentimos, no está en nuestro menú';
    }
    entregarPedido(message, precio);
}


const tomarPedido = () => {
    const comida = Number(prompt(`Bienvenido a Coder FastFood!
    Qué desea llevar? 
    
    1 - Lomito, 40
    2 - Hamburguesa, 30
    3 - Pizza, 35
    4 - Choripan, 20`));
    const cantidad = Number(prompt(`Ingresar cantidad de unidades`));

    evaluarPedido(comida, cantidad);
}

const seccionProductos = document.getElementById('productos');
console.log(seccionProductos)
seccionProductos.innerHTM
const cantidadDeProductos = 5;

const verProductos = () => {
    let contador = 0;
    
    while (contador < cantidadDeProductos) {
        console.log(contador);
        seccionProductos.innerHTML += (`
        <div class="card" style="width: 18rem;">
            <img src="./img/producto${contador}.jpg" class="card-img-top" alt="test">
            <div class="card-body">
                <h5 class="card-title">Producto ${contador}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
        `);
        console.log(seccionProductos)
        contador++;
    }
}

verProductos();
// tomarPedido();