# 학습자료 3편 — JavaScript 완전 정복

> 대상: JavaScript를 처음 배우는 사람 · 목표: **"이 코드가 실행되면 어떤 순서로 무슨 일이 벌어지는지" 스스로 따라갈 수 있는 수준까지**
> HTML이 뼈대, CSS가 겉모습이라면 JavaScript는 **동작과 판단**을 담당합니다.

## 0. 목차 및 범위 선언
| 장 | 주제 |
| --- | --- |
| 1 | JavaScript란 무엇인가, 어떻게 실행되나 |
| 2 | 변수와 자료형 |
| 3 | 연산자 |
| 4 | 조건문 |
| 5 | 반복문 |
| 6 | 함수 |
| 7 | 배열과 배열 메서드 |
| 8 | 객체 |
| 9 | DOM 선택과 조작 |
| 10 | 이벤트 |
| 11 | 비동기 처리 (콜백 → Promise → async/await) |
| 12 | fetch와 API 통신 |
| 13 | 에러 처리 |
| 14 | 브라우저 저장소(localStorage 등) |
| 15 | 클래스와 객체지향 |
| 16 | 모듈 |
| 17 | 스코프와 클로저 |
| 18 | 자주 쓰는 브라우저 API |
| 19 | 실전 도구·디버깅 |
| 20 | 자주 하는 실수 체크리스트 |
| 21 | 실습 과제 |
| 22 | 용어 사전 |

JavaScript 언어 명세(ECMAScript)도 매우 방대합니다. 이 자료는 **웹페이지를 만들 때 실제로 쓰는 90%**를 촘촘히 다루고, 나머지는 이름과 위치를 알려드립니다. 더 깊은 내용은 [MDN JavaScript 가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)가 정답지입니다.

---

## 1. JavaScript란 무엇인가, 어떻게 실행되나

**핵심**: JavaScript는 웹페이지에 **동작(로직)** 을 부여하는 프로그래밍 언어입니다. HTML/CSS와 달리 계산, 조건 분기, 반복이 가능합니다.

### 1.1 세 기술의 역할 (복습, HTML 1장과 동일한 표)
| 기술 | 역할 |
| --- | --- |
| HTML | 구조 |
| CSS | 겉모습 |
| **JavaScript** | **동작·판단·데이터 처리** |

### 1.2 어디서 실행되나
- **브라우저**: `<script>` 태그로 불러온 JS는 브라우저 안의 **JavaScript 엔진**(크롬은 V8)이 실행합니다. 이 자료는 이 환경을 기준으로 합니다.
- **Node.js**: 브라우저 밖(서버, 터미널)에서도 같은 V8 엔진으로 JS를 실행하게 해주는 프로그램입니다. `window`, `document` 같은 브라우저 전용 객체는 없습니다.

### 1.3 브라우저 안의 JS가 다루는 두 가지 큰 대상
1. **DOM**(HTML 1.3절 복습): 화면의 구조. JS가 여기를 읽고 바꾸면 화면이 바뀝니다.
2. **BOM(Browser Object Model)**: 브라우저 자체(창 크기, 주소, 뒤로가기 등). `window`, `location`, `history`, `navigator` 등이 여기 속합니다.

### 1.4 코드는 위에서 아래로, 한 줄씩(기본적으로)
JS 엔진은 기본적으로 코드를 위에서 아래로 순서대로 실행합니다(**동기적**). 다만 시간이 걸리는 작업(서버에 데이터 요청 등)은 기다리지 않고 나중에 처리하는 방식이 있는데, 이것이 11장의 **비동기**입니다.

### 1.5 `console.log()` — 가장 중요한 디버깅 도구
```js
console.log("여기까지 왔다", 변수이름);
```
개발자 도구의 Console 탭에 값을 출력합니다. "코드가 여기까지 실행되는지", "이 시점에 변수가 무슨 값인지" 확인하는 가장 기본적인 방법입니다. 문제가 생기면 제일 먼저 `console.log`를 여기저기 찍어보는 것이 실전 디버깅의 첫걸음입니다.

### 확인 질문
1. DOM과 BOM의 차이는?
2. 문제가 생겼을 때 가장 먼저 시도해볼 디버깅 방법은?

<details><summary>정답 보기</summary>

1. DOM은 화면(문서) 구조를, BOM은 브라우저 자체(창, 주소, 이력 등)를 나타내는 객체 모델입니다.
2. `console.log()`로 코드 곳곳에 현재 상태를 출력해보는 것입니다.
</details>

---

## 2. 변수와 자료형

### 2.1 변수 선언: `let`, `const`, `var`
```js
let count = 1;       // 나중에 값이 바뀔 수 있는 변수
const name = "안흥";  // 다시 할당할 수 없는 상수
var old = "옛날 방식"; // 레거시. 요즘은 거의 안 씀
```
| 키워드 | 재할당 | 스코프(17장) | 언제 쓰나 |
| --- | --- | --- | --- |
| `const` | 불가능 | 블록 | **기본값**. 값이 안 바뀔 거면 항상 이것부터 |
| `let` | 가능 | 블록 | 반복문 카운터처럼 값이 바뀔 게 확실할 때 |
| `var` | 가능 | 함수 | 옛날 코드에서만. 새 코드에서는 지양 |

**실전 원칙**: 일단 `const`로 시작하고, "이 값은 바뀌어야 한다"는 에러(`Assignment to constant variable`)를 만나면 그때 `let`으로 바꿉니다. `var`는 스코프 규칙이 직관적이지 않아(17장) 잘 안 씁니다.

> 주의: `const`는 "값이 고정"이 아니라 "**그 변수가 가리키는 것을 다른 것으로 바꿀 수 없다**"는 뜻입니다. 배열이나 객체는 `const`로 선언해도 **내용물은 바꿀 수 있습니다**(8.5절에서 다시 다룸).
```js
const arr = [1, 2];
arr.push(3);      // OK, 내용 변경
arr = [4, 5];     // 에러! 변수 자체를 다른 배열로 바꾸는 건 안 됨
```

### 2.2 원시 자료형(Primitive types)
| 타입 | 예 | 설명 |
| --- | --- | --- |
| `string` | `"안녕"`, `'안녕'`, `` `안녕` `` | 문자열 |
| `number` | `42`, `3.14`, `-1` | 정수/실수 구분 없이 하나의 숫자 타입 |
| `boolean` | `true`, `false` | 참/거짓 |
| `undefined` | | 값이 아직 할당되지 않음(변수 선언만 하고 값을 안 줬을 때 자동으로 가짐) |
| `null` | | "값이 없음"을 **의도적으로** 표시할 때 사람이 직접 넣는 값 |
| `bigint` | `123n` | 아주 큰 정수(자주 안 씀) |
| `symbol` | | 고유한 식별자(자주 안 씀) |

**`undefined` vs `null`의 차이**: `undefined`는 "아직 아무도 값을 안 줬다"(자동), `null`은 "값이 없다는 것을 내가 확인해서 넣었다"(의도적)는 뉘앙스 차이입니다.

### 2.3 참조 자료형(Reference type)
| 타입 | 예 |
| --- | --- |
| `object` | `{ name: "안흥" }` |
| `array` | `[1, 2, 3]` (사실 object의 한 종류) |
| `function` | `function() {}` (이것도 object의 한 종류) |

원시 타입은 **값 자체**가 복사되고, 참조 타입은 **메모리 주소(참조)** 가 복사됩니다(8.6절에서 자세히).

### 2.4 `typeof` — 타입 확인
```js
typeof "안녕"     // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" (역사적인 버그, null인데 object로 나옴 — 유명한 함정)
typeof [1,2,3]    // "object" (배열도 object로 나옴, 배열 확인은 Array.isArray() 사용)
typeof function(){} // "function"
```

### 2.5 문자열 다루기
```js
const first = "안";
const last = "흥";
const full = first + last;                 // 문자열 연결(+)
const full2 = `${first}${last}님`;          // 템플릿 리터럴(권장)

"안흥".length          // 2 (글자 수)
"Hello".toUpperCase()  // "HELLO"
"Hello".toLowerCase()  // "hello"
"  hi  ".trim()        // "hi" (양 끝 공백 제거)
"a,b,c".split(",")     // ["a", "b", "c"]
["a","b"].join("-")    // "a-b"
"Hello".includes("ell")// true
"Hello".slice(1, 3)    // "el" (1번 인덱스부터 3번 전까지)
"Hello".replace("H", "J") // "Jello"
```

