function addition(value: string)

{
    console.log("Value is: " + value);
    }


    let firstVal: number = 42;
    let secondVal: number = 1;
    let sumOfVals: string = (firstVal + secondVal).toLocaleString();
    addition(sumOfVals);

//count characters in the string
    function count1(value: string)

{
    console.log("Count no spaces");
    console.log("Value is: " + value);
    }

    let stringVal: string = "test 1";
    let sumOfChar: string = stringVal.replace(/\s+/, "").length.toLocaleString();;
    count1(sumOfChar);

//count characters in the string - no spaces
    function count2(value: string)

{
    console.log("Count all");
    console.log("Value is: " + value);
    }

    let stringVal1: string = "test 1";
    let sumOfChar1: string = (stringVal.length).toLocaleString();
    count2(sumOfChar1);

    function str_len_both(value: string, spaces?: boolean): number{
        //note ? for optional parameter,
        //so will default to false due to
        //code in the function, but I could
        //change from optional and provide
        //a default to the parameter by writing
        //the signature as
//function str_len_both(value: string, spaces: boolean=false): number{
    let num: number;
    if(spaces){
    num = value.replace(/\s+/, "").length;
    }else{
    num = value.length;
    }
    return num;
    }
    console.log("Function combined: String length with spaces and all is: "+str_len_both("test 1",false));
    console.log("Function combined: String length with spaces not included in the count: "+str_len_both("test 1", true));
    console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: "+str_len_both("test 1"));
