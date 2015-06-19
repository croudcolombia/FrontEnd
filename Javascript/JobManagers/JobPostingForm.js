/**
 * Created by Familia Velez Saffon on 16/06/2015.
 */

function create_form_string(){
    var form='<div class="well">';

    form+='<form onsubmit="on_submit(this)">';

        form+='<div class="form-group">';
            form+='<label for="idinput">Id</label>';
            form+='<input  name="id" required="true"  type="text" class="form-control" id="idinput" >';
        form+='</div>';

    form+='<div class="form-group">';
            form+='<label for="inputtitulo">Titulo</label>';
            form+='<input  name="titulo" required="true"  type="text" class="form-control" placeholder="Titulo de tu trabajo" id="inputtitulo" >';
        form+='</div>';

        form+='<div class="form-group">';
            form+='<label for="textInput">Descripcion</label>';
            form+='<textarea name="text" required="true" type="text" class="form-control" id="textInput" placeholder="Cuentale al mundo el trabjo que quieres ofrecer!!"></textarea>';
        form+='</div>';

        form+='<div class="form-group">';
            form+='<label for="inputUsername">username</label>';
            form+='<input name="username" required="true" type="text" class="form-control" id="inputUsername" placeholder="Email">';
        form+='</div>';

        form+='<div class="form-group">';
            form+='<label for="inputFechaven">Fecha vencimiento</label>';
            form+='<input name="fechavenci"  type="date" class="form-control" id="inputFechaven" placeholder="Email">';
        form+='</div>';

        form+='<button type="submit"  class="btn btn-primary">Publicar</button>';

    form+='</form></div>';

    return form;
}


function create_job_post(object){
    var result=false;
    change_inner_content(create_form_string());
    return result;
}


function on_submit(form){
    var kvpairs = {};

    for ( var i = 0; i < form.elements.length; i++ ) {
        var e = form.elements[i];
        kvpairs[e.name]=e.value;
    }

    if(kvpairs.text.length > 0) {
        var re = /(?:^|\W)#(\w+)(?!\w)/g, match, matches = [];
        while (match = re.exec(kvpairs.text)) {
            matches.push(match[1]);
        }
    }


    alert(kvpairs.id +" "+kvpairs.fechavenci);


    //alert(matches);
}