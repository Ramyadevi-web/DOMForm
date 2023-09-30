function createLabel(tagName,attrName,attrValue,content){
var label = document.createElement(tagName);
label.setAttribute(attrName,attrValue);
label.innerText = content;
return label;
}

function brk(tagName){
var br = document.createElement(tagName);
return br;
}

function inputfield(tagName,attrName1,attrValue1,attrName2,attrValue2){
var input = document.createElement(tagName);
input.setAttribute(attrName1,attrValue1);
input.setAttribute(attrName2,attrValue2);
return input;
}

var firstname = createLabel("label","for","first","Enter Your First Name");
var firstInp = inputfield("input","type","text","id","first");
var br1 = brk("br");
var br6 = brk("br");

var middlename = createLabel("label","for","middle","Enter Your Middle Name");
var middleInp = inputfield("input","type","text","id","middle");
var br2 = brk("br");
var br7 = brk("br");

var lastname = createLabel("label","for","last","Enter Your Last Name");
var lastInp = inputfield("input","type","text","id","last");
var br3 = brk("br");
var br8 = brk("br");

var email = createLabel("label","for","email","Enter Your Email Id");
var emailInp = inputfield("input","type","text","id","email");
var br4 = brk("br");
var br9 = brk("br");

var pincode = createLabel("label","for","pin","Enter Your Area Pincode");
var pinInp = inputfield("input","type","text","id","pin");
var br5 = brk("br");
var br10 = brk("br");

var button = createLabel("button","type","button","Submit");
 
document.body.append(firstname,firstInp,br1,br6,middlename,middleInp,br2,br7,lastname,lastInp,br3,br8,email,emailInp,br4,br9,pincode,pinInp,br5,br10,button);