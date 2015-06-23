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
        payments: [1,2],
        user:"svelezsaffon@gmail.com"
    });

    news.push( {
        title:"Title news 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["Wedding Planner","Weddig","Events"],
        date:"08/24/2015",
        payments: [1],
        user:"cristina.toledo@gmail.com"
    });


    news.push( {
        title:"Title news 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["Wedding Planner","Weddig","Events"],
        date:"08/24/2015",
        payments: [1,2],
        user:"andresvelezsaffon@gmail.com"
    });

    news.push( {
        title:"Title news 4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
        tags:["handyman","fix","house","pipe"],
        date:"08/24/2015",
        payments: [2],
        user:"alvarovelezu@gmail.com"
    });

    return news;
}




function display_news_form(){


    var newsstr='';

    var news=get_related_news();


    for(var neu in news){

        newsstr+='<div class="panel panel-default">';

            newsstr+='<div class="panel-heading">';
                newsstr+='<h3 class="panel-title">'+news[neu].title+'</h3>';
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
                newsstr+='<table> <tr>';
                    for(var pay in news[neu].payments){

                        if(news[neu].payments[pay]==1) {
                                newsstr+='<td><span class="glyphicon glyphicon-usd" aria-hidden="true"/> Efectivo</td>';
                            }else if(news[neu].payments[pay]==2){
                                newsstr+='<td><span class="glyphicon glyphicon-credit-card" aria-hidden="true"/> Tarjeta</td>';
                        }
                    }
                newsstr+='</tr></table>';
            newsstr+='</div>';

            newsstr+='</div>';

        newsstr+='</div>';
    }







    return newsstr;

}

