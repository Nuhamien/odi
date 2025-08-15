// // function sumsTripledEvens(array){
// //     let evens=array.filter(num=>num%2===0);
// //     let tripledEvens=evens.map(num=>num*3);
// //     let sumOfTripledEvens=tripledEvens.reduce((total, current)=>{
// //         return total+current;
// //     })
// //     return sumOfTripledEvens;
// // }
// // console.log(sumsTripledEvens([1,2,3,4,5]))

// // function camelize(word){
// //     let arr=word.split("-");
// //    let camel=arr.map((words,index)=>index===0 ? words : words[0].toUpperCase()+words.slice(1));
// //    let camelized=camel.join("");
// //    return camelized;
// // }
// // console.log(camelize("back-bone-is-here"));


// // let arr = [5, 3, 8, 1];

// // let filtered = filterRange(arr, 1, 4);

// // console.log( filtered ); // 3,1 (matching values)

// // console.log( arr ); // 5,3,8,1 (not modified)
// // function filterRange(arr,a,b){
// //    let news= arr.filter(nums=>(nums>=a&&nums<=b));
// //     return news;
// // }

// // let array = [5, 3, 8, 1];

// // console.log(filterRangeInPlace(array, 1, 4)); // removed the numbers except from 1 to 4

// // console.log( array ); // [3, 1]

// // function filterRangeInPlace(array,a,b){
// //    let newer= array.filter(item=>(item>=a&&item<=b));
// //    return newer;
// // }

// // let arrays = [5, 2, 1, -10, 8];

// // function comparer(a,b){
// //     if(a<b) return 1;
// //     if(a===b) return 0;
// //     if(a>b) return -1;
// // }
// // arrays.sort(comparer)
// // console.log( arrays); // 8, 5, 2, 1, -10

// // let ar = [1, 2, 3];

// // console.log(shuffle(ar));
// // // arr = [3, 2, 1]

// // console.log(shuffle(ar));
// // // arr = [2, 1, 3]

// // console.log(shuffle(ar));
// // // arr = [3, 1, 2]
// // // ...
// // console.log(shuffle(ar));
// // // arr = [3, 1, 2]
// // function shuffle(ar){
// //   return ar.sort(()=>Math.random()-0.5);
// // }

// // function unique(arr) {
// // let result =[];

// // for(str of arr){
// //     if(!result.includes(str)){
// //         result.push(str);
        
// //     }
// // }
// // return result;
// // }

// // let strings = ["Hare", "Krishna", "Hare", "Krishna",
// //   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// // ];

// // console.log( unique(strings) ); // Hare, Krishna, :-O

// // inventors.filter(num=>num.year>=1500&&num.year<=1600);

// // inventors.sort((a,b)=>a.year>b.year?1:-1)

// const container =document.querySelector("#container")
// const paragraph=document.createElement("p");
// paragraph.textContent="Hey I'm red.";
// paragraph.style.color="red";
// container.appendChild(paragraph);
// const hthree=document.createElement("h3");
// hthree.textContent="Hey I'm a blue h3";
// hthree.style.color="blue";

// container.appendChild(hthree);

// const div=document.createElement("div");
// div.setAttribute("style" ,"border:1px black solid; background-color:pink;");
// const h1=document.createElement("h1");
// h1.textContent="hey I'm h1";
// div.appendChild(h1);
// const p=document.createElement("p");
// p.textContent="me too";
// div.appendChild(p);
// container.appendChild(div);

// const btn =document.querySelector("#btn");
// btn.addEventListener("click",function(e){
//    e.target.style.background="blue";
// });

// function printer(){
//     alert("yay u did it");
// }

// const buttons=document.querySelectorAll("#btn");
 
// buttons.forEach((button)=>{
//     button.addEventListener("click", ()=>{
//         alert(button.id)
//     });
// });
   

