const http = require('http');
//servidor nativo 
// de acuerdo a la hora diga que es
const getMensaje = () => {
   const horaActual = new Date().getHours();//lee la hora de mi pc y lo muestra
   if (horaActual >= 6 && horaActual <= 12){
    return ('Buenos días');
   } else if (horaActual > 12 && horaActual <= 19){
    return ('Buenas Tardes');
   } else {
    return ('Buenas noches')}
}

console.log (getMensaje());


//peticion hace el navegador y respuesta la da el backend
const server = http.createServer((peticion, respuesta) => {
    respuesta.end(getMensaje());
})

const connectedServer = server.listen(8080, () => {
    console.log(`Server http escuchando en el puerto ${connectedServer.address().port}`);
})