// 1 masala n gacha bolgan toq sonlarni massivga yozish
// let n = 10
// let massiv = []
// for (let i = 1; i <= n * 2 ; i++ ) {
//   if (i % 2 != 0) {
//     massiv[i] = i
//     console.log(massiv[i])
//   }
// }



// 2 masala 2 sonni darajalarini chiqarish
// let n = 4
// let a = 2
// let massivs = []
// for (let i = 1; i <= n; i++) {
//   massivs[i] = i
//   massivs[i] *= a
//   console.log(massivs[i])
// }


// 3 masala n gacha arifmetic progressiya
// let n = 10
// let a = 1
// let d = 4
// let massiv = []
// for (let i = 1; i <= n ; i++) {
//   a += d
//   massiv[i] = a
//   console.log(massiv[i])
// }


// 4 masala  dastlabgi n sonni geometric progressiyasi chiqarish
// let n = 10
// let a = 1
// let d = 2
// let massiv = []
// for (let i = 1; i <= n ; i++) {
//   a *= d
//   massiv[i] = a
//   console.log(massiv[i])
// }

// 5 masala
// let n = 5;
// let a = 0;
// let b = 1;
// let c = 0;
// let newArray = [];

// for(let i = 1; i <= n; i++){
//   c = a + b;
//   a = b;
//   b = c;
//   newArray[newArray.length] = c;
// }

// console.log(newArray);


// 6 masala
// let n = 6
// let a = 2
// let b = 3
// let massiv = []
// for(let i = 0; i <= n ; i++) {
//   a += i
//   massiv[i] = a
//   console.log(massiv[i])
// }


// 7 masala
// let massiv = [1,2,4,5,7,3]
// for (let i = massiv.length ; i >= 1; i--) {
//   console.log(massiv[i])
// }


// 8 masala togri
// let sum = 0
// let massiv = [2,9,17,4,5,6,7,8,9]
// for (let i = 0 ; i < massiv.length; i++) {
//   if (massiv[i] % 2 != 0) {
//     sum++
//     console.log(massiv[i])
//   }
// }
// console.log(sum)



// 9 masala togri
// let sum = 0
// let massiv = [2,9,17,4,5,6,7,8,9]
// for (let i = massiv.length-1 ; i < massiv.length; i--) {
//   if (massiv[i] % 2 == 0) {
//     sum++
//     console.log(massiv[i])
//   }
// }
// console.log(sum)



// 10 masala
// let sum = 0
// let massiv = [2,9,17,4,5,6,7,8,9]
// for (let i = 0 ; i < massiv.length; i++) {
//   if (massiv[i] % 2 != 0) {
//     sum++
//     console.log(massiv[i])
//   }
// }
// let sum1 = 0
// for (let i = massiv.length-1 ; i < massiv.length; i--) {
//   if (massiv[i] % 2 == 0) {
//     sum++
//     console.log(massiv[i])
//   }
// }
// console.log(sum)
// console.log(sum1)



// 18 masala togri
// let massiv = [3,5,21,7,9,11]
// for (let i = massiv[0] ; i < massiv.length; i++) {
//   if (massiv.length-1 > i) {
//     console.log(i)
//     break
//   }
//   else {
//     console.log("bunaqa raqam yoq");
//   }
// }


// 19 masala ishlamadi
// let massiv = [3,5,21,9,7,2,10,11]
// for (let i = massiv[0] ; i < massiv.length; i++) {
//   if (massiv[massiv.length-1] > i && massiv[0] < i) {
//     // console.log(massiv[massiv.length-1] )
//     console.log(i)
//     break
//   }
// }


// 20 masala togri
// let sum = 0
// let massiv = [1,2,10,4,5,6]
// let k = 2
// let l = 5
// for (let i = k; i < l ;i++) {
//   sum += i
// }
// console.log(sum)



// 21 masala togri orta arifmtic
// let j = 0
// let c = 0
// let massiv = [1,2,10,4,5,6]
// let k = 2
// let l = 5
// for (let i = k; i < l ;i++) {
//  j += massiv[i]
//  c++
// }
// console.log(j / c)


// 22 masala togri
// let sum = 0
// let sum1 = 0
// let massiv = [1,2,3,4,5,6,7]
// let k = 2
// let l = 4
// for (let i = massiv[0]; i < k ;i++) {
//   sum += i
// }
// for (let j = l; j < massiv[massiv.length-1] ; j++) {
//   sum1 += j
// }
// console.log(sum + sum1 )