### 2.6 템플릿 리터럴 (백틱 `` ` ``)
```js
const name = "안흥";
const age = 25;
const msg = `${name}님은 ${age}살입니다. 내년엔 ${age + 1}살.`;
```
- 백틱(`` ` ``) 안에서 `${표현식}`으로 변수나 계산식을 바로 끼워 넣습니다.
- **여러 줄 문자열**도 줄바꿈을 그대로 쓸 수 있습니다(따옴표 문자열은 불가능).
- 문자열을 `+`로 이어 붙이던 옛날 방식보다 훨씬 읽기 쉬워 실무 기본값입니다.

### 2.7 숫자와 형 변환
```js
Number("42")     // 42
String(42)       // "42"
parseInt("42px") // 42 (앞부분만 숫자로)
parseFloat("3.14m") // 3.14
Boolean(0)       // false
Boolean("")      // false
Boolean("0")     // true! (내용이 있는 문자열은 다 true — 흔한 함정)

"5" + 3    // "53" (문자열 연결이 우선)
"5" - 3    // 2   (뺄셈은 문자열을 숫자로 변환)
```

### 2.8 falsy와 truthy
JS에서 조건문(4장)에 넣었을 때 `false`처럼 취급되는 값들을 **falsy**라 합니다.
```text
falsy 값 6가지: false, 0, "", null, undefined, NaN
그 외 모든 값(빈 배열 [], 빈 객체 {} 포함)은 truthy
```

### 내 프로젝트에서 찾기
`js/main.js`에는 `const`가 57번, `let`이 11번 쓰였습니다. `const`가 압도적으로 많은 것은 "값이 바뀌지 않는 한 const를 쓴다"는 2.1절의 실전 원칙을 그대로 따른 것입니다. `let`은 반복문 인덱스나 상태가 바뀌는 변수(예: 필터 상태, 페이지 번호)에 쓰였을 가능성이 높습니다.

### 확인 질문
1. `const arr = [1,2,3]; arr.push(4);` 는 에러가 날까?
2. `typeof null`의 결과는 무엇이고, 왜 함정이라고 부를까?
3. `"5" - "2"`와 `"5" + "2"`의 결과는 각각 무엇일까?

<details><summary>정답 보기</summary>

1. 에러가 나지 않습니다. `const`는 변수가 가리키는 배열 자체를 바꾸는 것만 막고, 배열 내용 변경은 허용합니다.
2. `"object"`입니다. `null`은 개념적으로 "값이 없음"인데 타입 확인 결과가 object로 나와 실제 타입과 맞지 않는, JS의 오래된 버그성 동작입니다.
3. `"5" - "2"`는 뺄셈이라 숫자로 변환되어 `3`, `"5" + "2"`는 덧셈 기호가 문자열 연결로도 쓰이므로 `"52"`입니다.
</details>

---

## 3. 연산자

### 3.1 산술 연산자
```js
+  -  *  /  %(나머지)  **(거듭제곱)
10 % 3   // 1
2 ** 10  // 1024
```

### 3.2 대입 연산자
```js
x = 5;
x += 3;   // x = x + 3
x -= 1;   x *= 2;   x /= 2;   x %= 2;
x++;      // 1 증가 (후위)   ++x; (전위, 실전에선 거의 차이 없이 씀)
```

### 3.3 비교 연산자 — `==` 대신 `===`를 써야 하는 이유
```js
5 == "5"    // true  (타입을 무시하고 값만 비교 — "느슨한 비교")
5 === "5"   // false (타입까지 비교 — "엄격한 비교")

null == undefined   // true  (둘만의 특수 규칙)
null === undefined  // false
```
**원칙**: 항상 `===`(과 `!==`)를 씁니다. `==`는 내부적으로 타입을 이상하게 변환해서 `"" == 0`이 `true`가 되는 등 예측하기 어려운 결과를 만듭니다.

### 3.4 논리 연산자
```js
true && false   // AND: 둘 다 true여야 true
true || false   // OR: 하나만 true여도 true
!true           // NOT: 반대로
```

### 3.5 논리 연산자의 "값 반환" 활용 (실전에서 자주 씀)
JS의 `&&`, `||`는 단순 true/false가 아니라 **실제로 평가된 값**을 반환합니다.
```js
const name = userName || "손님";        // userName이 falsy면 "손님" 사용(기본값 지정)
isLoggedIn && showDashboard();          // isLoggedIn이 true일 때만 함수 실행
```

### 3.6 널 병합 연산자 `??`
```js
const count = userCount ?? 0;   // userCount가 정확히 null 또는 undefined일 때만 0 사용
```
`||`는 `0`이나 `""`같은 falsy 값도 다 걸러버리지만, `??`는 **정말 값이 없을 때(null/undefined)만** 기본값을 씁니다. "입력값이 0이어도 유효한 값으로 쓰고 싶다"는 상황에 `??`가 더 안전합니다.

### 3.7 옵셔널 체이닝 `?.`
```js
const city = user?.address?.city;   // user나 address가 없으면 에러 대신 undefined 반환
user?.sayHello?.();                 // 메서드가 있을 때만 호출
```
중첩된 객체를 다룰 때 "혹시 중간에 없으면 에러가 나던" 것을 안전하게 처리합니다.

### 3.8 삼항 연산자
```js
const message = age >= 18 ? "성인" : "미성년자";
```
`조건 ? 참일때값 : 거짓일때값` — 간단한 if/else를 한 줄로 줄일 때 씁니다.

### 내 프로젝트에서 찾기
`main.js`에서 `filter`, `find` 계열 메서드(7장) 안의 조건식이나, 값이 없을 때 기본 문구를 보여주는 부분(`??` 또는 `||`)에서 이 장의 연산자들이 쓰였을 가능성이 높습니다.

### 확인 질문
1. `0 || "기본값"`의 결과는? `0 ?? "기본값"`의 결과는? 왜 다를까?
2. `===`가 `==`보다 안전한 이유는?
3. `user?.name`이 `user`가 `undefined`일 때 에러 대신 무엇을 반환할까?

<details><summary>정답 보기</summary>

1. `||`는 `0`을 falsy로 보므로 `"기본값"`, `??`는 `0`이 null/undefined가 아니므로 `0`을 그대로 반환합니다.
2. 타입까지 비교해서 `5 == "5"`처럼 서로 다른 타입인데 true가 되는 예측 불가능한 상황을 막아줍니다.
3. `undefined`를 반환합니다(에러 없이).
</details>

---

## 4. 조건문

### 4.1 `if / else if / else`
```js
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}
```
위에서부터 순서대로 검사하며, **처음으로 조건이 true인 블록만** 실행합니다.

### 4.2 `switch`
```js
switch (fruit) {
  case "apple":
    price = 1000;
    break;              // break가 없으면 다음 case로 계속 넘어감(주의!)
  case "banana":
    price = 500;
    break;
  default:
    price = 0;
}
```
경우의 수가 많고 하나의 값을 여러 경우와 비교할 때 `if/else if`보다 읽기 좋습니다. **`break`를 빼먹는 것이 가장 흔한 실수**입니다.

### 확인 질문
1. `switch`문에서 `break`를 빼먹으면 어떤 일이 생길까?

<details><summary>정답 보기</summary>

일치하는 case를 실행한 뒤에도 멈추지 않고 그 아래 case들을 계속 실행합니다("fall-through"라 부릅니다).
</details>

---

## 5. 반복문

### 5.1 `for`
```js
for (let i = 0; i < 5; i++) {
  console.log(i);   // 0 1 2 3 4
}
```
`for (초기식; 조건식; 증감식)` 세 부분으로 구성됩니다.

### 5.2 `while` / `do...while`
```js
while (조건) { ... }        // 조건이 true인 동안 반복(맨 처음에도 검사)
do { ... } while (조건);    // 무조건 한 번은 실행 후 조건 검사
```

### 5.3 `for...of` — 배열/문자열 순회(실전에서 가장 많이 씀)
```js
const fruits = ["사과", "배", "감"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### 5.4 `for...in` — 객체의 key 순회 (배열엔 잘 안 씀)
```js
const person = { name: "안흥", age: 25 };
for (const key in person) {
  console.log(key, person[key]);
}
```
배열에도 기술적으로 쓸 수 있지만, 배열은 `for...of`나 배열 메서드(7장)를 쓰는 것이 표준입니다.

### 5.5 `break`와 `continue`
```js
for (const n of [1,2,3,4,5]) {
  if (n === 3) continue;  // 이번 반복만 건너뛰고 계속
  if (n === 5) break;     // 반복문 전체를 종료
  console.log(n);         // 1 2 4
}
```

### 5.6 반복문 대신 배열 메서드를 쓰는 이유 (예고)
현대 JS에서는 배열을 다룰 때 `for` 대신 7장의 `map`, `filter`, `forEach` 같은 **배열 메서드**를 훨씬 자주 씁니다. "무엇을 할지"에 집중해서 코드가 짧고 읽기 쉬워지기 때문입니다.

### 내 프로젝트에서 찾기
`main.js`에는 명시적인 `for`문보다 `forEach`(10번), `map`(5번) 같은 배열 메서드가 훨씬 많이 쓰였습니다. 이는 5.6절에서 말한 현대적인 스타일을 따른 것입니다.

### 확인 질문
1. `continue`와 `break`의 차이는?
2. 배열을 순회할 때 `for...of`와 `for...in` 중 무엇을 쓰는 것이 표준일까?

<details><summary>정답 보기</summary>

1. `continue`는 그 회차만 건너뛰고 반복을 계속하고, `break`는 반복문 자체를 끝냅니다.
2. `for...of`입니다. `for...in`은 원래 객체의 key를 순회하기 위한 것이라 배열에서는 예상 밖의 동작(상속된 속성 포함 등)이 있을 수 있습니다.
</details>

---

## 6. 함수

**핵심**: 함수는 **반복해서 쓸 코드 덩어리에 이름을 붙인 것**입니다.

### 6.1 함수 선언 방식 세 가지
```js
// 1) 함수 선언문 (function declaration)
function greet(name) {
  return `안녕, ${name}`;
}

// 2) 함수 표현식 (function expression)
const greet2 = function(name) {
  return `안녕, ${name}`;
};

// 3) 화살표 함수 (arrow function) — 요즘 가장 많이 씀
const greet3 = (name) => {
  return `안녕, ${name}`;
};
const greet4 = name => `안녕, ${name}`;   // 파라미터 1개+본문 1줄이면 괄호·중괄호·return 생략 가능
```

### 6.2 화살표 함수와 일반 함수의 차이 (중요)
1. **문법이 짧습니다.**
2. **`this`를 자기 것으로 안 만듭니다.** 화살표 함수 안의 `this`는 **바깥(자신을 감싼) 스코프의 this를 그대로 씁니다.** 일반 함수는 **호출하는 방법에 따라 `this`가 바뀝니다.** 이벤트 리스너 안에서 화살표 함수를 쓰면 "이 함수를 둘러싼 코드의 this"가 유지되어 혼란이 적습니다. (`this`는 15장에서 클래스와 함께 더 다룹니다.)
3. 화살표 함수는 `new`로 생성자처럼 못 씁니다.

### 6.3 매개변수(parameter)와 인자(argument)
```js
function add(a, b) {         // a, b는 매개변수(parameter)
  return a + b;
}
add(3, 5);                    // 3, 5는 인자(argument)
```

### 6.4 기본값과 나머지 매개변수
```js
function greet(name = "손님") {   // 인자를 안 주면 "손님" 사용
  return `안녕, ${name}`;
}

function sum(...numbers) {        // 나머지 매개변수: 여러 인자를 배열로 받음
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4);   // 10
```

### 6.5 구조 분해 할당(destructuring) — 매개변수에서도 자주 씀
```js
const person = { name: "안흥", age: 25 };
const { name, age } = person;        // 객체에서 필요한 값만 바로 꺼내기
console.log(name, age);              // "안흥" 25

function printUser({ name, age }) {  // 함수 매개변수에서 바로 구조분해
  console.log(`${name}(${age})`);
}
printUser(person);

const [first, second] = [10, 20];    // 배열도 구조분해 가능
```

### 6.6 반환값(`return`)
```js
function isAdult(age) {
  if (age >= 18) {
    return true;   // return을 만나는 즉시 함수가 끝남(아래 코드 실행 안 됨)
  }
  return false;
}
```
`return`이 없으면 함수는 `undefined`를 반환합니다.

### 6.7 콜백 함수 — "함수를 값처럼 다른 함수에 넘기기"
```js
function processUser(user, onDone) {
  console.log("처리 중...");
  onDone(user);          // 넘겨받은 함수를 나중에 실행
}
processUser({ name: "안흥" }, (user) => {
  console.log(`${user.name} 처리 완료`);
});
```
JS에서 함수는 **숫자나 문자열처럼 변수에 담고, 다른 함수에 인자로 넘기고, 함수가 함수를 반환할 수도 있는 값**입니다(일급 객체, first-class function). 이 개념이 이벤트 처리(10장)와 배열 메서드(7장), 비동기(11장)의 기반입니다.

### 6.8 즉시 실행 함수(IIFE, 참고)
```js
(function() {
  console.log("정의되자마자 바로 실행");
})();
```
변수가 전역을 오염시키지 않게 감싸는 옛날 패턴입니다. 지금은 모듈(16장)이 이 역할을 대신합니다.

### 내 프로젝트에서 찾기
`main.js`에서 `function` 키워드로 만든 전통적 함수 선언은 1번뿐이고, 대부분 **화살표 함수**(`=>`)로 작성되었습니다. 이는 6.2절에서 설명한 현대적 스타일을 따른 것입니다. `addEventListener`에 넘기는 함수들이 대표적인 **콜백 함수**의 예이고(10장), `map`/`filter`에 넘기는 화살표 함수들도 콜백입니다(7장).

### 확인 질문
1. 화살표 함수와 일반 함수의 가장 실전적인 차이는 무엇일까?
2. `function add(a, b=1) {}`에서 `add(5)`를 호출하면 `b`는 무엇이 될까?
3. `const { name } = person;`은 무엇을 하는 코드일까?

<details><summary>정답 보기</summary>

1. `this`가 바깥 스코프의 것을 그대로 쓰느냐(화살표), 호출 방식에 따라 달라지느냐(일반 함수)입니다.
2. `1`입니다(기본값 사용).
3. `person` 객체에서 `name` 속성 값을 꺼내 같은 이름의 변수로 만듭니다(구조 분해 할당).
</details>

---

## 7. 배열과 배열 메서드

**핵심**: 배열은 **순서가 있는 값들의 목록**입니다. 실전 JS 코드의 많은 부분이 배열을 **원본은 그대로 두고 새 배열을 만들어** 처리하는 메서드들로 이루어집니다.

### 7.1 배열 기본
```js
const fruits = ["사과", "배", "감"];
fruits[0]          // "사과" (인덱스는 0부터)
fruits.length       // 3
fruits.push("귤")   // 끝에 추가, 새 길이 반환
fruits.pop()        // 끝 요소 제거하고 반환
fruits.unshift("배") // 앞에 추가
fruits.shift()       // 앞 요소 제거
fruits.includes("배") // true
fruits.indexOf("감")  // 인덱스, 없으면 -1
Array.isArray(fruits) // true (typeof로는 배열 구분이 안 되므로 이걸 씀)
```

### 7.2 `forEach` — 각 요소로 무언가 "하기"(반환값 없음)
```js
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```
배열을 순회하며 부수효과(화면에 그리기, 콘솔 출력 등)를 일으킬 때 씁니다. **새 배열을 만들지 않습니다.**

### 7.3 `map` — 각 요소를 "변환"해서 같은 길이의 새 배열 만들기
```js
const prices = [1000, 2000, 3000];
const withTax = prices.map(price => price * 1.1);
// [1100, 2200, 3300] — 원본 prices는 그대로!
```
**"매 요소마다 똑같은 변환을 적용한 새 배열이 필요하다"** 면 `map`입니다. HTML 문자열을 만들 때도 자주 씁니다.
```js
const repos = [{name:"a"}, {name:"b"}];
const html = repos.map(repo => `<li>${repo.name}</li>`).join("");
// "<li>a</li><li>b</li>"
```

### 7.4 `filter` — 조건에 맞는 것만 골라 새 배열 만들기
```js
const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter(n => n % 2 === 0);   // [2, 4, 6]
```
콜백이 `true`를 반환하는 요소만 남습니다.

### 7.5 `find` / `findIndex` — 조건에 맞는 첫 번째 것 하나만
```js
const users = [{id:1,name:"a"},{id:2,name:"b"}];
const found = users.find(u => u.id === 2);       // {id:2, name:"b"}
const idx   = users.findIndex(u => u.id === 2);  // 1
```

### 7.6 `some` / `every` — 조건 검사(true/false 하나만 반환)
```js
[1,2,3].some(n => n > 2);   // true (하나라도 만족하면)
[1,2,3].every(n => n > 2);  // false (모두 만족해야)
```

### 7.7 `reduce` — 배열 전체를 하나의 값으로 누적
```js
const nums = [1,2,3,4];
const total = nums.reduce((acc, n) => acc + n, 0);
// acc(누적값)의 시작은 0, 각 n을 더해나가 최종 10
```
`reduce`는 가장 어렵지만 가장 강력합니다. "합계를 구한다"뿐 아니라 배열을 객체로 바꾸는 등 다양하게 쓰입니다.

### 7.8 정렬과 뒤집기
```js
[3,1,2].sort();                          // [1,2,3] (기본은 문자열 기준이라 숫자에선 위험!)
[10,2,33].sort((a,b) => a - b);          // [2,10,33] 오름차순 — 비교 함수 필수
[10,2,33].sort((a,b) => b - a);          // 내림차순
[1,2,3].reverse();                       // [3,2,1]
```
**함정**: `sort()`를 비교 함수 없이 쓰면 숫자도 문자열처럼 비교되어 `[10, 2, 33]`이 `[10, 2, 33]`도 아니고 이상하게 정렬됩니다(`"10" < "2"`이기 때문). 숫자 정렬은 항상 `(a, b) => a - b` 비교 함수를 줍니다.

### 7.9 자르고 합치기
```js
[1,2,3,4,5].slice(1, 3)     // [2,3] (원본 안 바뀜, 1번부터 3번 전까지)
[1,2].concat([3,4])          // [1,2,3,4] (원본 안 바뀜)
[...arr1, ...arr2]           // 스프레드로 합치기(더 많이 씀, 7.11절)
```
`slice`(자르기, 원본 유지)와 `splice`(자르고 **원본을 직접 수정**)는 이름이 비슷하지만 동작이 다릅니다. 실전에서는 원본을 바꾸지 않는 `slice` 계열을 선호합니다.

### 7.10 `join`과 배열 ↔ 문자열
```js
["a","b","c"].join("-")   // "a-b-c"
"a-b-c".split("-")        // ["a","b","c"]
```

### 7.11 스프레드 연산자(`...`)로 배열 복사·합치기
```js
const original = [1, 2, 3];
const copy = [...original];          // 얕은 복사(새 배열)
const merged = [...arr1, ...arr2];   // 두 배열 합치기
const withNew = [...original, 4];    // 뒤에 추가된 새 배열
```

### 7.12 메서드가 원본을 바꾸는지 정리 (실전에서 가장 헷갈리는 부분)
| 원본을 바꾸는 것 | 원본을 안 바꾸고 새로 만드는 것 |
| --- | --- |
| `push` `pop` `shift` `unshift` `splice` `sort` `reverse` | `map` `filter` `slice` `concat` `find` `reduce`(보통) |

**의심되면**: 메서드를 쓰기 전과 후에 원본 배열을 `console.log`로 찍어 비교해보는 것이 확실합니다.

### 내 프로젝트에서 찾기
`main.js`에는 `forEach`(10번), `map`(5번), `filter`(4번), `every`(1번), `reduce`(1번)가 쓰였습니다.
- **GitHub API로 받은 저장소 목록**을 `filter`로 걸러내고(예: fork 제외), `map`으로 각 저장소 데이터를 카드 HTML 문자열로 변환한 뒤 `join("")`으로 합쳐 `innerHTML`에 넣는 흐름이 유력합니다(9장에서 이어 설명).
- `forEach`는 화면에 이미 만들어진 여러 카드 요소에 이벤트를 각각 달거나(10장), 필터 버튼들을 순회하며 상태를 갱신하는 데 쓰였을 가능성이 높습니다.
- `reduce`는 언어별 개수 집계처럼 "여러 값을 하나로 모으는" 곳에 쓰였을 수 있습니다.

### 확인 질문
1. `map`과 `forEach`의 근본적인 차이는?
2. `[10, 2, 33].sort()`가 위험한 이유는?
3. 배열의 내용을 바꾸지 않고 특정 조건에 맞는 요소만 뽑고 싶다면 어떤 메서드를 쓸까?

<details><summary>정답 보기</summary>

1. `map`은 변환된 값들로 이루어진 **새 배열을 반환**하지만, `forEach`는 **아무것도 반환하지 않고**(undefined) 그저 각 요소에 대해 어떤 동작을 실행할 뿐입니다.
2. 기본 정렬은 값을 문자열로 취급해 비교하므로 숫자 크기 순서와 다르게 정렬될 수 있습니다.
3. `filter`입니다.
</details>

---

## 8. 객체

### 8.1 객체 만들기와 접근
```js
const person = {
  name: "안흥",
  age: 25,
  isStudent: false,
};

person.name        // 점 표기법: "안흥"
person["name"]     // 대괄호 표기법: "안흥" (키가 변수이거나 특수문자 포함 시 필수)
person.job          // 없는 속성 접근 → undefined (에러 아님)
```

### 8.2 추가·수정·삭제
```js
person.job = "학생";      // 추가/수정
delete person.isStudent;   // 삭제
```

### 8.3 메서드(객체 안의 함수)
```js
const person = {
  name: "안흥",
  greet() {                       // 메서드 축약 문법
    console.log(`안녕, ${this.name}`);
  }
};
person.greet();   // "안녕, 안흥"
```
메서드 안의 `this`는 **그 메서드를 호출한 객체**(여기선 `person`)를 가리킵니다.

### 8.4 객체 순회
```js
const person = { name: "안흥", age: 25 };
Object.keys(person)    // ["name", "age"]
Object.values(person)  // ["안흥", 25]
Object.entries(person) // [["name","안흥"], ["age",25]]

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

### 8.5 구조 분해와 스프레드(객체 버전)
```js
const { name, age } = person;
const updated = { ...person, age: 26 };   // person을 복사하며 age만 덮어쓰기(원본 유지)
```

### 8.6 참조(reference) — 객체는 왜 "공유"될까
```js
const a = { value: 1 };
const b = a;          // b는 a와 같은 객체를 "가리킴"(복사 아님)
b.value = 2;
console.log(a.value); // 2! a도 바뀜

const c = { ...a };   // 스프레드로 "얕은 복사"
c.value = 99;
console.log(a.value); // 2 (안 바뀜, 서로 다른 객체)
```
이것이 2.3절에서 예고한 "참조 타입"의 핵심입니다. 원시값(문자열, 숫자)은 대입할 때 값 자체가 복사되지만, 객체·배열은 **메모리 주소가 복사**되어 두 변수가 같은 실체를 가리키게 됩니다. 실수로 원본을 건드리는 버그의 흔한 원인입니다.

### 8.7 JSON — 객체를 문자열로, 문자열을 객체로
```js
const person = { name: "안흥", age: 25 };
const json = JSON.stringify(person);   // '{"name":"안흥","age":25}' (문자열)
const back = JSON.parse(json);         // 다시 객체로
```
**JSON(JavaScript Object Notation)** 은 서버와 데이터를 주고받을 때의 표준 형식입니다. JS 객체와 문법이 비슷하지만, JSON은 **key를 반드시 큰따옴표로** 감싸야 하는 등 더 엄격한 텍스트 형식입니다. `fetch`로 API를 부르면(12장) 받는 응답을 `JSON.parse`(또는 `response.json()`)로 실제 JS 객체로 바꿔야 다룰 수 있습니다.

### 내 프로젝트에서 찾기
GitHub API가 돌려주는 저장소 정보(이름, 설명, 언어, 별 개수 등)는 **객체의 배열**입니다. 이 객체들에서 `repo.name`, `repo.language`처럼 점 표기법으로 값을 꺼내 카드 HTML을 만드는 부분(7.3절의 `map`과 연결)이 `main.js`의 핵심 로직입니다. `dataset`(HTML 11장의 `data-*` 속성을 JS에서 읽는 것)도 4번 등장해, 필터 버튼 등에 데이터를 실어 나르는 데 쓰였을 가능성이 높습니다.

### 확인 질문
1. `const b = a;` 이후 `b`의 속성을 바꾸면 `a`도 바뀌는 이유는?
2. 객체를 안전하게 복사하려면 어떻게 할까?
3. `fetch`로 받은 API 응답을 JS 객체로 쓰려면 어떤 처리가 필요할까?

<details><summary>정답 보기</summary>

1. 객체는 값 자체가 아니라 메모리 참조가 복사되어, `a`와 `b`가 같은 객체를 가리키기 때문입니다.
2. `{ ...원본 }`(스프레드) 또는 `Object.assign({}, 원본)`으로 얕은 복사를 합니다.
3. `JSON.parse()` 또는 `response.json()`으로 텍스트(JSON)를 JS 객체로 변환해야 합니다.
</details>

---

## 9. DOM 선택과 조작

**핵심**: JavaScript가 화면을 바꾸는 방법은 딱 두 단계입니다. **1) 원하는 요소를 찾는다 → 2) 그 요소를 바꾼다.**

### 9.1 요소 선택하기
```js
document.getElementById("hero")           // id로 하나 선택(가장 빠름, # 없이)
document.querySelector(".card")            // CSS 선택자로 첫 번째 하나
document.querySelectorAll(".card")         // CSS 선택자로 전부(NodeList로 반환)
document.getElementsByClassName("card")    // 클래스로 전부(옛날 방식, 실시간 갱신되는 HTMLCollection)
```
- **`querySelector`/`querySelectorAll`이 요즘 표준**입니다. CSS 선택자 문법(2편 3장)을 그대로 쓸 수 있어 강력합니다.
- `querySelectorAll`의 결과(NodeList)는 배열과 비슷하지만 **완전한 배열이 아닙니다.** `forEach`는 되지만 `map`/`filter`는 바로 안 될 수 있어, 필요하면 `Array.from(nodeList)`로 배열로 바꿉니다.

### 9.2 내용 바꾸기
```js
el.textContent = "새 글자";        // 순수 텍스트로 교체(HTML 태그는 글자 그대로 보임, 안전)
el.innerHTML = "<b>굵게</b>";      // HTML로 해석해서 삽입(강력하지만 위험할 수 있음, 아래 참고)
```
> **보안 주의**: `innerHTML`에 **사용자가 입력했거나 외부(API 등)에서 받은 값**을 그대로 넣으면, 그 값 안에 `<script>`나 이벤트 속성이 숨어 있을 경우 실행되어 버릴 수 있습니다(**XSS, Cross-Site Scripting**). 순수 텍스트만 넣을 거면 `textContent`가 항상 더 안전합니다. `innerHTML`을 꼭 써야 한다면(예: 여러 요소를 한 번에 삽입) 넣기 전에 `<`, `>`, `&` 같은 특수문자를 이스케이프(HTML 2.7절)하는 함수를 거치는 것이 정석입니다.

### 9.3 속성(attribute) 다루기
```js
el.setAttribute("aria-expanded", "true");
el.getAttribute("aria-expanded");     // "true"
el.removeAttribute("hidden");

el.id            // id 속성은 프로퍼티로 직접 접근 가능
el.src           // img의 src도 마찬가지
el.dataset.userId // data-user-id 속성 (11장의 data-* 복습)
```

### 9.4 클래스 다루기 — `classList`
```js
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");        // 있으면 빼고, 없으면 더함
el.classList.toggle("active", 조건);  // 조건이 true면 강제로 추가, false면 강제로 제거
el.classList.contains("active");      // true/false
```
CSS 클래스를 붙였다 뗐다 하면서 **스타일 자체는 CSS 파일에 그대로 두고, JS는 클래스 이름만 토글**하는 것이 실전에서 가장 흔한 패턴입니다(햄버거 메뉴 열림/닫힘, 다크모드 등).

### 9.5 인라인 스타일 직접 바꾸기 (자주는 안 씀)
```js
el.style.display = "none";
el.style.backgroundColor = "red";     // CSS의 background-color → 카멜케이스로
```
가능한 한 `classList`로 클래스를 토글하고 실제 스타일은 CSS에 정의하는 것을 권장합니다. `el.style`은 CSS 변수처럼 계산이 필요한 동적인 값(예: 스크롤 진행률 %)에 주로 씁니다.

### 9.6 요소 만들고 붙이기
```js
const li = document.createElement("li");
li.textContent = "새 항목";
list.appendChild(li);              // 마지막에 추가
list.prepend(li);                  // 맨 앞에 추가
list.insertBefore(li, list.firstChild);
el.remove();                       // 요소 자신을 DOM에서 제거
```

### 9.7 여러 개를 한 번에 넣는 실전 패턴: 문자열 조합 vs createElement
```js
// 방법 A: 템플릿 리터럴 + map + join (7.3절과 연결, 짧고 빠름)
grid.innerHTML = repos.map(repo => `
  <article class="card">
    <h3>${repo.name}</h3>
    <p>${repo.description ?? ""}</p>
  </article>
`).join("");

// 방법 B: createElement 반복(더 안전하지만 코드가 김)
repos.forEach(repo => {
  const card = document.createElement("article");
  card.className = "card";
  const h3 = document.createElement("h3");
  h3.textContent = repo.name;
  card.appendChild(h3);
  grid.appendChild(card);
});
```
방법 A는 코드가 짧지만 9.2절의 `innerHTML` 위험이 그대로 적용되니, 넣기 전에 값을 이스케이프해야 합니다. 방법 B는 `textContent`를 쓰므로 이스케이프가 저절로 됩니다(느리지만 안전).

### 9.8 부모·자식·형제 탐색
```js
el.parentElement
el.children             // 자식 요소들(HTMLCollection)
el.closest(".card")     // 자기 자신부터 위로 올라가며 조건에 맞는 첫 조상을 찾음
el.matches(".active")   // 이 요소가 그 선택자와 일치하는지 true/false
```
`closest`는 **이벤트 위임(10.5절)** 에서 "클릭된 게 정확히 버튼이 아니라 그 안의 아이콘이어도 버튼까지 찾아 올라가기"에 아주 유용합니다.

### 내 프로젝트에서 찾기
`main.js`에서 `querySelector`가 15번, `classList`가 16번, `dataset`이 4번, `closest`가 1번, `matches`가 1번 쓰였습니다.
- **햄버거(Journal) 메뉴**: 버튼 클릭 시 `classList.toggle`로 메뉴를 열고 닫고, `setAttribute("aria-expanded", ...)`로 접근성 상태도 함께 갱신했을 가능성이 큽니다(HTML 12장과 연결).
- **다크모드**: `document.documentElement`(즉 `<html>`)에 `data-theme` 속성을 넣고 빼는 데 `setAttribute`/`dataset`이 쓰였을 것입니다(CSS 15장의 다크모드 원리와 정확히 이어집니다).
- **카드 렌더링**: 저장소 데이터를 `innerHTML` + 템플릿 리터럴로 그리는 9.7절의 방법 A 패턴을 쓰고 있어, 최근 대화에서 짚었던 이스케이프 처리가 필요했던 지점입니다.
- **`closest`/`matches`**: 필터 버튼들을 하나하나에 이벤트를 달지 않고, 부모 요소 하나에만 이벤트를 걸고 `closest`로 실제 클릭된 버튼을 찾는 **이벤트 위임** 패턴(10.5절)에 쓰였을 가능성이 높습니다.

### 확인 질문
1. `textContent`와 `innerHTML`의 가장 큰 차이는 보안 관점에서 무엇일까?
2. `classList.toggle("active")`은 무엇을 할까?
3. `el.closest(".card")`는 무엇을 찾아줄까?

<details><summary>정답 보기</summary>

1. `textContent`는 무엇을 넣든 순수 글자로만 취급해 안전하지만, `innerHTML`은 HTML로 해석되어 악성 스크립트가 숨어 있으면 실행될 위험이 있습니다.
2. 그 요소에 `active` 클래스가 있으면 제거하고, 없으면 추가합니다.
3. 자기 자신부터 시작해서 부모 방향으로 올라가며 `.card` 클래스를 가진 가장 가까운 요소를 찾아줍니다.
</details>

---

## 10. 이벤트

**핵심**: 이벤트는 "사용자가 뭔가 했을 때(클릭, 입력, 스크롤 등) 실행할 코드를 미리 등록해두는 것"입니다.

### 10.1 기본 문법
```js
button.addEventListener("click", function(event) {
  console.log("클릭됨", event);
});

button.addEventListener("click", () => {   // 화살표 함수로(6.2절 복습)
  console.log("클릭됨");
});
```
`addEventListener(이벤트이름, 콜백함수)` 형태이며, HTML의 `onclick="..."` 속성 방식보다 실무에서 훨씬 선호됩니다(HTML과 로직을 분리할 수 있고, 같은 요소에 이벤트를 여러 개 등록 가능).

### 10.2 자주 쓰는 이벤트 종류
| 이벤트 | 발생 시점 |
| --- | --- |
| `click` | 클릭했을 때 |
| `submit` | 폼이 제출될 때(주로 `<form>`에) |
| `input` | 입력 값이 바뀔 때마다(실시간) |
| `change` | 입력을 마치고 포커스를 벗어났을 때(select, checkbox 등) |
| `keydown` / `keyup` | 키를 누르거나 뗄 때 |
| `focus` / `blur` | 포커스를 받거나 잃을 때 |
| `scroll` | 스크롤할 때 |
| `resize` | 창 크기가 바뀔 때(`window`에 등록) |
| `DOMContentLoaded` | HTML 파싱이 끝났을 때(`document`에 등록) |
| `load` | 이미지 등 리소스까지 전부 로드 완료됐을 때 |

### 10.3 `event` 객체
콜백 함수의 첫 번째 매개변수로 자동 전달되는 **이벤트 정보 객체**입니다.
```js
form.addEventListener("submit", (event) => {
  event.preventDefault();     // 폼의 기본 동작(페이지 새로고침)을 막음
  console.log(event.target);  // 실제로 이벤트가 발생한 요소
});

input.addEventListener("input", (event) => {
  console.log(event.target.value);   // 입력창의 현재 값
});
```
- `event.preventDefault()`: 브라우저의 기본 동작(폼 제출 시 새로고침, `<a>` 클릭 시 페이지 이동 등)을 막습니다. **SPA 방식의 폼 처리나 앵커 커스터마이징에 필수**입니다.
- `event.target`: 이벤트가 실제로 발생한 요소(9.8절의 `closest`와 자주 짝지어 씀).
- `event.stopPropagation()`: 이벤트가 부모로 전파되는 것을 막습니다(10.4절과 연결).

### 10.4 이벤트 버블링(bubbling)
자식 요소에서 이벤트가 발생하면, **그 이벤트는 부모 → 조상으로 계속 전달(버블링)** 됩니다.
```html
<div id="outer">
  <button id="inner">클릭</button>
</div>
```
```js
document.getElementById("outer").addEventListener("click", () => console.log("outer"));
document.getElementById("inner").addEventListener("click", () => console.log("inner"));
// 버튼을 클릭하면 콘솔에 "inner" → "outer" 순서로 찍힘
```

### 10.5 이벤트 위임(event delegation) — 버블링을 이용한 실전 패턴
```js
// 카드가 100개 있어도 리스너는 부모에 딱 하나만!
grid.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;               // 카드 바깥을 클릭했으면 무시
  console.log("클릭된 카드:", card.dataset.id);
});
```
카드 하나하나에 `addEventListener`를 반복해서 다는 대신, **부모 하나에만 리스너를 걸고** 실제로 어떤 자식이 클릭됐는지는 버블링된 `event.target`으로 판단합니다. 나중에 카드가 추가/삭제되어도(예: `map`으로 다시 그려도) 리스너를 다시 달 필요가 없다는 큰 장점이 있습니다.

### 10.6 리스너 제거하기
```js
function handleClick() { console.log("클릭"); }
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);   // 화살표 함수를 바로 등록하면 나중에 못 지움(이름 있는 함수로 등록해야 제거 가능)
```

### 내 프로젝트에서 찾기
`addEventListener`가 15번 쓰였습니다.
- 폼의 `submit` 이벤트에서 `event.preventDefault()`를 호출해 실제 페이지 이동 없이 JS로 직접 검증·처리하는 구조입니다(HTML 9.5절의 `novalidate`와 정확히 짝을 이룹니다).
- `input`/`change` 이벤트로 각 입력창의 실시간 유효성 검사를 했을 가능성이 있습니다.
- `window`의 `scroll` 이벤트로 헤더 스타일 변경과 스크롤 탑 버튼 표시(60px, 300px 기준값, CSS 10장·HTML 3편 프로젝트 문서와 연결)를 처리했을 것입니다.
- 필터 버튼들이나 카드 목록에 `closest`(9.8절)를 활용한 이벤트 위임 패턴이 쓰였을 가능성이 큽니다.

### 확인 질문
1. `event.preventDefault()`는 왜 폼 제출에서 자주 쓰일까?
2. 이벤트 버블링이란 무엇인가?
3. 카드 100개에 클릭 이벤트를 걸 때, 카드마다 리스너를 다는 것과 부모에 하나만 다는 것 중 어느 쪽이 효율적일까?

<details><summary>정답 보기</summary>

1. 폼의 기본 동작(페이지 새로고침 후 서버로 이동)을 막고, 대신 JavaScript로 값을 검증하거나 `fetch`로 직접 전송하기 위해서입니다.
2. 자식 요소에서 발생한 이벤트가 부모, 조상 요소로 순서대로 전달되는 현상입니다.
3. 부모에 하나만 다는 것(이벤트 위임)이 더 효율적입니다. 리스너 개수가 줄고, 카드가 동적으로 추가·삭제되어도 다시 등록할 필요가 없습니다.
</details>

---

## 11. 비동기 처리 (콜백 → Promise → async/await)

**핵심**: 시간이 걸리는 작업(서버 요청, 타이머 등)을 **기다리지 않고** 다음 코드를 먼저 실행한 뒤, 결과가 준비되면 나중에 처리하는 방식이 비동기입니다.

### 11.1 동기 vs 비동기
```js
console.log("1");
setTimeout(() => console.log("2"), 1000);  // 1초 뒤에 실행 예약
console.log("3");
// 출력 순서: 1 → 3 → (1초 후) 2
```
`setTimeout`을 만나도 JS는 **1초를 기다리지 않고** 바로 다음 줄(`console.log("3")`)로 넘어갑니다. 1초 후 콜백이 실행될 뿐입니다. 이것이 "동기적으로 위에서 아래로 실행되지만, 일부 작업은 나중으로 미뤄지는" JS의 핵심 동작 원리입니다.

### 11.2 콜백 지옥(callback hell) — 왜 Promise가 생겼나
```js
getUser(id, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);   // 계속 중첩되어 코드가 오른쪽으로 밀림
    });
  });
});
```
비동기 작업이 연달아 필요할 때 콜백을 계속 중첩하면 코드가 읽기 어려워집니다. 이를 해결하기 위해 **Promise**가 나왔습니다.

### 11.3 Promise — "나중에 결과가 온다"는 약속 객체
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("성공 데이터");
    } else {
      reject("실패 이유");
    }
  }, 1000);
});

promise
  .then(result => console.log("성공:", result))
  .catch(error => console.log("실패:", error))
  .finally(() => console.log("어쨌든 끝"));
```
- Promise는 **대기(pending) → 성공(fulfilled) 또는 실패(rejected)** 세 가지 상태 중 하나를 가집니다.
- `.then()`으로 성공했을 때, `.catch()`로 실패했을 때 할 일을 등록합니다.
- `.then()`을 연결(체이닝)하면 콜백 지옥의 중첩 문제가 평평해집니다.
```js
getUser(id).then(user => getPosts(user.id)).then(posts => getComments(posts[0].id)).then(console.log);
```

