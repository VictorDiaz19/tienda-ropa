/* ============================
   Función para enviar pedido
   id -> número del producto
   producto -> nombre del producto
   metodo -> "whatsapp" o "correo"
   ============================ */
function pedir(id, producto, metodo) {
  let color = document.getElementById("color" + id).value;
  let talla = document.getElementById("talla" + id).value;
  let nombre = document.getElementById("nombre" + id).value;

  // Validación: nombre obligatorio
  if (nombre === "") {
    alert("Por favor ingresa tu nombre");
    return;
  }

  // Mensaje que se va a enviar
  let mensaje = `Hola, soy ${nombre}. Quiero pedir un/a ${producto} de color ${color}, talla ${talla}.`;

  if (metodo === "whatsapp") {
    // Número de WhatsApp del dueño (ejemplo México +52)
    let numero = "527551941664"; 
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  } else if (metodo === "correo") {
    // Correo del dueño
    let correo = "dvictoruriel64@gmail.com";
    let asunto = `Nuevo pedido: ${producto}`;
    let url = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
  }
}