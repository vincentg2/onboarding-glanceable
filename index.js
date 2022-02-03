let arrayReviews = [10, 35, 34, 20, 8, 50];
let arrayDates = ['01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '05/01/2021', '06/01/2021'];

// console.log(arrayReviews) // [34, 20, 8, 50]



// 1) code a function that sort arrayReviews in ascending order
// const f1 = (arg) => {
//   return arg.sort(function (a, b) {
//     return a - b;
//   });
// }
// console.log('ascending order:', f1(arrayReviews));

// 2) code a function that filter arrayReviews to have element above 30 only

const f2 = (arg) => {
	return arg.filter((el) => el > 30)
}
console.log('above 30 only:', f2(arrayReviews));

// 3) code a function with reduce that makes the sum of all element in arrayReviews

const f3 = (arg) => {
	return arg.reduce((a,b) => a + b)
}
console.log('sum of all element:', f3(arrayReviews));

// 4) create a function that sum only array element above 30 in arrayReviews (result should be 35 + 34 + 50 = 119)

const f4 = (arg) => {
	return arg.filter((el) => el > 30).reduce((a,b) => a + b)
}
console.log('sum only above 30:', f4(arrayReviews));

// 5) replace 20 by 55 in array Reviews to get [10, 35, 34, 55, 8, 50]

// sans fonction

// arrayReviews.map(el => 
// 	el === 20 ? 55 : el
// )

// avec fonction
const f5 = (arg) => {
	return arg.map(el => 
		el === 20 ? 55 : el
	)
}
console.log('replace 20 by 55 :', f5(arrayReviews));

// 6) add 78 and 87 to arrayReviews without mutating it (use spread operator), to get [10, 35, 34, 20, 8, 50, 78; 87]

// sans fonction
// const newArray = [...arrayReviews, 78, 87];

// avec fonction
const f6 = (arg) => {
	return [...arg,78, 87]
}
console.log('add 78 and 87:',f6(arrayReviews));


// 7) destructuring and rest: how could you get [34, 20, 8, 50], the last 4 elements of arrayReviews, in a single line of code ? 

// func
const f7 = (arg) => {
	const [,b, ...rest] = [...arg];
	return rest
}
console.log(f7(arrayReviews));

// rest
const [,b, ...rest] = [...arrayReviews];
console.log(rest) 

// slice ?
console.log(arrayReviews.slice(-4)) 