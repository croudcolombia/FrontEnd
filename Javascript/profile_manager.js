/**
 * Created by Familia Velez Saffon on 12/06/2015.
 */



function get_profile_info(){
    var user={
        name:"Santiago Velez Saffon",
        email:"svelezsafffon@gmail.com",
        cel:"3224966850",
        fijo:"6003204",
        pais:"Colombia",
        ciudaded:["Medellin","Manizales","Pereira"],
        categorias:["Technologia","Paginas Web","IT Consulting"],
        pal_clave:["javascrip","spring","html"],
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        ofertas:{
            title:"Title news 3",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
            tags:["Wedding Planner","Weddig","Events"],
            date:"08/24/2015",
            payments: [1,2]
        }

    };


    return user;
}


function create_profile_html(){

    var user=get_profile_info();

    var form="";
    var aux="";
    form+='<div class="well">';

    form+='<form onsubmit="on_submit_new_account(this)">';


    form+='<div class="form-group">';
        form+='<label class="control-label" for="nombre">Nombre</label>';
        form+='<div class="input-group" >';
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>';
            form+='<input type="text" name="nombre" required="true" class="form-control" id="nombre" placeholder="Cuentanos tu nombre">';
            aux="nombre";
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-pencil" onmousedown="disable_enable_element(\''+aux+'\');"></i></span>';
        form+='</div>';
    form+='</div>';


    form+='<div class="form-group">';
        form+='<label class="control-label" for="email">Email</label>';
        form+='<div class="input-group" >';
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>';
            form+='<input type="email" name="email" required="true" class="form-control"  id="email" placeholder="Un correo electronico al que te puedan contactar">';
            aux="email";
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-pencil" ></i></span>';
        form+='</div>';
    form+='</div>';

    form+='<div class="form-group">';
        form+='<label class="control-label" for="tel">Telefono Celular</label>';
        form+='<div class="input-group" >';
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></span>';
            form+='<input type="tel" name="telcel" required="true" class="form-control" id="tel" placeholder="Un numero telefonico al que te puedan contactar">';
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>';
        form+='</div>';
    form+='</div>';

    form+='<div class="form-group">';
        form+='<label class="control-label" for="tel2">Telefono Fijo</label>';
        form+='<div class="input-group" >';
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-phone-alt"></i></span>';
            form+='<input type="tel" name="telfijo"  class="form-control" id="tel2" placeholder="Un numero telefonico alterno al que te puedan contactar">';
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>';
        form+='</div>';
    form+='</div>';


    form+='<div class="form-group">';
        form+='<label class="control-label" >Ciudades</label>';
        form+='<table>';
            form+='<tr>';
                for(var city in user.ciudaded){
                    form+='<td><span class="label label-danger">'+user.ciudaded[city]+'</span></td>';
                }
            form+='</tr>';
        form+='</table>';
    form+='</div>';






    form+='<div class="form-group">';
        form+='<label class="control-label" for="descripcion">Descripcion</label>';
        form+='<div class="input-group" >';
            form+='<span class="input-group-addon"><i class="glyphicon glyphicon-star"></i></span>';
            form+='<textarea type="text" name="descripcion" required="true" class="form-control" id="descripcion" >'+user.description+'</textarea>';
        form+='</div>';
    form+='</div>';


    form+='<button type="submit" class="btn btn-primary">';
        form+='Crear';
    form+='</button>';

    form+='</form>';
form+='</div>';



    return form;
}


function display_my_profile(){
    change_inner_content(create_profile_html());

    return false;
}


function disable_enable_element(element){
    var change=document.getElementById(element);
    change.disabled=!change.disabled;
}
