/**
 * Created by Familia Velez Saffon on 10/06/2015.
 */


function change_inner_content(content){

    var fullcont="<div class='row'>";
        fullcont+=content;
        fullcont+="</div>";

    var iner_content=document.getElementById("show_content_space");
    iner_content.innerHTML=content;
}


function change_content(element,content,textorhtml){
    var elem=document.getElementById(element);

    if(textorhtml===true){
        elem.innerText=content;
    }else{
        elem.innerHTML=content;
    }
}


function display_news_wells(element){



    var news=display_news_form();

    change_inner_content(news);

    var refresh=false;

    return refresh;
}


function display_news(element){

    var news='';

    var limit=Math.random();
    limit=Math.ceil(limit*10);

    for(var i=0;i<4;i++){

        news+='<div class="panel panel-primary">';
        news+='<div class="panel-heading">';
        news+='<h3 class="panel-title">This is the post '+i+' </h3>';
        news+='</div>';
        news+='<div class="panel-body">';

                news+='<div class="row">';
                        news+='<table>';
                            news+='<tr>';
                                news+='<td><span class="label label-danger">Type 1</span></td>';
                                news+='<td><span class="label label-default">Type 2</span></td>';
                                news+='<td><span class="label label-primary">Type 3</span></td>';
                                news+='<td><span class="label label-success">Type 4</span></td>';
                            news+='</tr>';
                        news+='</table>';
                news+='</div>';
                //news+='This is the content '+i;
        news+='</div>';
        news+='</div>';
    }

    change_inner_content(news);

    var refresh=false;

    change_content("num_messages",15,true);

    return refresh;
}

function nav_bar_section_A(element){
    change_inner_content("This is a message fom section A");

    var refresh=false;

    return refresh;
}


function nav_bar_section_B(element){
    change_inner_content("This is a message fom section B");

    var refresh=false;

    return refresh;
}


function nav_bar_section_C(element){
    change_inner_content("This is a message fom section C");

    var refresh=false;

    return refresh;
}

function reload_image_home(){
    var reference="<img src='https://www.google.com.co/images/srpr/logo11w.png'/>";
    change_inner_content(reference);
}
