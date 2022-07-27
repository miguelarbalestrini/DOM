const seccionProductos = document.getElementById('productos');
const compras = document.getElementById('compras');
const iconoCarrito = document.getElementById('cart');
const cantidadDeProductos = 5;

const entregarPedido = (mensaje, precio) => {
    console.log(mensaje)
    let mensajeCarrito = document.createElement('p');
    mensajeCarrito.innerHTML = mensaje;
    let carrito = document.createElement('p');
    carrito.innerHTML = `El total es de ${precio}`;
    compras.append(mensajeCarrito);
    compras.append(carrito);
}


function evaluarPedido(comida, cantidad) {
    let mensaje = '';
    precio = 0;
    switch (comida) {
        case 1:
            precio = 40;
            precio = precio * cantidad;
            mensaje = 'Aquí está su Pizza0';
            break;
        case 2:
            precio = 30;
            precio = precio * cantidad;
            mensaje = 'Aquí está su Pizza1';
            break;
        case 3:
            precio = 35;
            precio = precio * cantidad;
            mensaje = 'Aquí está su Pizza2';
            break;
        case 4:
            precio = 10;
            precio = precio * cantidad;
            mensaje = 'Aquí está su empanada0';
            break;
        case 5:
            precio = 10;
            precio = precio * cantidad;
            mensaje = 'Aquí está su empanada1';
            break;
        default:
            mensaje = 'Lo sentimos, no está en nuestro menú';
    }
    entregarPedido(mensaje, precio);
}

const mostrarCantidad = (cantidad) => {
    let numeroItems = document.createElement('div');
    numeroItems.innerHTML = cantidad;
    iconoCarrito.append(numeroItems);
}

const tomarPedido = () => {
    const comida = Number(prompt(`Bienvenido a Coder FastFood!
        Qué desea llevar? 
        
        1 - Pizza 0, 40
        2 - Pizza 1, 30
        3 - Pizza 2, 35
        4 - Empanada 3, 10
        5 - Empanada 4, 10    
    `));
    const cantidad = Number(prompt(`Ingresar cantidad de unidades`));

    mostrarCantidad(cantidad);
    evaluarPedido(comida, cantidad);
}

const mostrarProductos = () => {
    let contador = 0;

    while (contador < cantidadDeProductos) {1
        
        seccionProductos.innerHTML += (`
        <div class="card" style="width: 18rem;">
            <img src="./img/producto${contador}.jpg" class="card-img-top" alt="test">
            <div class="card-body">
                <h5 class="card-title">Producto ${contador}</h5>
                <p class="card-text">
                    Some quick example text to build on the card title 
                    and make up the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
        `);
        contador++;
    }
}

mostrarProductos();
tomarPedido();