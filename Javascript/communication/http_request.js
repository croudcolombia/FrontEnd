/**
 * Created by Familia Velez Saffon on 13/06/2015.
 */

var http = require('http');
var https = require('https');


var options={};
options.headers = {
    "content-type": "application/json"
}

var post_data ={};

function clear_options(){
    options={};
}

function add_header(name,value){
    options.headers[name]=value;
}

function add_option(name,value){
    options[name]=value;
}
function add_body(name,value){
    post_data[name]=value;
}
function set_host(host_value){
    add_option('host',host_value);
}


function normal_get() {
    set_host('127.0.0.1');
    add_option('method', 'GET');
    add_option('port', 8080);
    add_option('path', '/jobs');
}

function normal_post(){
    set_host('127.0.0.1');
    add_option('method', 'POST');
    add_option('port', 8080);
    add_option('path', '/jobs');

    add_body('id','189-87');
    //add_body('text', 'Jorge Velez Saffon');
    add_body('username', 'svelezsaffon@gmail.com');
    var tags=["food","Drinks","Testing"];
    add_body('tags',tags);
}


var on_end=function(total_request){
    console.log("---------RESPOND-------------");
    console.log(total_request);
    console.log("-----------------------------");
}


//normal_post();
normal_get();
var res=start_request(1,on_end);



//1 http and 2 https
function start_request(prot,onend){

    var protocol = (prot !== 1) ? https : http;

    var request = protocol.request(options, function (respond) {
        respond.setEncoding('utf-8');
    });

    var total_response={};
    total_response.data="";
    total_response.response_code=null;

    request.on('response',function(response){

        response.on('data', function (chunk) {
            total_response.data+=chunk;
        });

        response.on('end',function(){
            total_response.response_code=response.statusCode;
            clear_options();
            onend(total_response);
        });
    });

    request.on('error',function(error){
        total_response.data=error;
        total_response.response_code=500;
        clear_options();
        onend(total_response);
    });

    post_data=JSON.stringify(post_data);
    var data_length=post_data.length;
    add_header('content-length',data_length);

    if(data_length>0){
        request.write(post_data);
    }
    request.end();

}