// 23 masala bir korgin
// let sum1 = 0
// let sum2 = 0
// let j = 0
// let key = 0
// let c = 0
// let ci = 0
// let massiv = [1,2,10,4,5,6]
// let k = 2
// let l = 5
// let bir
// let ikki
// for (let i = massiv[0]; i < k ;i++) {
//  j += massiv[i]
//  c++
// }
// bir = j / c

// for (let g = l; g <  massiv[massiv.length-1] ;g++) {
//   key += massiv[g]
//   ci++
//  }
// ikki = key / ci

// console.log(bir + ikki)



// 24 masala chiqmadi
// let massiv = [2, 4, 6]
// let a = massiv.length - 
// for (let i = 0; i < massiv.length; i++) {
//   // l =  k + i
//   if (massiv[i] == i) {
//     console.log(1)
//   }
//   else{
//     console.log(0)
//   }
// }



// 26 masala juft indexni aniqlaydigan dastur
// let array = [1,2,3,7,5,9]
// // for (let i = 0; i < array.length; i++) {
// //   if (array[i-1] % 2 == 0  == array[i-2] % 2 != 0) {

// //   }
// // }
// console.log();
// for (let j =1  ; j < array.length ; j++) {
//   if (j % 2 == 0 ) {
//     console.log(j)
//   }
// }






// 51 masala
// let a = [1,2,3]
// let b = [4,5,6]
// b = a
// console.log(b)
// a = b
// // b = a
// console.log(a)



// 52 masala togri
// let a = [2,3,4,12,6,7,8,32]
// let b = []
// for (let i = 0; i < a.length ; i++) {
//   if (a[i] < 5) {
//     b[i] = 2 * a[i]
//   }
//   else {
//     b[i] = a[i] / 2
//   }
// }
// console.log(b);


// // 53 masala
// let a = [2,4,7,12]
// console.log(Math.max(a))
// for (let i = 0; i < a.length; i ++) {
//   console.log(Math.max.apply(a[i]))
// }





//massivdagi juft qatorlarni ekranga chiqarish
// let n = [2,4,5,3,9,22,7]
// let a = []
// let c
// for (let i = 0; i < n.length; i++) {
//   if (i % 2 == 0){
//     console.log(n[i])
//   }
// }

//juft sonlarni indexlarini raqamini chiqaradi
// let n = [2,4,5,3,9,22,7]
// let a = []
// let c
// for (let i = 0; i < n.length; i++) {
//   if (n[i] % 2 == 0){
//     // a[i] = i
//     // c++
//     console.log(i)
//   }
// }


// 54 masala togri
// let n = [2,4,5,3,9,22,7]
// let a = []
// let c = 0
// for (let i = 0; i < n.length; i++) {
//   if (n[i] % 2 == 0){
//     a[i] = n[i]
//     c++
//     console.log(a[i])
//   }
// }
// console.log(`${c} element mavjud`);


// 55 masala togri
// let n = [2,4,5,3,9,22,7]
// let a = []
// let c = 0
// for (let i = 0; i < n.length; i++) {
//   if (n[i] % 2 != 0){
//     a[i] = n[i]
//     c++
//     console.log(a[i])
//   }
// }
// console.log(`${c} element mavjud`);



// 56 masala togri
// let n = [2,4,5,3,9,22,7,12]
// let a = []
// let c = 0
// for (let i = 0; i < n.length; i++) {
//   if (n[i] % 3 == 0){
//     a[i] = n[i]
//     c++
//     console.log(a[i])
//   }
// }
// console.log(`${c} element mavjud`);


// 57 masala togri ?
// let n = [2,4,5,3,9,22,7]
// let a = []
// let c = 0
// for (let i = 0; i < n.length; i++) {
//   if (n[i] % 2 == 0){
//     a[i] = n[i]
//     c++
//     console.log(a[i])
//   }
// }
// for (let j = 0; j < n.length; j++) {
//   if (n[j] % 2 != 0){
//     a[j] = n[j]
//     c++
//     console.log(a[j])
//   }
// }
// console.log(`${c} element mavjud`);



// 58 masala togri
// let a = [2,4,7,8,54,5]
// sum = 0
// let b = []
// for (let i = 0; i < a.length; i++) {
//   sum += a[i]
//   b[i] = sum
// }
// console.log(b[b.length-1]);


// 59 masala
// let a = [2,4,7,8,54,5]
// sum = 0
// let b = []
// for (let i = 0; i < a.length; i++) {
//   sum += a[i]
//   b[i] = sum / i
// }
// console.log(b[b.length-1]);


// 60 masala
// let a = [2,4,7,8,54,5]
// sum = 0
// let b = []
// for (let i = 0; i < a.length; i++) {
//   sum += a[i]
//   b[i] = sum
// }
// console.log(b[b.length-1]);



























