'use strict'

// Declaración de una constante
// Las constantes son declaradas con la palabra clave 'const'.
// Una vez que una constante es declarada y asignada, su valor no puede ser cambiado.

const PI = 3.14159;

// Intentar reasignar el valor a la constante resultará en un error.
// Descomenta la siguiente línea para ver el error.
// PI = 3.14; // Esto dará un error: "Uncaught TypeError: Assignment to constant variable."

console.log(PI); // Esto imprimirá: 3.14159

// Las constantes deben ser inicializadas en el momento de la declaración.
// Descomenta la siguiente línea para ver el error.
// const MY_CONST; // Esto dará un error: "Uncaught SyntaxError: Missing initializer in const declaration."
