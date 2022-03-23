// // const x =[22,4,66,23,70,50,21]

// // console.log(x.sort((a,b)=>{
// //     return b-a

// // })
// // )

const myArray=[9,1,5,7,0,3]
// const myArray=[0,1,3,5,7,8,9]

// console.log(myArray)

// const myArray= [
//     {name: "peter", age : 22},
//     {name: "Ndidi", age : 24},
//     {name: "Nelson", age : 21},
//     {name: "cliton", age : 20},


// ]

// console.log(myArray.sort((a,b)=>{
//     return b.age - a.age

// })
// )

// const a = myArray;
// const n = a.length;

// for(i = 0; i < n - 1; i++){
//     for(j = 0; j < n -1; j++){
//         if(a[j] > a[j + 1]){
//             let swap = a[j];
//             a[j] = a[j + 1]
//             a[j + 1] = swap
//         }
//     }
// }
// console.log("This is Sorted:", a)

// const a = myArray;
// const n = a.length;

// for(i = 0; i < n-1; i++){
//     for(j = 0; j < n-1; j++){
//         if(a[j] > a[j + 1]){
//             let swap = a[j];
//             a[j] = a[j + 1]
//             a[j + 1] = swap
//         }
//     }
// }

// console.log('This is Sorted:', a)


const a = myArray
const n = a.length;

for(i = 0; i < n-1; i++){
    for(j = 0; j > n-1; j++){
        if (a[j] > a[j + 1]){
            let swap = a[j];
            a[j] = a[j + 1]
            a[j + 1] = swap
        }
    }
}

console.log("this is sorted", a)

// make time comparsim between the n-1 aand 1