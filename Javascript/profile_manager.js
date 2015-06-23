/**
 * Created by Familia Velez Saffon on 12/06/2015.
 */



function try_external(text){
    alert(text);
}

function load_professsions(){
    var prof=new Object();


    prof.central=[];

    var cat={
        name:"Clases",
        types:["Matematicas","Fotografia"]
    }

    prof.central.push(cat);

    var cat1={
        name:"Fitness",
        types:["yoga","Entrenador Personal"]
    }
    prof.central.push(cat1);

    var cat2={
        name:"Bodas",
        types:["Planeador de bodas","Arreglos"]
    }
    prof.central.push(cat2);


    var cat2={
        name:"Eventos",
        types:["Decorador","Arreglos"]
    }
    prof.central.push(cat2);

    return prof;
}



function show_alert(text){
    alert(text);
}


function create_profile_html(){
    var form='';

form+='<form>';

    form+='<div class="form-group">';
        form+='<label for="exampleInputEmail1">Direccion de Correo</label>';
        form+='<p  class="form-control-static" id="exampleInputEmail1" >svelezsaffon@gmail.com</p>';
    form+='</div>';


    form+='<div class="form-group">';

    form+='</div>';

    form+='<div class="form-group">';
        form+='<table class="table table-hover">';

        var prof=load_professsions();

        form+='<tr>';
        for(var cat in prof.central){
            form+='<th>'+prof.central[cat].name+'</th>';
        }
        form+='</tr>';

        form+='</table>';
    form+='</div>';


        form+='<button type="submit"  class="btn btn-default">Submit</button>';

    form+='</form>';

    return form;
}


function display_profile(){
    change_inner_content(create_profile_html());

    return false;
}
