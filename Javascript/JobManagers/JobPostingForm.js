/**
 * Created by Familia Velez Saffon on 16/06/2015.
 */

function create_job_form_string(){

    var form='<div class="well">';

    form+='<h1> <span class="glyphicon glyphicon-bullhorn" aria-hidden="true"/>  Publicar nueva oferta</h1>';
    form+='</div>';

    form+='<div class="well">';


    form+='<form onsubmit="on_submit(this)">';


        form+='<div class="form-group">';
            form+='<label for="inputtitulo">Titulo</label>';

            form+='<div class="input-group" >';
                form+='<span class="input-group-addon"><i class="glyphicon glyphicon-screenshot"></i></span>';
                form+='<input  name="titulo" required="true"  type="text" class="form-control" placeholder="Titulo de tu trabajo" id="inputtitulo" >';
            form+='</div>';

        form+='</div>';


        form+='<div class="form-group">';
            form+='<label for="textInput">Descripcion</label>';
            form+='<div class="input-group" >';
                form+='<span class="input-group-addon"><i class="glyphicon glyphicon-star"></i></span>';
                form+='<textarea name="text" required="true" type="text" class="form-control" id="textInput" placeholder="Cuentale al mundo el trabjo que quieres ofrecer!!"></textarea>';
            form+='</div>';

        form+='</div>';

        form+='<div class="form-group">';
            form+='<label for="inputFechaven">Fecha vencimiento</label>';
            form+='<div class="input-group" >';
                form+='<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>';
                form+='<input name="fechavenci"  type="date" class="form-control" id="inputFechaven" placeholder="Fecha vencimiento">';
            form+='</div>';
        form+='</div>';


            form+='<label for="inputFechaven">¿Como pueden tus clientes pagar?</label>';

            form+='<div class="checkbox">';

                form+='<label class="checkbox-inline">';
                    form+='<input type="checkbox" id="checkefectivo" value="efectivo"> <span class="glyphicon glyphicon-usd" aria-hidden="true"/> Efectivo';
                form+='</label>';

                form+='<label class="checkbox-inline">';
                    form+='<input type="checkbox" id="checkdebito" value="tarjeta"> <span class="glyphicon glyphicon-credit-card" aria-hidden="true"/> Tarjeta';
                form+='</label>';

            form+='</div>';

        form+='<button type="submit"  class="btn btn-primary">';
            form+='<span class="glyphicon glyphicon-upload" aria-hidden="true"> Publicar</span>';
            form+='</button>';

    form+='</form></div>';





    return form;
}


function create_job_post(object){
    var result=false;
    change_inner_content(create_job_form_string());
    return result;
}


function on_submit(form){
    var kvpairs = {};

    var string="";

    for ( var i = 0; i < form.elements.length; i++ ) {
        var e = form.elements[i];
        kvpairs[e.name]=e.value;
        string+= e.value;
    }

    var matches=[];
    if(kvpairs.text.length > 0) {
        var re = /(?:^|\W)#(\w+)(?!\w)/g, match;
        while (match = re.exec(kvpairs.text)) {
            matches.push(match[1]);
        }
    }


    for(var field in kvpairs){
        string+=kvpairs[field];
    }


    alert(string);
}