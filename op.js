function encode(input){
let arr = input.split("");
let arr2 = arr.map((ele,i)=>{
   return ele.charCodeAt().toString(2).padStart(8,0);
})
let str = arr2.join("");
let arr3 = str.split("");
let finalArr = [];
while (arr3.length != 0){
    let str2 = arr3.splice(0,6).join("")
    finalArr.push(str2);
}
let size = finalArr[finalArr.length-1].length;
if(finalArr[finalArr.length-1].length < 6){
    finalArr[finalArr.length-1] = finalArr[finalArr.length-1].padEnd(6,0);
}
let size2 = finalArr[finalArr.length-1].length;
let zeroCount = (size2 - size) / 2;
let arr4 = finalArr.map((ele)=>{
    return parseInt(ele,2)
})
//  console.log(zeroCount)
let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let result = arr4.map((ele)=>{
    return base64[ele];
})
let finalResult = result.join("");
while(zeroCount != 0){
    finalResult += "=";
    zeroCount--;
}
console.log(finalResult);
  //console.log(arr4);


}
 encode("HELLO");
