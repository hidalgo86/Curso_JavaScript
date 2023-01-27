
// No está permitido usar comas sin valores que le sigan:

JSON.parse('{"nombre": "Natalia", "apellido": "Corea" }');

// Las propiedades deben ir entre dobles comillas:

//JSON.parse("{'nombre': 'Natalia', 'apellido': 'Corea'}");

//Agregar ceros delante de valores numéricos

JSON.parse('{"dia": "01", "mes": 6, "anno": 2021}');

//Estructuras que no cierran

JSON.parse('{"nombre": "Natalia", "apellido": "Corea"}');
