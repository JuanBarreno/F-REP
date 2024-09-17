/*CARGAR PROVINCIAS Y CANTONES*/
let $provincia = document.getElementById('provincia');
let $canton = document.getElementById('canton');

/*LLENAR MATRICES*/
let provincias = ['Carchi', 'Imbabura', 'Galápagos'];
let cantones = ['Tulcán', 'Montúfar', 'Mira', 'Bolívar', 'Espejo', 'San Pedro de Huaca', 'Ibarra', 'Antonio Ante', 'Cotacachi', 'Otavalo', 'Pimampiro', 'San Miguel de Urcuqui', 'San Cristóbal','Santa Cruz', 'Isabela'];

/*LLAMAR A UNA FUNCION */
verProvincias(provincias, $provincia);

/*CONSTRUCCION DE LA FUNCION */
function verProvincias(matriz, lugar){
    let elementos = '<option selected disabled> Seleccione </option>';

    for(let i = 0; i < matriz.length; i++){
        elementos += '<option value = "' + matriz[i] + '">' + matriz[i] + '</option>';
    }
    lugar.innerHTML = elementos;
}

/*VALIDAR PROVINCIAS*/
$provincia.addEventListener('change', function(){
    let valor= $provincia.value;

    switch(valor){
        case 'Carchi':
            verProvincias(cantones.slice(0, 6), $canton);
            break;
        case 'Imbabura' :
            verProvincias(cantones.slice(6,12),$canton);
            break;
        case 'Galápagos':
            verProvincias(cantones.slice(12,15), $canton);
            break;
    }
});
  