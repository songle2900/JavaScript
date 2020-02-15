// String 객체

// 1. charAt()
	// 문자열에서 인자로 넘긴 index에 해당하는 문자형 데이터를 반환해주는 함수
	// const a = "Hello";
	// const b = a.charAt(1);
	// console.log(b); // e

// 2. indexOf() / lastIndexOf()
	// indexOf()

	// const x = "eric";
	// console.log(x);
	// const y = [...x];
	// console.log(y);
	// const z = y.join('')
	// console.log(z);
	// console.log(z);

// arr.map()
	// array.map((요소, 인덱스, 배열) => { return 요소 });
	// const oneTwoThree = [1, 2, 3];
	// let result = oneTwoThree.map((v) => {
		// return v + 1;
	// });
	
	// console.log(oneTwoThree);
	// console.log(result);
	// console.log(oneTwoThree === result);
	
// arr.reduce()
	// array.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
	// result = oneTwoThree.reduce((acc, cur, i) => {
		// console.log(acc, cur, i);
		// return acc + cur;
	// }, 0);
	
	// console.log(result);

// arr.indexOf()
	// 배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환. 없으면 -1을 반환

// Math.sign()
	// 인수가 양수이면 1, 양수인 0이면 0, 음수이면 -1, 음수인 0이면 -0을 반환
	
const string = "Hello There!";
const chars = {};

for (let char of string) {
	// if (!chars[char]) {
		// chars[char] = 1;
	// } else {
		// chars[char]++;
	// }
	
	// !chars[char] ? chars[char] = 1 : chars[char]++;
	
	chars[char] = chars[char] + 1 || 1;
};



console.log(chars);