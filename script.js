// Esperamos a que todo el contenido del HTML se haya cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

  // --- CONFIGURACIÓN ---
  // Reemplaza estos valores con tu número de WhatsApp y tu correo electrónico.
  const tuNumeroWhatsapp = '527551941664'; // Formato: código de país + número (ej. 52 para México)
  const tuCorreoElectronico = 'dvictoruriel64@gmail.com';
  // --------------------


  // Seleccionamos TODAS las tarjetas de producto que existen en la página.
  const productCards = document.querySelectorAll('.producto');

  // Recorremos cada una de las tarjetas de producto que encontramos.
  productCards.forEach(card => {

    // Dentro de CADA tarjeta, buscamos sus elementos específicos.
    // Usar 'card.querySelector' es la clave, ya que solo busca dentro de esa tarjeta.
    const whatsappButton = card.querySelector('.btn-whatsapp');
    const emailButton = card.querySelector('.btn-email');
    
    const productName = card.querySelector('.product-name').textContent;
    const productPrice = card.querySelector('.product-price').textContent;
    
    const colorSelect = card.querySelector('.product-color');
    const sizeSelect = card.querySelector('.product-size');
    const nameInput = card.querySelector('.customer-name');

    // Agregamos un 'escuchador' de eventos al botón de WhatsApp de ESTA tarjeta.
    whatsappButton.addEventListener('click', () => {
      // Obtenemos los valores seleccionados en el momento del clic.
      const selectedColor = colorSelect.value;
      const selectedSize = sizeSelect.value;
      const customerName = nameInput.value.trim(); // .trim() quita espacios en blanco

      // Verificamos si el cliente escribió su nombre.
      if (customerName === '') {
        alert('Por favor, escribe tu nombre para continuar.');
        return; // Detiene la ejecución si el nombre está vacío.
      }

      // Creamos el mensaje que se enviará.
      const mensaje = `¡Hola! 👋 Me interesa hacer un pedido:\n
- Cliente: ${customerName}
- Producto: ${productName} (${productPrice})
- Color: ${selectedColor}
- Talla: ${selectedSize}\n
¡Gracias!`;

      // Codificamos el mensaje para que sea seguro en una URL.
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Creamos la URL final para la API de WhatsApp.
      const urlWhatsapp = `https://wa.me/${tuNumeroWhatsapp}?text=${mensajeCodificado}`;

      // Abrimos WhatsApp en una nueva pestaña.
      window.open(urlWhatsapp, '_blank');
    });

    // Hacemos lo mismo para el botón de Correo de ESTA tarjeta.
    emailButton.addEventListener('click', () => {
      const selectedColor = colorSelect.value;
      const selectedSize = sizeSelect.value;
      const customerName = nameInput.value.trim();

      if (customerName === '') {
        alert('Por favor, escribe tu nombre para continuar.');
        return;
      }
      
      // Creamos el asunto y el cuerpo del correo.
      const asunto = `Pedido de: ${customerName} - Producto: ${productName}`;
      const cuerpo = `Hola,\n
Me gustaría realizar el siguiente pedido:
--------------------------------------
- Cliente: ${customerName}
- Producto: ${productName}
- Precio: ${productPrice}
- Color: ${selectedColor}
- Talla: ${selectedSize}
--------------------------------------\n
Espero su respuesta. ¡Gracias!`;
      
      // Codificamos el asunto y el cuerpo para la URL 'mailto'.
      const asuntoCodificado = encodeURIComponent(asunto);
      const cuerpoCodificado = encodeURIComponent(cuerpo);

      // Creamos el enlace 'mailto'.
      const urlEmail = `mailto:${tuCorreoElectronico}?subject=${asuntoCodificado}&body=${cuerpoCodificado}`;

      // Abrimos el cliente de correo del usuario.
      window.location.href = urlEmail;
    });

  }); // Fin del recorrido de las tarjetas.

});