### 11.4 `async` / `await` — Promise를 동기 코드처럼 쓰기
```js
async function loadData() {
  const user = await getUser(id);       // Promise가 끝날 때까지 "이 함수 안에서만" 기다림
  const posts = await getPosts(user.id);
  console.log(posts);
}
```
- `async` 키워드가 붙은 함수는 **항상 Promise를 반환**합니다.
- `await`는 **Promise가 끝날 때까지 기다렸다가 결과값을 꺼내주는** 문법으로, `async` 함수 안에서만 쓸 수 있습니다.
- 겉보기엔 위에서 아래로 순서대로 실행되는 동기 코드처럼 보이지만, 실제로는 여전히 비동기입니다(다른 코드의 실행을 막지 않음).
- **실전에서는 Promise의 `.then()` 체이닝보다 `async/await`가 훨씬 많이 쓰입니다.** 읽기 쉽고, 에러 처리도 익숙한 `try/catch`(13장)를 그대로 쓸 수 있기 때문입니다.

### 11.5 async/await + try/catch 조합 (실전 표준 패턴)
```js
async function loadUser() {
  try {
    const response = await fetch("/api/user");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("불러오기 실패:", error);
  }
}
```

### 확인 질문
1. `setTimeout(fn, 1000)`을 만나면 JS는 1초를 기다렸다가 다음 줄을 실행할까?
2. `async` 함수는 무엇을 반환할까?
3. `await`는 어디서만 쓸 수 있을까?

