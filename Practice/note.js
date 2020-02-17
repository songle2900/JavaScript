// charAt()
	// 문자열에서 인자로 넘긴 index에 해당하는 문자형 데이터를 반환해주는 함수
	// const a = "Hello";
	// const b = a.charAt(1);
	// console.log(b); // e

// indexOf() / lastIndexOf()
	// const x = "eric";
	// console.log(x);
	// const y = [...x];
	// console.log(y);
	// const z = y.join('')
	// console.log(z);
	// console.log(z);

// arr.map()
	// array.map((요소, 인덱스, 배열) => { return 요소 });
	// 반복문을 돌며 배열 안의 요소들을 1:1로 짝지어 준다
	// 기존 배열을 수정하지 않고 새로운 배열을 만들어 준다
	// 단, 배열 안에 객체가 들어있는 경우 객체는 공유

	// const oneTwoThree = [1, 2, 3];
	// let result = oneTwoThree.map((v) => {
		// return v + 1;
	// });
	
	// console.log(oneTwoThree); // 1, 2, 3
	// console.log(result); // 1, 2, 3
	// console.log(oneTwoThree === result); // false
	
// arr.reduce()
	// array.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
	// 초깃값을 적어주지 않으면 자동으로 초깃값이 0번째 인덱스의 값이 된다

	// const oneTwoThree = [1, 2, 3];

	// result = oneTwoThree.reduce((acc, cur, i) => {
	// 	console.log(acc, cur, i);
	// 	return acc + cur;
	// });
	
	// console.log(result);

// arr.filter()
	// array.filter(callbackFunc(element, index, array), thisArg);
	const testArr = [1, 2, 3, 4, 5, 50, 100];
	const newArr = testArr.filter((e, i, arr) => {
		return e <= 3;
	});

	console.log(newArr);

// arr.indexOf()
	// 배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환. 없으면 -1을 반환

// Math.sign()
	// 인수가 양수이면 1, 양수인 0이면 0, 음수이면 -1, 음수인 0이면 -0을 반환

	










// const string = "Hello There!";
// const chars = {};

// for (let char of string) {
// 	// if (!chars[char]) {
// 		// chars[char] = 1;
// 	// } else {
// 		// chars[char]++;
// 	// }
	
// 	// !chars[char] ? chars[char] = 1 : chars[char]++;
	
// 	chars[char] = chars[char] + 1 || 1;
// };

// const arr = [0, 1, 1, 3];

// const zerosBack = arr => {
// 	const zero = arr.filter(e => e === 0);

// 	const noneZero = arr.filter(e => e !== 0);

// 	for (let z of zero) {
// 		noneZero.splice(Math.floor(noneZero.length / 2), 0, zero[z]);
// 	};
	
// 	console.log(arr.length);

// 	const output = () => {
// 		for (let i of noneZero) {
// 			console.log(i);
// 		}
// 	};

// 	return output();
// };

// zerosBack(arr);