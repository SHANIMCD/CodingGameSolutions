// Binary with 0 and 1 is good, but binary with only 0, or almost, is even better! 
// Originally, this is a concept designed by Chuck Norris to send so called unary messages.
// Write a program that takes an incoming message as input and displays as output the message encoded using Chuck Norris’ method.



function textToBin(text) {
  let length = text.length;
  let output = "";
  for (let i = 0;i < length; i++) {
    let bin = text.charCodeAt(i).toString(2);
    
    if( bin.length < 7 )
    {
        bin = "0" + bin;
    }
    
    output +=bin;
  } 
  return output;
}

let encode = {
    "0" : "00",
    "1" : "0"
}

let binaryText = textToBin(readline());
let current = binaryText[0];
let output = encode[current]+" "+"0"

for(let i = 1 ; i < binaryText.length ; i++)
{
    let nextBit = binaryText[i];
    output += ( nextBit != current ) ? " "+encode[nextBit]+" "+"0" : "0";
    current = nextBit;
}

print ( output );