<details><summary>정답 보기</summary>

1. 아닙니다. 바로 다음 줄을 실행하고, `fn`은 1초 후 별도로 실행됩니다.
2. 항상 Promise를 반환합니다.
3. `async` 키워드가 붙은 함수 안에서만 쓸 수 있습니다.
</details>

---

## 12. fetch와 API 통신

**핵심**: `fetch`는 브라우저가 **다른 서버에 데이터를 요청**하는 표준 함수입니다. Promise를 반환합니다.

### 12.1 기본 사용법
```js
async function loadRepos() {
  const response = await fetch("https://api.github.com/users/ewisewjd/repos");
  const data = await response.json();   // 응답 본문을 JSON(객체)으로 변환
  console.log(data);
}
```
- `fetch(주소)`는 즉시 응답이 오는 게 아니라 **"응답이 시작됐다"는 신호(Response 객체)** 를 담은 Promise를 반환합니다.
- **주의**: `fetch`는 서버가 404나 403 같은 에러 상태를 응답해도 **자동으로 실패(reject) 처리되지 않습니다.** 네트워크 자체가 끊기는 경우에만 실패로 취급됩니다. 그래서 상태 코드를 직접 확인해야 합니다.
```js
const response = await fetch(url);
if (!response.ok) {                 // response.ok는 상태 코드가 200~299일 때만 true
  throw new Error(`요청 실패: ${response.status}`);
}
```

