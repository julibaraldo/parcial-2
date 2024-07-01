const modal = new bootstrap.Modal(document.querySelector('#modalNota'), {})
const modalInfo = new bootstrap.Modal(document.querySelector('#modalInfo'), {})
const textCuatr = document.querySelector('#textCuatr');
const textMateria = document.querySelector('#textMateria');
const textNota1 = document.querySelector('#textNota1');
const textNota2 = document.querySelector('#textNota2');
const textNota3 = document.querySelector('#textNota3');
const notasLista = document.querySelector('#notasLista');

const primero = document.querySelector('#primero');
const segundo = document.querySelector('#segundo');
const tercero = document.querySelector('#tercero');
const cuarto = document.querySelector('#cuarto');
const quinto = document.querySelector('#quinto');
const sexto = document.querySelector('#sexto');



function nuevaMateria(){
    modal.show();
}

function info(){
    modalInfo.show();

}

function crear(){
    let cuatr = textCuatr.value; 
    let materia = textMateria.value;
    let nota1 = textNota1.value;
    let nota2 = textNota2.value;
    let nota3 = textNota3.value;

    console.log(cuatr)

    if( cuatr == '' || nota1 == '' || nota2 == '' || nota3 == '' || materia == ''){
        alert('Por favor, complete los datos para continuar.');
        return
    }

    if( cuatr == '1°CUATRIMESTRE'){
        primero.innerHTML += 
        `<li class=" list-group-item list-group-item-warning list-group-item d-flex justify-content-between">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <div>
                <strong> ${cuatr}: ${materia}  </strong>   ${nota1} ${nota2} ${nota3}
            </div>
            
            <i onclick="eliminar(this)" class="fa-solid fa-trash btn-delete" ></i>
            
        </li>`
    } else if( cuatr == '2°CUATRIMESTRE'){
        segundo.innerHTML += 
        `<li class=" list-group-item list-group-item-warning list-group-item d-flex justify-content-between">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <div>
                <strong> ${cuatr}: ${materia}  </strong>   ${nota1} ${nota2} ${nota3}
            </div>
            
            <i onclick="eliminar(this)" class="fa-solid fa-trash btn-delete" ></i>
            
        </li>`
    } else if( cuatr == '3°CUATRIMESTRE'){
        tercero.innerHTML += 
        `<li class=" list-group-item list-group-item-warning list-group-item d-flex justify-content-between">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <div>
                <strong> ${cuatr}: ${materia}  </strong>   ${nota1} ${nota2} ${nota3}
            </div>
            
            <i onclick="eliminar(this)" class="fa-solid fa-trash btn-delete" ></i>
            
        </li>`
    } else if( cuatr == '4°CUATRIMESTRE'){
        cuarto.innerHTML += 
        `<li class=" list-group-item list-group-item-warning list-group-item d-flex justify-content-between">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <div>
                <strong> ${cuatr}: ${materia}  </strong>   ${nota1} ${nota2} ${nota3}
            </div>
            
            <i onclick="eliminar(this)" class="fa-solid fa-trash btn-delete" ></i>
            
        </li>`
    } else if( cuatr == '5°CUATRIMESTRE'){
        quinto.innerHTML += 
        `<li class=" list-group-item list-group-item-warning list-group-item d-flex justify-content-between">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <div>
                <strong> ${cuatr}: ${materia}  </strong>   ${nota1} ${nota2} ${nota3}
            </div>
            
            <i onclick="eliminar(this)" class="fa-solid fa-trash btn-delete" ></i>
            
        </li>`
    } else if( cuatr == '6°CUATRIMESTRE'){
        sexto.innerHTML += 
        `<li class=" list-group-item list-group-item-warning list-group-item d-flex justify-content-between">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <div>
                <strong> ${cuatr}: ${materia}  </strong>   ${nota1} ${nota2} ${nota3}
            </div>
            
            <i onclick="eliminar(this)" class="fa-solid fa-trash btn-delete" ></i>
            
        </li>`
    }

    textCuatr.value = '';
    textMateria.value = '';
    textNota1.value = '';
    textNota2.value = '';
    textNota3.value = '';
    modal.hide();
    guardar();
}

function eliminar( elemento ){
    elemento.parentNode.remove();
    
    guardar();
}

function editar( elemento ){
    elemento.parentNode.return();
    
    guardar();
}



function guardar(){
    console.log('Guardando en el localStorage')
    let listaHTML = notasLista.innerHTML;
    localStorage.setItem('lista', listaHTML);
}
