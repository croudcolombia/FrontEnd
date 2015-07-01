/**
 * Created by santiago on 6/27/15.
 */




function get_job_categories(){

}

function remove_category(){

    var x = document.getElementById("categoriesselected");

    if(x.selectedIndex >= 0) {
        x.remove(x.selectedIndex);

        for(var i=0;i<x.length;i++){
            opt=x[i];
            if(opt.selected){
                x.remove(i);
            }
        }


    }


}

function add_category(){


    var categories=document.getElementById("categoriesadd");

    if(categories.selectedIndex >= 0) {

        var opt;
        var selectedgroup = document.getElementById("categoriesselected");
        for(var i=0;i<categories.length;i++){
            opt=categories[i];

            if(opt.selected){
                var option = document.createElement("option");

                option.text = opt.value;

                selectedgroup.add(option);
            }
        }

    }

}



function show_help(section){



    if(section==="email"){
        alert("ñalksjfñalskj")
    }else if(section==="telcel"){
        alert("Tel cel");
    }else if(section==="telfijo"){
        alert("Tel fijo");
    }
}


function get_available_cities(){



}

function on_submit_new_account(form){

    var kvpairs = {};



    for ( var i = 0; i < form.elements.length; i++ ) {
        var e = form.elements[i];
        kvpairs[e.name]=e.value;
        string+= e.value;
    }

    var matches=[];
    if(kvpairs.descripcion.length > 0) {
        var re = /(?:^|\W)#(\w+)(?!\w)/g, match;
        while (match = re.exec(kvpairs.text)) {
            matches.push(match[1]);
        }
    }


    kvpairs["categoriesselected"]=[];


    var categories = document.getElementById("categoriesselected");
    for(var cat=0;cat< categories.length;cat++){
        kvpairs["categoriesselected"].push(categories[cat].value);
    }


    kvpairs["city"]=[];
    var cities = document.getElementById("ciudad");
    for(var cittie=0;cittie< cities.length;cittie++){
        kvpairs["city"].push(cities[cittie].value);
    }


    string+=kvpairs["categoriesselected"];
    string+=kvpairs["city"];


    alert(string);

}
