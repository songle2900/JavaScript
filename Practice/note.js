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
// Array
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
		// const testArr = [1, 2, 3, 4, 5, 50, 100];
		// const newArr = testArr.filter((e, i, arr) => {
			// return e <= 3;
		// });

		// console.log(newArr);

	// arr.indexOf()
		// 배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환. 없으면 -1을 반환
	
	// arr.splice()
		// array.splice(항목 위치, 삭제할 항목 수, 추가할 항목)
		// 추가는 삭제할 항목 수를 0으로 설정
		
	// arr.slice()
		// array.slice( start, end )
		// start에 해당하는 요소부터 end '바로 전'의 요소까지 선택
		// end 값이 없으면 해당 배열의 마지막 요소까지 선택
		// 배열의 일부분을 선택하여 새로운 배열을 만든다
		

	
// Math.sign()
	// 인수가 양수이면 1, 양수인 0이면 0, 음수이면 -1, 음수인 0이면 -0을 반환
	
// foreach (element, index, array)
	// 배열의 요소들을 반복하여 작업을 수행
	// foreach는 오직 "Array" 객체에서만 사용가능. (ES6부터는 map, set등에서도 가능)
	
	// const items = ["item1", "item2", "item3"];
	
	// const forEach = items.forEach((item) => {
		// console.log(item);
	// });

// forin
	// 객체의 속성들을 반복하여 작업을 수행할 수 있다. (모든 객체에서 사용이 가능)
	// 객체의 key 값에 접근할 수 있지만 value 값에 접근할 수 는 없다.

	// const obj = {
		// a: 1,
		// b: 2,
		// c: 3
	// };
	
	// for (let prop in obj) {
		// console.log(prop, obj[prop]);
	// };

// forof
























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