let arrayReviews = [10, 35, 34, 20, 8, 50];
// let arrayDates = ['01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '05/01/2021', '06/01/2021'];

// console.log(arrayReviews) // [34, 20, 8, 50]


console.log("exo 1) \n")

// 1) code a function that sort arrayReviews in ascending order

const f1 = (arg) => {
  return arg.sort(function (a, b) {
    return a - b;
  });
}
console.log('ascending order:', f1(arrayReviews) );







console.log("exo 2) \n")
// 2) code a function that filter arrayReviews to have element above 30 only

const f2 = (arg) => {
	return arg.filter((el) => el > 30)
}
console.log('above 30 only:', f2(arrayReviews));








console.log("exo 3) \n")
// 3) code a function with reduce that makes the sum of all element in arrayReviews

const f3 = (arg) => {
	return arg.reduce((a,b) => a + b)
}
console.log('sum of all element:', f3(arrayReviews));







console.log("exo 4) \n")
// 4) create a function that sum only array element above 30 in arrayReviews (result should be 35 + 34 + 50 = 119)

const f4 = (arg) => {
	return arg.filter((el) => el > 30).reduce((a,b) => a + b)
}
console.log('sum only above 30:', f4(arrayReviews));







console.log("exo 5) \n")
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







console.log("exo 6) \n")
// 6) add 78 and 87 to arrayReviews without mutating it (use spread operator), to get [10, 35, 34, 20, 8, 50, 78; 87]

// sans fonction
// const newArray = [...arrayReviews, 78, 87];

// avec fonction
const f6 = (arg) => {
	return [...arg,78, 87]
}
console.log('add 78 and 87:',f6(arrayReviews));







console.log("exo 7) \n")

// 7) destructuring and rest: how could you get [34, 20, 8, 50], the last 4 elements of arrayReviews, in a single line of code ? 

// j'ai redeclaré arrayReviews, la f1 triait le tableau, bizarrement !?
arrayReviews = [10, 35, 34, 20, 8, 50];

// func
const f7 = (arg) => {
	const [,b, ...rest] = [...arg];
	return rest
}
console.log('last 4 elements:', f7(arrayReviews));

// rest
// probleme étant que SI je ne connais pas la longueur de l'array a l'avance, cette solution ne marche pas
const [,b, ...rest] = [...arrayReviews];
console.log('last 4 elements:', rest) 

// slice ?
console.log('last 4 elements:', arrayReviews.slice(-4)) 



let object = {
	name: 'Elyazid', 
	brand: 'Glanceable'
}







console.log("exo 8) \n")

// 8) what are the 2 possible ways to get the object 'name' field value ? 
let { name } = object;
let name2 = object.name;
console.log(name)
console.log(name2)







console.log("exo 9) \n")
	
// 9) transform object to add a job field with value 'frontend engineer' like this, and without mutating it 
// let object2 = {
// name: 'Elyazid', 
// job: 'frontend engineer',
// brand: 'Glanceable'
// }
let object2 = {
	...object,
	job: 'frontend engineer',

}
console.log(object);
console.log(object.job) // undefined
console.log(object2.job) // 'frontend engineer'







console.log("exo 10) \n")
// 10) how to get object2 all keys in an array ? ['Elyazid', 
// 'frontend engineer', 'Glanceable']
console.log(Object.values(object2))







console.log('exo 11) \n')
// 11) how to transform object 2 in {
// name: '# Elyazid', 
// job: '# frontend engineer',
// brand: '# Glanceable'
// } (more difficult question, with reduce, string litteral)  ?

// ça marche mais je comprends très mal reduce
const newObj = {}
const output = Object.entries(object2).reduce(function(memo, item) {
for(const el in item) {
	newObj[`${item[0]}`] = `# ${item[1]}`
}
return newObj
},object2);
console.log(output);



let arrayDates = ['01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '05/01/2021', '06/01/2021'];
console.log('exo 12) \n')

// 12) code a function that creates the following array from arrayDates, without using a for loop (use map)

let arrayNew = [
	{ day: '01/01/2021', brand: 'Glanceable' },
	{ day: '02/01/2021', brand: 'Glanceable' },
	{ day: '03/01/2021', brand: 'Glanceable' },
	{ day: '04/01/2021', brand: 'Glanceable' },
	{ day: '05/01/2021', brand: 'Glanceable' },
	{ day: '06/01/2021', brand: 'Glanceable' },
    ];
    
const f12 = (arg) => {
	return arg.map(el => {
		return {
			day: el,
			brand: 'Glanceable'
		}
	})
}

console.log(f12(arrayDates));


console.log('exo 13) \n')

// 13) code a function that build this array programmatically
let arrayNewWithReviews = [
{ day: '01/01/2021', reviews: 10 , brand: 'Glanceable'},
{ day: '02/01/2021', reviews: 35, brand: 'Glanceable' },
{ day: '03/01/2021', reviews: 34, brand: 'Glanceable' },
{ day: '04/01/2021', reviews: 20, brand: 'Glanceable' },
{ day: '05/01/2021', reviews: 8 , brand: 'Glanceable'},
{ day: '06/01/2021', reviews: 50, brand: 'Glanceable' },
];
    
const f13 = (arg, arg2) => {
	return arg.map((el,index) => {
		return {
			day: el,
			reviews: arg2[index],
			brand: 'Glanceable'
		}
	})
}
console.log(f13(arrayDates,arrayReviews))

console.log('exo 14) \n')
// 14) code a function that sort arrayNewWithReviews by reviews in ascending order
const f14 = (arg) => {
	return arg.sort(function (a, b) {
		return a.reviews - b.reviews;
	});
}
console.log(f14(arrayNewWithReviews))

console.log('exo 15) \n')

// 15) code a function that filter arrayNewWithReviews to have element with reviews above 10

const f15 = (arg) => {
	return arg.filter((el) => el.reviews > 10);
}
console.log(f15(arrayNewWithReviews))

console.log('exo 16) \n')

// 16) code a function with reduce that makes the sum of all element in arrayNewWithReviews with reviews above 10 

// comme c'est pas spécifié j'ai utilisé " strictement supérieur"
const f16 = (arg) => {
	return arg.reduce((prev, curr) => { return prev + (curr.reviews > 10 ? curr.reviews : 0) }, 0);
}
console.log(f16(arrayNewWithReviews))
    
    
//     Bracket notation, dynamically create keys :


console.log('exo 17) \n')

// 17) code a function that creates the following array from array1 (more difficult one)

// Je vois pas comment faire sans faire un tableau avec "One", "Two", "Three" ..
let array2 = [
{ dayOne: '01/01/2021', reviews: 10 },
{ dayTwo: '02/01/2021', reviews: 35 },
{ dayThree: '03/01/2021', reviews: 34 },
{ dayFour: '04/01/2021', reviews: 20 },
{ dayFive: '05/01/2021', reviews: 8 },
{ daySix: '06/01/2021', reviews: 50 },
];

const f17 = (arg, arg2) => {
	const date = ["One", "Two", "Three", "Four", "Five",'Six'];
	return arg.map((el,index) => {
		return {
			[`day${date[index]}`] : el,
			reviews: arg2[index],
		}
	})
}
console.log(f17(arrayDates,arrayReviews))