### 12.2 HTTP 상태 코드 자주 보는 것들
| 코드 | 의미 |
| --- | --- |
| 200 | 성공 |
| 201 | 생성됨(POST 성공 등) |
| 400 | 잘못된 요청 |
| 401 | 인증 필요(로그인 안 됨) |
| 403 | 접근 금지(권한 없음, **GitHub API 요청 한도 초과도 이 코드**) |
| 404 | 찾을 수 없음 |
| 500 | 서버 내부 오류 |

### 12.3 데이터 보내기(POST)
```js
await fetch("/api/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "안흥", message: "안녕하세요" }),
});
```
- `method`: 기본은 `GET`(조회). 데이터를 보내려면 `POST`(등록), `PUT`/`PATCH`(수정), `DELETE`(삭제) 등을 씁니다.
- `headers`: 요청에 대한 부가 정보. `Content-Type: application/json`은 "본문이 JSON 형식"이라고 서버에 알리는 것.
- `body`: 실제 보낼 데이터. JS 객체를 그대로 보낼 수 없어 `JSON.stringify`로 문자열로 바꿔서 보냅니다(8.7절 복습).

### 12.4 API 요청 한도(rate limit)
GitHub API처럼 무료로 쓰는 외부 API는 보통 **일정 시간당 요청 횟수 제한**이 있습니다(인증 없는 GitHub API는 시간당 60회). 한도를 넘으면 403을 응답하는데, 이는 "권한이 없다"는 403과 겉보기엔 같은 코드라 **응답 본문의 메시지로 구분**해야 하는 경우도 있습니다.

