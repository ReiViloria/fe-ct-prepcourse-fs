function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1
        for (var i = 0 ; i < Math.abs(b - a + 1); i++){
    producto = producto * (a + i);
    }
    if (producto === -0) {
      producto = 0;
    }
    return (producto);
}

console.log(productoEntreNúmeros(3, 7));

module.exports = productoEntreNúmeros;