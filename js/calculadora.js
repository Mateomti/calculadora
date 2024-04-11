$(document).ready(function(){
    //console.log('hola si estoy funcionando')
    $('#suma').click(function(){
        var n1=$('#n1').val();
        var n2=$('#n2').val();
        var res=parseFloat(n1)+parseFloat(n2);
        $('#res').val(res);
    });
    $('#resta').click(function(){
        var n1=$('#n1').val();
        var n2=$('#n2').val();
        var res=parseFloat(n1)-parseFloat(n2);
        $('#res').val(res);
    });
    $('#mul').click(function(){
        var n1=$('#n1').val();
        var n2=$('#n2').val();
        var res=parseFloat(n1)*parseFloat(n2);
        $('#res').val(res);
    });
    $('#div').click(function(){
        var n1=$('#n1').val();
        var n2=$('#n2').val();
        var res=parseFloat(n1)/parseFloat(n2);
        if (n2 == 0){
            $('#res').val("No se puede dividir por 0.");
        }
        else{
            $('#res').val(res);
        }
    });
    $('#borrar').click(function(){
        $('#n1').val("");
        $('#n2').val("");
        $('#res').val("");
    });

    
});