### 내 프로젝트에서 찾기
`main.js`에서 `fetch`가 1번, `await`가 2번 쓰였습니다. GitHub API(`https://api.github.com/users/ewisewjd/repos`)를 호출해 저장소 목록을 받아오고, `response.ok` 또는 상태 코드를 확인해 **로딩 → 성공/에러/빈 상태**(README에 정리된 상태 흐름)를 전환하는 구조입니다. 이전 대화에서 짚었던 "403 요청 한도"가 바로 12.4절의 상황이고, "네트워크 끊김 시 영어 원문 노출" 문제는 `fetch` 자체가 실패(네트워크 오류)했을 때의 `catch` 블록 메시지를 직접 한국어로 바꿔서 해결한 것입니다.

### 확인 질문
1. `fetch`가 404를 응답받았을 때 자동으로 `catch`로 넘어갈까?
2. `response.json()`은 무엇을 하는 걸까?
3. POST 요청에서 `body`에 객체를 그대로 넣으면 안 되는 이유는?

<details><summary>정답 보기</summary>

1. 아닙니다. `fetch`는 네트워크 자체가 실패했을 때만 reject되므로, 상태 코드는 `response.ok`나 `response.status`로 직접 확인해야 합니다.
2. 응답 본문(텍스트)을 JS 객체로 파싱합니다(내부적으로 `JSON.parse`와 유사).
3. HTTP 요청의 body는 문자열(또는 특정 형식)이어야 하므로, JS 객체는 `JSON.stringify`로 문자열로 변환해서 보내야 합니다.
</details>

---

## 13. 에러 처리

### 13.1 `try / catch / finally`
```js
try {
  const data = JSON.parse("{ 잘못된 JSON");   // 에러 발생 지점
  console.log(data);                          // 이 줄은 실행 안 됨
} catch (error) {
  console.error("문제가 생겼습니다:", error.message);
} finally {
  console.log("성공하든 실패하든 항상 실행");
}
```
- `try` 블록 안에서 에러가 나면 그 즉시 실행을 멈추고 `catch`로 건너뜁니다.
- `error` 객체는 보통 `.message`(에러 설명), `.name`(에러 종류) 속성을 가집니다.
- `finally`는 성공하든 실패하든 항상 실행됩니다(로딩 스피너 숨기기 등 "뒷정리"에 자주 씀).

### 13.2 직접 에러 발생시키기
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다");
  }
  return a / b;
}
```
`throw`로 의도적으로 에러를 일으켜 호출한 쪽의 `catch`에서 잡게 만들 수 있습니다.

### 13.3 사용자에게 보여줄 메시지와 개발자가 볼 메시지는 다르다
```js
try {
  await loadRepos();
} catch (error) {
  console.error(error);                          // 개발자용: 상세 정보(콘솔에만)
  statusEl.textContent = "프로젝트를 불러올 수 없습니다.";  // 사용자용: 친절하고 짧은 한국어
}
```
`error.message`를 화면에 그대로 노출하면 영어 원문("Failed to fetch" 등)이나 기술적인 문구가 그대로 보여 사용자 경험을 해칩니다. **콘솔에는 상세히, 화면에는 친절하게**가 원칙입니다.

### 내 프로젝트에서 찾기
`main.js`에서 `try`/`catch`가 각 1번씩 쓰였고, `async` 함수 안에서 `fetch` 요청을 감싸는 형태입니다. 최근 대화에서 확인했던 개선 사항 — 네트워크 오류 시 영어 원문 대신 "프로젝트를 불러올 수 없습니다."라는 한국어 메시지를 보여주는 것 — 이 정확히 13.3절의 원칙을 적용한 결과입니다.

### 확인 질문
1. `try` 블록 안에서 에러가 나면 그 아래 남은 코드는 실행될까?
2. `finally`는 언제 실행될까?
3. 사용자 화면에 에러 메시지를 보여줄 때 왜 `error.message`를 그대로 쓰면 안 될까?

<details><summary>정답 보기</summary>

1. 실행되지 않고 즉시 `catch` 블록으로 넘어갑니다.
2. 성공하든 실패하든 관계없이 항상 실행됩니다.
3. 영어 원문이거나 기술 용어라서 사용자가 이해하기 어렵고 사용자 경험이 나빠지기 때문입니다. 대신 짧고 친절한 한국어 문구를 따로 보여줘야 합니다.
</details>

---

## 14. 브라우저 저장소 (localStorage 등)

**핵심**: `localStorage`는 브라우저에 **문자열 데이터를 영구적으로**(사용자가 지우기 전까지) 저장하는 공간입니다.

### 14.1 기본 사용법
```js
localStorage.setItem("theme", "dark");     // 저장
localStorage.getItem("theme");             // "dark" (없으면 null)
localStorage.removeItem("theme");          // 삭제
localStorage.clear();                      // 전부 삭제
```
- **키와 값 모두 문자열만** 저장할 수 있습니다. 객체를 저장하려면 `JSON.stringify`로 문자열로 바꿔서 저장하고, 꺼낼 때 `JSON.parse`로 되돌립니다(8.7절 복습).
```js
localStorage.setItem("user", JSON.stringify({ name: "안흥" }));
const user = JSON.parse(localStorage.getItem("user"));
```

### 14.2 `localStorage` vs `sessionStorage` vs 쿠키
| 저장소 | 유지 기간 | 용량 | 서버로 자동 전송 |
| --- | --- | --- | --- |
| `localStorage` | 사용자가 지우기 전까지 영구 | 약 5~10MB | 안 됨 |
| `sessionStorage` | 탭을 닫으면 사라짐 | 약 5~10MB | 안 됨 |
| 쿠키(cookie) | 설정한 만료일까지 | 약 4KB | **매 요청마다 자동 전송**(로그인 세션 등에 사용) |

다크모드처럼 "이 브라우저에서 계속 유지되면 좋은 설정"은 `localStorage`가 정석입니다.

### 14.3 다크모드 저장 패턴 (CSS 15.3절과 완전히 이어지는 실전 코드)
```js
const toggle = document.querySelector(".theme-toggle");
const saved = localStorage.getItem("theme");
if (saved) {
  document.documentElement.setAttribute("data-theme", saved);
}

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
```
1. 페이지가 열릴 때 저장된 테마가 있으면 즉시 적용.
2. 버튼을 클릭하면 현재 테마의 반대로 바꾸고, `<html>`의 `data-theme` 속성을 갱신.
3. 동시에 `localStorage`에 저장해 다음 방문 때도 유지.
4. CSS는 `[data-theme="dark"]` 선택자(CSS 15.3절)로 이 속성 변화를 감지해 변수 값을 바꿉니다.

### 내 프로젝트에서 찾기
`localStorage`가 2번 쓰였습니다(저장 1번, 조회 1번으로 추정). 정확히 14.3절의 패턴대로 다크모드 상태를 `data-theme` 속성 + `localStorage`로 관리하고 있고, 이는 CSS 15.3절에서 본 `:root`/`[data-theme="dark"]` 변수 전환 구조와 한 쌍을 이룹니다.

### 확인 질문
1. `localStorage`에는 숫자나 객체를 그대로 저장할 수 있을까?
2. 탭을 닫으면 사라지는 저장소는 `localStorage`, `sessionStorage` 중 어느 것일까?
3. 다크모드 설정을 저장할 때 `localStorage`가 쿠키보다 적합한 이유는?

<details><summary>정답 보기</summary>

1. 아닙니다. 문자열만 저장 가능해서, 객체는 `JSON.stringify`로 변환해야 합니다.
2. `sessionStorage`입니다.
3. 서버로 매 요청마다 자동 전송될 필요가 없는 순수 클라이언트(브라우저)측 설정이라, 불필요한 데이터 전송이 없는 `localStorage`가 더 적합합니다.
</details>

---

## 15. 클래스와 객체지향 (기초)

**핵심**: 클래스는 **비슷한 모양의 객체를 여러 개 찍어내는 설계도**입니다. 미션2(한국사 퀴즈 게임)의 `Quiz`, `QuizGame` 클래스가 이 개념입니다.

### 15.1 기본 문법
```js
class Person {
  constructor(name, age) {     // 객체가 만들어질 때 자동 실행되는 초기화 함수
    this.name = name;
    this.age = age;
  }

