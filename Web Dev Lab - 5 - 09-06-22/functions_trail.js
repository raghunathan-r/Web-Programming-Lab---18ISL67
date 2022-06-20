// function to extract the date from the given string

/*

let input_date_string = prompt("Enter a string to extract the date : ");

extractDate(input_date_string);

function extractDate(input_string){

    RegExp = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/;

    let extractedDate = RegExp.exec(input_string);

    alert("Exteacted date is " + extractDate.toString());

}

*/

function extractDate(){

    let input_date_string = prompt("Enter a string to extract the date : ");

    RegExp = "/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/";

    let extracted_date = RegExp.exec(input_string);

    alert("Exteacted date is ");
    // extracted_date.toString()

}