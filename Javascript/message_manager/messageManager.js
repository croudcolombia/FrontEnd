/**
 * Created by santiago on 6/22/15.
 */


function download_all_messages(){

    var messages=[];

    messages.push({
       from:"cristinatoledog@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg",
       title:"Message 1",
       message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
       date:"03/15/2015"
    });

    messages.push({
        from:"cristinatoledog@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg",
        title:"Message 2",
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        date:"01/20/2015"
    });


    messages.push({
        from:"alvarovelezu@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg",
        title:"Message 3",
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        date:"08/19/2013"
    });


    return messages;

}



function get_all_messages(){
    var newsstr='';

    var news=download_all_messages();


    for(var neu in news){

        newsstr+='<div class="panel panel-default">';

            newsstr+='<div class="panel-heading">';

                newsstr+='<table>';
                    newsstr+='<tr>';
                        newsstr+='<td><img height="60" width="60" src="'+news[neu].user_img+'" alt="140x140" class="img-thumbnail"></td>';

                    newsstr+='</tr>';
                newsstr+='</table>';

            newsstr+='</div>';

            newsstr+='<div class="panel-body">';


            newsstr+='<div class="input-group">';
                newsstr+='<label for="inputtitulo">'+news[neu].title+'</label>';
                newsstr+='<div align="justify">';
                    newsstr+='<p>'+news[neu].message+'</p>';
                newsstr+='</div>';
            newsstr+='</div>';

            newsstr+='<p id="add_respose'+neu+'"></p>';

            newsstr+='<form onsubmit="return send_response(this)">';

                        newsstr+='<div class="form-group">';
                            newsstr+='<textarea style="overflow:auto;resize:none" type="text" required="true" name="msg_resp" class="form-control" id="descripcion" ></textarea>';
                        newsstr+='</div>';

                        newsstr+='<div align="right">';
                            newsstr+='<button type="submit"  class="btn btn-primary">Responder</button>';
                        newsstr+='</div>';
                        newsstr+='<input type="hidden" name="id_change" value="add_respose'+neu+'" />';

            newsstr+='</form>';

        newsstr+='</div>';
        newsstr+='</div>';
    }


    change_inner_content(newsstr);

    return false;
}



function send_response(form){
    var kvpairs = {};

    for ( var i = 0; i < form.elements.length; i++ ) {
        var e = form.elements[i];
        kvpairs[e.name]=e.value;
    }

    change_content(kvpairs['id_change'],kvpairs['msg_resp'],true);

    return false;
}

function send_message(form){

    swal("Sending message");

    return false;
}
