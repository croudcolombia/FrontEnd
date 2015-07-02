/**
 * Created by santiago on 7/2/15.
 */


var percentage=100;

var html_bar='<div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="'+percentage+'" aria-valuemin="0" aria-valuemax="100" style="width: '+percentage+'%"> <span class="sr-only">'+percentage+'% Complete</span> </div> </div>';

function start_progress_bar(){

    change_inner_content(html_bar);

    return false;
}

function update_progress_barr(progress){
    var string='<div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="'+progress+'" aria-valuemin="0" aria-valuemax="100" style="width: '+progress+'%"> <span class="sr-only">'+progress+'% Complete</span> </div> </div>';
    change_inner_content(string);
}




function onEnd(response){
    console.log(response.response_code);
}

function onChunk(progress){
    update_progress_barr(progress);
}

function stupid_test_load(){

    start_progress_bar();

    return false;
}







