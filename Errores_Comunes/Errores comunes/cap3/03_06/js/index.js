
console.log("La fecha de hoy es: ", new Date());

//UNIX epoch
console.log(new Date(628021800000));

//////

console.log('%c Definiendo fechas con strings:', 'background: #222; color: #bada55');

//ISO 8601 Extended Format

console.log(new Date('December 17, 1995 03:24:00'));

console.log(new Date('2019-12-17T03:24:00'));

console.log("2014-12-01 - ", new Date('2014-12-01'));

console.log('12-01-2014 - ', new Date('12-01-2014'));

console.log('22-01-2014 - ', new Date('22-01-2014'));

console.log("Jul 8, 2005 - ", new Date("Jul 8, 2005"));

console.log("2005-07-08 - ", new Date("2005-07-08"));

console.log("Tue 10 Jul 2018 13:09:58 - ", new Date("Tue 10 Jul 2018 13:09:58"));

console.log("Tue 10 Jul 2018 13:09:58 GMT -06:00 - ", new Date("Tue 10 Jul 2018 13:09:58 GMT -06:00"));

//////

console.log('%c Definiendo fechas con parámetros en el constructor:', 'background: #222; color: #bada55');

let fecha = new Date(2019, 11, 22, 12, 24, 30, 0);
console.log("fecha: ", fecha, "offset: ", fecha.getTimezoneOffset());

