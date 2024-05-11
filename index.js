//-------------1

// function findAvarage(myArr){
//     let sum=0;
//     let length=myArr.length;
//     for(let i=0;i<length;i++){
//         sum+=myArr[i];
//     }
//     let avarage=sum / length
//     return avarage
// }
// let myArr=[1,2,3,4,5];
// console.log(findAvarage(myArr));

//-----------2

// function reverseStr(inputStr){
//     let reverseStr='';
//     for (let i=inputStr.length-1;i>=0;i--){
//         reverseStr+=inputStr.charAt(i);

//     }
//     return reverseStr;

// }
// console.log(reverseStr("salam"));


//------------3

// function factorial(n){
//     if (n===0  || n===1){
//         return 1;
//     }
//     else{
//         let result=1;
//         for(let i=1;i<=n;i++){
//             result*=i;
//         }
//         return result;
//     }
// }
// console.log(factorial(5));

//--------------4

// function findLongStr(words){
//     let longestWord='';
//     for(let i=0;i<words.length;i++){
//         if (words[i].length>longestWord.length){
//             longestWord=words[i];
//         }
//     }
//     return longestWord;

// }
// let wArr=["apple","orange","strawberry"];
// console.log(findLongStr(wArr));

//--------------5 
// function sumDig(numb){
//     let sum=0;
//     while(numb>0){
//         sum+=numb%10;//остаток от деления на 10
//         numb=Math.floor(numb /10);

//     }
//     return sum;

// }
// console.log(sumDig(345));