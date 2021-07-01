

$(document).ready(function () {




  $(document).on('input', function () {

    var nro1 = parseFloat($("#dato").val());
    var nro2 = parseFloat($("#dato2").val());


    let suma = 0
    let totalcuenta = 0
    if (!isNaN(nro1)){
      suma = nro1 * nro2;
      totalcuenta = suma + nro1;
    }

    $("#resultado").val(suma);
    $("#totalcuenta").val(totalcuenta);


  });





});

