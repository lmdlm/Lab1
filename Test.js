function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
//count characters in the string
function count1(value) {
    console.log("Count no spaces");
    console.log("Value is: " + value);
}
var stringVal = "test 1";
var sumOfChar = stringVal.replace(/\s+/, "").length.toLocaleString();
;
count1(sumOfChar);
//count characters in the string - no spaces
function count2(value) {
    console.log("Count all");
    console.log("Value is: " + value);
}
var stringVal1 = "test 1";
var sumOfChar1 = (stringVal.length).toLocaleString();
count2(sumOfChar1);
function str_len_both(value, spaces) {
    //note ? for optional parameter,
    //so will default to false due to
    //code in the function, but I could
    //change from optional and provide
    //a default to the parameter by writing
    //the signature as
    //function str_len_both(value: string, spaces: boolean=false): number{
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("Function combined: String length with spaces and all is: " + str_len_both("test 1", false));
console.log("Function combined: String length with spaces not included in the count: " + str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: " + str_len_both("test 1"));
