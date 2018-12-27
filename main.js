let c=1;
class Nodo{
constructor(valor){
		this.siguiente = null;  
		this.valor = valor;
	}

	getSiguiente(){
		return this.siguiente;
	}
	
	setSiguiente(siguiente){
		this.siguiente = siguiente;
	}
}

class Cola{
	constructor(){
		this.frente = null;
	}

	insertar(nodo){
		if(!this.frente){
			this.frente= nodo;
		}
		else{
			let nodoActual = this.frente;
			while(nodoActual.siguiente){
				nodoActual = nodoActual.siguiente;
			}
			c++;
			nodoActual.siguiente = nodo;
		}
	}

	mostrar(){
		const nodos = [];
		let nodoActual = this.frente;
		while(nodoActual){
			nodos.push(nodoActual);
			nodoActual = nodoActual.siguiente;
		}
	    //retornar el array
		return nodos;
	}

 
	buscar(valor){
		let num = valorInput.value;
		if(!this.frente){
            return valorInput2.innerHTML="cola vacia";
		}
		let nodoActual = this.frente;
		let respuesta = false;
		while(nodoActual){
        	if(nodoActual.valor===num){
                respuesta=true;
            }
            nodoActual=nodoActual.getSiguiente();    
		}
		if(respuesta===true){
            return valorInput2.innerHTML="El valor si existe";
		}
		else{
			return valorInput2.innerHTML="El valor no existe";
		}

	}

	extraer(){
		if(!this.frente){
			return "cola vacia";
		}
		const valor = this.frente.valor;
		this.frente = this.frente.siguiente;
		console.log("se ha extraido "+ valor);
		c--;
	}

	tamano(){
		if(!this.frente){
			return valorInput2.innerHTML="La cola tiene 0 elementos";
		}
			valorInput2.innerHTML="La cola tiene "+c+" elementos";
	}


	vaciar(){
		while(this.frente){
			const valor = this.frente.valor;
			this.frente = this.frente.siguiente;
			console.log("se ha extraido "+ valor);
			c--;
		}

	}
}



(function(){

	// inizializar atributos
	const cola = new Cola();
	const valorInput = document.getElementById('valorInput');
	const valorInput2 = document.getElementById('valorInput2');
	const agregarBtn = document.getElementById('btn-agregar');
	const extraerBtn = document.getElementById('btn-extraer');
	const tamanoBtn = document.getElementById('btn-tamano');
	const vaciarBtn = document.getElementById('btn-vaciar');
	const buscarBtn = document.getElementById('btn-buscar');

	//extraer, mostrar,tamaño
	const agregar = function() {
		console.log("Agregar nodo");
		cola.insertar(new Nodo(valorInput.value));
		console.log(cola);
		mostrar();
		valorInput.value='';
	};

	const eliminar = function() {
		cola.extraer();
		mostrar();
	};

	const vaciar2 = function() {
		cola.vaciar();
		mostrar();
	};

	const tamano2 = function() {
		cola.tamano();
	};

	const buscar2 = function() {
		cola.buscar();
	};

	const mostrar = function(){
		lista.innerHTML='';
		const elementos = cola.mostrar();
		elementos.forEach((nodo) =>{
			const nuevoItem = document.createElement('li');
			const valor = document.createTextNode(nodo.valor);
			nuevoItem.appendChild(valor);
			lista.appendChild(nuevoItem);
		});
	}

	extraerBtn.addEventListener('click',eliminar);
	agregarBtn.addEventListener('click', agregar);
	tamanoBtn.addEventListener('click',tamano2);
	vaciarBtn.addEventListener('click',vaciar2);
	buscarBtn.addEventListener('click',buscar2);

}());