  greet() {                    // 메서드
    console.log(`안녕, 나는 ${this.name}`);
  }
}

const p1 = new Person("안흥", 25);   // new로 인스턴스(실제 객체) 생성
p1.greet();                          // "안녕, 나는 안흥"
```
- `constructor`: `new Person(...)`으로 만들 때 **자동으로 호출**되어 초기값을 세팅합니다.
- `this`: 클래스 메서드 안에서는 **그 인스턴스 자신**을 가리킵니다(일반 함수의 `this`, 6.2절과 연결).
- **클래스(class)** 는 설계도, **인스턴스(instance)** 는 그 설계도로 실제 찍어낸 객체입니다.

### 15.2 상속(extends)
```js
class Student extends Person {
  constructor(name, age, school) {
    super(name, age);        // 부모(Person)의 constructor 호출
    this.school = school;
  }

  greet() {                  // 부모 메서드를 재정의(오버라이드)
    super.greet();           // 부모의 greet()도 실행하고
    console.log(`${this.school}에 다닙니다`);
  }
}
```

### 15.3 클래스가 하는 일은 결국 객체와 함수의 조합
클래스는 새로운 기능이 아니라, 8장의 객체와 6장의 함수를 **더 체계적으로 묶어 여러 개를 일관되게 만들기 위한 문법**입니다. 퀴즈 문제 하나하나를 `{ question: "...", answer: "..." }` 객체로 관리할 수도 있지만, `Quiz` 클래스로 만들면 "문제를 채점한다", "정답을 보여준다" 같은 동작(메서드)을 항상 같은 방식으로 붙일 수 있습니다.

### 확인 질문
1. `constructor`는 언제 자동으로 실행될까?
2. `extends`는 무엇을 위한 키워드일까?

<details><summary>정답 보기</summary>

1. `new 클래스이름(...)`으로 인스턴스를 만드는 순간 자동으로 실행됩니다.
2. 다른 클래스의 속성과 메서드를 물려받아(상속) 재사용하기 위한 키워드입니다.
</details>

---

## 16. 모듈

**핵심**: 모듈은 JS 코드를 **여러 파일로 나누고, 필요한 것만 서로 가져다 쓰게** 하는 문법입니다.

### 16.1 기본 문법
```js
// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14;

// main.js
import { add, PI } from "./math.js";
console.log(add(1, 2), PI);
```
```html
<script type="module" src="main.js"></script>   <!-- type="module" 필수 -->
```
- `export`: 다른 파일에서 쓸 수 있게 내보내기.
- `import`: 다른 파일의 것을 가져오기.
- `type="module"`을 쓰면 자동으로 `defer`처럼 동작하고, 파일 하나가 곧 독립된 스코프(17장)가 됩니다.

### 16.2 하나의 큰 `main.js`로도 충분한 경우
작은 프로젝트는 모듈로 나누지 않고 **파일 하나에 함수들을 모아** 관리해도 무방합니다. 코드가 커지고 여러 사람이 나눠 작업하거나 재사용할 부분이 많아질 때 모듈 분리의 이점이 커집니다.

### 내 프로젝트에서 찾기
`js/main.js`는 모듈로 나누지 않고 **함수 기반으로 한 파일에 모아** 구현했습니다(코디세이 미션3에서도 "클래스 분리 없이 main.py 함수 기반"으로 택한 것과 같은 방향의 선택입니다). 현재 규모에서는 합리적인 선택이지만, 파일이 계속 커지면 "GitHub API 관련 함수", "폼 검증 관련 함수", "테마 전환 관련 함수"처럼 역할별로 여러 파일로 나누고 `import`/`export`로 연결하는 것을 고려할 수 있습니다.

---

## 17. 스코프와 클로저

### 17.1 스코프(scope) — 변수가 "보이는 범위"
```js
function outer() {
  const a = 1;
  if (true) {
    const b = 2;     // 블록 스코프: 이 { } 안에서만 유효
    console.log(a, b); // 1 2 (바깥의 a도 보임)
  }
  console.log(b);     // 에러! b는 여기서 안 보임
}
```
- `const`/`let`은 **블록 스코프**(`{ }` 단위)를 가집니다.
- `var`는 **함수 스코프**를 가져서, 블록을 무시하고 함수 전체에서 보입니다(그래서 예측하기 어려워 2.1절에서 지양한다고 했습니다).
- 안쪽 스코프는 바깥쪽 스코프의 변수를 볼 수 있지만, 그 반대는 안 됩니다.

### 17.2 클로저(closure) — 함수가 "자신이 태어난 환경"을 기억함
```js
function makeCounter() {
  let count = 0;               // 이 변수는 makeCounter 스코프에 있음
  return function() {          // 이 함수는 count를 계속 "기억"함
    count++;
    return count;
  };
}

const counter = makeCounter();
counter();   // 1
counter();   // 2
counter();   // 3
```
`makeCounter()`의 실행이 끝났는데도, 반환된 내부 함수는 여전히 `count` 변수에 접근할 수 있습니다. 이렇게 **함수가 자신이 정의될 때의 스코프(변수 환경)를 기억하는 현상**을 클로저라고 부릅니다. "비공개 변수"를 만들거나(외부에서 `count`에 직접 접근 불가), 상태를 유지하는 함수를 만들 때 활용됩니다.

## 17.3 호이스팅(hoisting) — 왜 함수는 선언보다 먼저 호출해도 되나

```js
greet();                     // 정상 동작! "안녕"
function greet() {
  console.log("안녕");
}
```
```js
console.log(x);   // undefined (에러 아님!)
var x = 5;

console.log(y);    // 에러! (Cannot access 'y' before initialization)
let y = 5;
```
- **함수 선언문**(6.1절의 방식 1)은 코드가 실행되기 전에 JS 엔진이 미리 메모리에 전부 등록해둡니다. 그래서 선언보다 위에서 호출해도 동작합니다. 이를 **호이스팅**이라 부릅니다.
- **`var`**로 선언한 변수는 "선언"만 끌어올려지고 "값 할당"은 끌어올려지지 않아, 선언 전에 읽으면 `undefined`가 나옵니다.
- **`let`/`const`**는 선언 전 구간에서 접근하면 에러가 납니다("일시적 사각지대, TDZ"). 이 덕분에 `var`보다 실수를 더 빨리 알아챌 수 있습니다.
- **실전 원칙**: 호이스팅을 활용하려고 선언 전에 쓰지 말고, **항상 선언한 다음에 사용**하는 것이 안전합니다. 이 개념은 "왜 에러가 나는지 이해하기 위해" 아는 것이지, "이렇게 쓰라"는 권장이 아닙니다.

## 17.4 엄격 모드(`"use strict"`)와 `Set`/`Map` (참고)

```js
"use strict";   // 파일 맨 위에 쓰면 이 파일 전체가 더 엄격한 규칙으로 실행됨(예: 선언 안 된 변수에 값 대입 시 에러)
```
`type="module"`로 불러온 JS 파일은 **자동으로 strict 모드**로 실행되므로, 모듈을 쓰면 따로 안 써도 됩니다.

```js
const set = new Set([1, 2, 2, 3]);   // 중복이 자동 제거됨: {1, 2, 3}
set.add(4); set.has(2);              // true

const map = new Map();
map.set("name", "안흥");
map.get("name");                     // "안흥"
```
`Set`은 "중복 없는 값들의 모음", `Map`은 "어떤 타입이든 key로 쓸 수 있는 객체"입니다(일반 객체는 key가 항상 문자열로 변환됨). 지금 당장 몰라도 배열·객체로 대부분의 일을 할 수 있지만, "중복 제거"나 "순서가 보장되는 key-value 저장"이 필요할 때 이름 정도는 떠올릴 수 있으면 좋습니다.

### 확인 질문
1. `const`와 `var`의 스코프 차이는?
2. 클로저란 한 문장으로 무엇일까?
3. 함수를 선언하기 전에 호출해도 되는 경우는 언제일까?

<details><summary>정답 보기</summary>

1. `const`는 블록(`{}`) 단위, `var`는 함수 단위로 유효 범위가 정해집니다.
2. 함수가 자신이 만들어질 때의 바깥 변수들을, 함수 실행이 끝난 뒤에도 계속 기억하고 접근할 수 있는 현상입니다.
3. `function 이름() {}` 형태의 **함수 선언문**으로 만들었을 때만입니다. 호이스팅되어 코드 실행 전에 이미 등록되기 때문입니다. 화살표 함수를 변수에 담은 경우(`const fn = () => {}`)는 안 됩니다.
</details>

---

## 18. 자주 쓰는 브라우저 API

| API | 용도 |
| --- | --- |
| `setTimeout(fn, ms)` | ms 밀리초 뒤 한 번 실행 |
| `setInterval(fn, ms)` | ms마다 반복 실행 (`clearInterval`로 중지) |
| `IntersectionObserver` | 요소가 화면(뷰포트)에 보이는지 감지(스크롤 애니메이션에 필수) |
| `window.scrollY` / `window.scrollTo()` | 현재 스크롤 위치 확인 / 이동 |
| `matchMedia("(min-width: 768px)")` | JS에서 미디어 쿼리 조건 확인 |
| `history.pushState()` | 새로고침 없이 주소 변경(SPA에서 사용) |
| `navigator.clipboard.writeText()` | 클립보드 복사 |
| `URLSearchParams` | 주소의 쿼리 스트링(`?key=value`) 파싱 |

### 18.1 `IntersectionObserver` 실전 패턴 (스크롤 등장 애니메이션)
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {           // 요소가 화면에 보이기 시작하면
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });                    // 20% 이상 보이면 발동

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
```
`scroll` 이벤트로 매번 "지금 이 요소가 보이나?"를 직접 계산하는 것보다 훨씬 성능이 좋고 코드도 간단해서, 스크롤에 맞춰 나타나는 애니메이션의 표준 방법입니다.

