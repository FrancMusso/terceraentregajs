document.addEventListener("DOMContentLoaded", function () {
  const enviarDatosBtn = document.getElementById("enviarDatos");
  enviarDatosBtn.addEventListener("click", async function () {
    try {
      const correoInputValue = document.getElementById("correoInput").value;
      const telefonoInputValue = document.getElementById("telefonoInput").value;

      const correos = correoInputValue.split(',');
      const telefonos = telefonoInputValue.split(',');

      const datosContacto = [
        { tipo: 'correo', valor: correos[0] },
        { tipo: 'correo', valor: correos[1] },
        { tipo: 'telefono', valor: telefonos[0] },
        { tipo: 'telefono', valor: telefonos[1] }
      ];

      // Guardar datos en el almacenamiento local
      localStorage.setItem('datosContacto', JSON.stringify(datosContacto));

      // Enviar los datos al servidor usando fetch
      const url = https://jsonplaceholder.typicode.com/posts; 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ datosContacto })
      });

      if (response.ok) {
        const resultadosDiv = document.getElementById("resultados");

        const correosFiltrados = obtenerValoresFiltrados(datosContacto, 'correo').join(', ');
        const telefonosFiltrados = obtenerValoresFiltrados(datosContacto, 'telefono').join(', ');

        resultadosDiv.innerHTML = `
          <p>Datos de contacto enviados para recibir información adicional:</p>
          <p>Correos electrónicos: ${correosFiltrados}</p>
          <p>Números telefónicos: ${telefonosFiltrados}</p>
          <p>¡Gracias por enviar tus datos!</p>
        `;
      } else {
        throw new Error('Hubo un problema al enviar los datos al servidor.');
      }
    } catch (error) {
      console.error("Ocurrió un error al recopilar los datos:", error.message);
    }
  });

  // Función para obtener valores filtrados
  function obtenerValoresFiltrados(datos, tipo) {
    return datos
      .filter(item => item.tipo === tipo)
      .map(item => item.valor);
  }

  /
  const datosGuardados = localStorage.getItem('datosContacto');
  if (datosGuardados) {
    const datosParseados = JSON.parse(datosGuardados);
    
  }
});