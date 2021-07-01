$(document).ready(function()
{
$("#calcular").click(function () {

  var nro1 = parseFloat( $("#dato").val() );
  var nro2 = parseFloat( $("#dato2").val() );
  var suma = nro1 * nro2;     
  $("#resultado").val(suma);

  var totalcuenta= suma + nro1;

  $("#totalcuenta").val(totalcuenta);

});
});