### 내 프로젝트에서 찾기
`IntersectionObserver`가 2번, `setTimeout`이 3번 쓰였습니다. README에 명시된 **"threshold 0.2" 기준**이 정확히 18.1절 코드의 `{ threshold: 0.2 }`이고, 각 섹션에 `visible` 같은 클래스가 붙으며 CSS의 `transition`(CSS 13장)과 결합해 "스크롤하면 서서히 나타나는" 효과를 만듭니다. `setTimeout`은 폼 제출 성공 메시지를 몇 초 뒤 사라지게 하거나, 애니메이션 타이밍을 늦추는 데 쓰였을 가능성이 있습니다.

### 확인 질문
1. `IntersectionObserver`가 `scroll` 이벤트보다 스크롤 애니메이션에 더 적합한 이유는?

<details><summary>정답 보기</summary>

`scroll` 이벤트는 스크롤할 때마다 매우 자주(초당 수십 번) 발생해 매번 위치 계산을 하면 성능 부담이 크지만, `IntersectionObserver`는 브라우저가 효율적으로 "보이는지 여부"만 알려줘 계산 비용이 훨씬 적습니다.
</details>

---

## 19. 실전 도구·디버깅

### 19.1 개발자 도구 Console 활용
```js
console.log("일반 로그", 값);
console.warn("경고");
console.error("에러");
console.table([{a:1,b:2},{a:3,b:4}]);   // 배열/객체를 표로 예쁘게
```

### 19.2 중단점(breakpoint)으로 한 줄씩 실행하기
개발자 도구의 **Sources 탭**에서 코드 줄 번호를 클릭하면 그 지점에서 실행이 멈추고, 그 시점의 모든 변수 값을 살펴보며 **한 줄씩(Step) 실행**할 수 있습니다. `console.log`를 여러 번 찍어보는 것보다 훨씬 정확한 디버깅 방법입니다.

### 19.3 자주 만나는 에러 메시지 해석
| 에러 | 의미 |
| --- | --- |
| `Uncaught TypeError: Cannot read properties of null (reading '...')` | `querySelector`가 `null`을 반환했는데 그 뒤에 속성을 읽으려 함(요소를 못 찾음, HTML 3.5절의 스크립트 위치 문제일 수 있음) |
| `Uncaught ReferenceError: x is not defined` | 선언 안 된 변수를 사용 |
| `Uncaught SyntaxError` | 문법 자체가 틀림(괄호 짝, 세미콜론 등) |
| `Assignment to constant variable` | `const`로 선언한 변수에 재할당 시도 |

### 확인 질문
1. "Cannot read properties of null"이 뜨면 가장 먼저 무엇을 의심해야 할까?

<details><summary>정답 보기</summary>

`querySelector`(또는 유사한 선택 함수)가 해당 선택자와 일치하는 요소를 찾지 못해 `null`을 반환했을 가능성입니다. 선택자 오타나, 스크립트가 요소보다 먼저 실행된 것(HTML 3.5절의 defer 관련)을 의심합니다.
</details>

---

## 20. 자주 하는 실수 체크리스트

- [ ] `==` 대신 `===`를 쓰고 있는가
- [ ] `var` 대신 `const`/`let`을 쓰고 있는가
- [ ] `map`과 `forEach`를 용도에 맞게 구분해서 쓰고 있는가(새 배열이 필요하면 map)
- [ ] 사용자/API 데이터를 `innerHTML`에 넣기 전에 이스케이프했는가
- [ ] `fetch`의 응답 상태(`response.ok`)를 확인하고 있는가
- [ ] `try/catch`의 사용자 메시지가 친절한 한국어인가(원본 에러는 콘솔에만)
- [ ] 이벤트가 많은 요소들에 개별 리스너 대신 이벤트 위임을 고려했는가
- [ ] `localStorage`에 객체를 저장할 때 `JSON.stringify`/`parse`를 썼는가
- [ ] `async` 함수 안에서 `await`를 빠뜨리지 않았는가

---

## 21. 실습 — 손으로 직접 만들며 체득하기

> 앞서 HTML·CSS로 만든 자기소개 페이지에 실제로 동작을 붙여봅니다. 콘솔에 `console.log`를 계속 찍어가며 **"지금 이 변수가 무슨 값인지"를 매 단계 눈으로 확인**하는 습관을 들이세요.

### 실습 A. 처음부터 끝까지 동작 붙이기

| 단계 | 미션 | 직접 확인할 것 |
| --- | --- | --- |
| 1 | `let count = 0;`과 카운터 버튼을 만들고, 클릭할 때마다 `count++`; 화면에 표시하세요(2·10장) | 콘솔에 매 클릭마다 `count` 값을 `console.log`로 찍어 확인 |
| 2 | 다크모드 버튼에 `classList.toggle`과 `setAttribute("data-theme", ...)`을 연결하세요(9·14장) | 개발자 도구 Elements 탭에서 `<html>`의 속성이 실제로 바뀌는지 확인 |
| 3 | `localStorage`에 테마 값을 저장하고, 페이지를 새로고침해도 유지되게 만드세요(14장) | 개발자 도구 Application 탭에서 저장된 값을 직접 확인 |
| 4 | 햄버거 메뉴 버튼에 `aria-expanded`를 `true`/`false`로 토글하는 코드를 추가하세요(9·10장, HTML 12장과 연결) | 버튼을 누를 때마다 `aria-expanded` 속성값이 바뀌는지 Elements 탭에서 확인 |
| 5 | 폼의 `submit` 이벤트에 `event.preventDefault()`를 걸고, 이름/이메일 필드가 비어 있으면 오류 메시지를 보여주는 검증 함수를 작성하세요(10·13장) | `preventDefault()`를 빼면 페이지가 새로고침되는 것을 직접 겪어본 뒤 다시 추가 |
| 6 | 아무 공개 API(예: `https://api.github.com/users/네깃허브아이디`)를 `async/await` + `fetch`로 불러와 이름과 아바타를 화면에 표시하세요(11·12장) | 인터넷을 잠깐 끄고 새로고침해 `catch` 블록이 실제로 실행되는지 확인 |
| 7 | 받아온 데이터가 여러 개(배열)라면 `map`으로 카드 HTML을 만들어 화면에 그리세요(7·9장) | 배열 데이터 하나를 `console.log`로 찍어 어떤 모양(객체 구조)인지 먼저 확인한 뒤 코드를 작성 |
| 8 | `IntersectionObserver`로 스크롤 시 섹션이 서서히 나타나는 효과를 붙이세요(18장, CSS 13장과 연결) | `threshold` 값을 0.2에서 0.8로 바꿔보고 발동 시점이 달라지는지 관찰 |

### 실습 B. 일부러 부수고 고치기
1. `fetch` 뒤에 `await`를 빼고 실행해보세요. `response`가 실제 데이터가 아니라 Promise 객체 그대로 찍히는 것을 `console.log`로 확인한 뒤 다시 `await`를 넣으세요(11.4절).
2. `try/catch` 없이 일부러 존재하지 않는 API 주소로 `fetch`를 호출해, 콘솔에 처리되지 않은 에러(Uncaught)가 빨갛게 뜨는 것을 본 뒤 `try/catch`로 감싸 정리하세요(13장).
3. `const arr = [1,2,3];` 뒤에 `arr = [4,5];`를 실행해 에러 메시지를 직접 읽어보고, 왜 나는지 설명해보세요(2.1절).
4. `map` 대신 `forEach`로 카드 HTML을 만들려고 시도해보고, 왜 안 되는지(반환값이 없어서) 직접 겪어보세요(7.2·7.3절).
5. 버튼 100개를 만들 상황을 가정하고, 각 버튼에 개별로 `addEventListener`를 다는 코드와 부모에 이벤트 위임(`closest` 활용)을 쓰는 코드를 각각 짧게 써보고 코드 줄 수를 비교하세요(10.5절).

### 실습 C. 내 프로젝트와 연결하기
네 프로젝트의 `js/main.js`를 열고, `map`이 쓰인 줄 옆에 주석으로 "이 콜백은 어떤 값을 받아서 어떤 문자열을 반환하는가"를 직접 적어보세요. 그런 다음 `fetch` 호출부터 화면에 카드가 뜨기까지의 전체 흐름을 종이에 화살표로 그려보세요(요청 → 응답 → 파싱 → map → innerHTML). 이 그림을 막힘없이 그릴 수 있으면 이 파일의 핵심 로직을 체득한 것입니다.

---

## 22. 용어 사전

| 용어 | 뜻 |
| --- | --- |
| 콜백(callback) | 나중에 실행되도록 다른 함수에 넘기는 함수 |
| Promise | 비동기 작업의 결과를 나중에 받기로 한 "약속" 객체 |
| async/await | Promise를 동기 코드처럼 읽기 쉽게 쓰는 문법 |
| 이벤트 버블링 | 이벤트가 자식에서 부모로 전파되는 현상 |
| 이벤트 위임 | 버블링을 이용해 부모 하나에만 리스너를 다는 패턴 |
| XSS | 악성 스크립트가 실행되게 만드는 보안 취약점 |
| 클로저 | 함수가 자신이 정의된 환경의 변수를 계속 기억하는 현상 |
| 스코프 | 변수가 유효한(보이는) 범위 |
| 참조(reference) | 객체·배열이 값 대신 메모리 주소로 공유되는 방식 |
| JSON | 데이터를 주고받기 위한 텍스트 기반 표준 형식 |

---

**JavaScript 편 끝.**

## 다음 단계 안내
세 편(HTML·CSS·JavaScript)을 모두 마쳤습니다. 다음 순서로 요청하신 **"프로젝트 코드에 대한 친절한 설명"** 을 진행할 수 있습니다. 이 세 자료에서 "내 프로젝트에서 찾기" 절을 표시해 둔 부분들이, 실제 코드 설명 단계에서 서로 연결되는 지점입니다.
