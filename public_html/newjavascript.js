/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var baseUrl = "http://api.login2explore.com:5577";
var stdDBName = "std-DB";
var imlPartUrl = "/api/iml";
var irlPartUrl = "/api/irl";
var StdRelationName = "StdData";
var ConnToken = "90936861|-31948784479254024|90932362";



function resetForm(){
    $('#stdId').val("");
    $('#stdName').val("");
    $('#stdEn').val("");
    $('#stnAd').val("");
    $('#stdB').val("");
    $('#stdId').prop("disabled", false);
    $('#save').prop("disabled", true);
    $('#change').prop("disabled", true);
    $('#reset').prop("disabled", true);
    $('#stdId').focus();
    
    
}
function saveData() {
    var jsonstrobj = validateData();
    if (jsonStrob == ""){
        return "";
    }

var putRequest = createPUTRequest(commToken, JsonStroby, stdEname);


JQuery.ajaxSetup({async: false});

var resjsonobj = executeCommandAtGiveBaseUrl(putRequest, JodbEaseURL, JobIM); 
JQuery.ajaxSetup ({async: true});

resetForm();
$('#stdId').focus();


function validateData(){
    var stdId,stdname,stdEn,stdAd,stdDb;
    stdId = $('#stdId'.val());
     stdName = $('#stdName'.val());
     stdEn = $('#stdEn'.val());
       stdAd = $('#stdAd'.val());
        stdDb = $('#stdDb'.val());
        deduct = $('#deduct').val();
        
        if(stdId == ''){
            alert('Student ID MISSING');
            $('#stdId').focus();
            return "";
        }
         
         if(stdName == ''){
                 alert('Student Name Missing');
         $('#stdName').focus();
         return"";}
         if(stdEn == ''){
                 alert('Student Enrol Missing');
         $('#stdEn').focus();
         return"";}
         if(stdAd == ''){
                 alert('Student Address Missing');
         $('#stdAd').focus();
         return"";}
         if(stdDb == ''){
                 alert('Student DOB Missing');
         $('#stdDb').focus();
         return"";}
         if(deduct == ''){
             alert('deduction missing');
             $("#deduct").focus();
             return '';
         
    
    

        var jsonstrobj = {
         id: stdId,
             name: stdName,
            dob: stdDb,
            Address: stdAd,
              Enrollment no: stdEn,
        deduction: deduct
        };
        return JSON.stringify(jsonstrobj);
    
    
}}

    
}