function addTwoNumbers()
{
var a=document.getElementById("textbox1").value;
var b=document.getElementById("textbox2").value;
var c=new Number(a)+new Number(b);
document.getElementById("result").innerHTML=c;
}

function mulTwoNumbers()
{
var a=document.getElementById("textbox3").value;
var b=document.getElementById("textbox4").value;
var c=new Number(a)*new Number(b);
document.getElementById("result1").innerHTML=c;
}