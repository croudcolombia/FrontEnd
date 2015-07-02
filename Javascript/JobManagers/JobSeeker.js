/**
 * Created by santiago on 6/22/15.
 */


function get_related_news(){
    var news=[];

    news.push( {
        title:"Title news 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["photos","photography"],
        date:"08/24/2015",
        tel:3224966850,
        payments: [1,2],
        user:"svelezsaffon@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg"
    });

    news.push( {
        title:"Title news 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["Wedding Planner","Weddig","Events"],
        date:"08/24/2015",
        tel:3143567248,
        payments: [1],
        user:"cristina.toledo@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg"
    });


    news.push( {
        title:"Title news 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["Wedding Planner","Weddig","Events"],
        date:"08/24/2015",
        tel:3187122729,
        payments: [1,2],
        user:"andresvelezsaffon@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg"
    });

    news.push( {
        title:"Title news 4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["handyman","fix","house","pipe"],
        date:"08/24/2015",
        tel:3182063118,
        payments: [2],
        user:"alvarovelezu@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg"
    });

    news.push( {
        title:"Title news 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["handyman","fix","house","pipe"],
        date:"08/24/2015",
        payments: [2,1],
        tel:3182063118,
        user:"alvarovelezu@gmail.com",
        user_img:"http://www.anfocal.ie/wp-content/uploads/2013/02/1A-Main-photo-facebook-blank-face-blank-570x427.jpeg"
    });

    return news;
}




function display_news_form(){


    var newsstr='';

    var news=get_related_news();


    for(var neu in news){

        newsstr+='<div class="panel panel-default">';

            newsstr+='<div class="panel-heading">';

            newsstr+='<table>';
                newsstr+='<tr>';
                    newsstr+='<td><img height="60" width="60" src="'+news[neu].user_img+'" alt="140x140" class="img-thumbnail"></td>';
                    newsstr+='<td><h3 class="panel-title">'+news[neu].title+'</h3></td>';
                newsstr+='</tr>';
            newsstr+='</table>';

            newsstr+='</div>';

            newsstr+='<div class="panel-body">';

                newsstr+='<div class="form-group">';
                    newsstr+='<label for="inputtitulo">Descripcion</label>';

                        newsstr+='<div align="justify">';
                            newsstr+='<p>'+news[neu].description+'</p>';
                        newsstr+='</div>';

                newsstr+='</div>';

                newsstr+='<div class="form-group">';
                    newsstr+='<label for="inputtitulo">Tags</label>';
                    newsstr+='<p/>';

                    newsstr+='<table> <tr>';

                    for(var tag in news[neu].tags){
                        newsstr+='<td><span class="label label-primary">'+news[neu].tags[tag]+' </span></td>';
                    }
                    newsstr+='</tr></table>';
                newsstr+='</div>';


            newsstr+='<div class="form-group">';
            newsstr+='<label for="inputtitulo">Formas de pago</label>';
            newsstr+='<p/>';
                newsstr+='<table> ';

                    for(var pay in news[neu].payments){

                        if(news[neu].payments[pay]==1) {
                                newsstr+='<tr><td><span class="glyphicon glyphicon-usd" aria-hidden="true"/>Efectivo </td></tr>';
                            }else if(news[neu].payments[pay]==2){
                                newsstr+='<tr><td><span class="glyphicon glyphicon-credit-card" aria-hidden="true"/>Tarjeta </td></tr>';
                        }
                    }
                newsstr+='</table>';
            newsstr+='</div>';


            newsstr+='<div class="form-group">';
                    newsstr+='<p/>';
                    newsstr+='<table align="right"> <tr>';

                    newsstr+='<td><button type="button" onclick="return display_telephone('+news[neu].tel+');" class="btn btn-default" "><i class="glyphicon glyphicon-earphone"></i></button></td>';
                    newsstr+='<td><button type="button"  class="btn btn-default" "><i class="glyphicon glyphicon-user"></i></button></td>';
                    newsstr+='<td><button type="button" class="btn btn-default" data-toggle="modal" data-target="#exampleModal" data-titlem="'+news[neu].title+'" data-emailm="'+news[neu].user+'"><i class="glyphicon glyphicon-envelope"></i></button></td>';

                    newsstr+='</tr></table>';
                newsstr+='</div>';

            newsstr+='</div>';

        newsstr+='</div>';
    }

    return newsstr;

}




function display_telephone(tel){
    swal("Telefono", tel);
    return false;
}


function display_profile(profile){
    console.log(profile);
    return false;
}