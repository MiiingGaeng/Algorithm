//32 내적
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요. 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// function solution(a, b) {
//   var answer = 0;

//   for(let i=0; i<a.length; i++){
//       answer += a[i]*b[i];
//   }

//   return answer
// };

//33 약수의 개수와 덧셈
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// function solution(left, right) {
//   let answer = 0;
//   //left ~ right 반복
//   for(let i=left; i<= right; i++){
//       let count = 0;
//       //j = i의 약수
//       for(let j=1; j<=i; j++){
//           if(i%j===0){
//               count ++;
//           }
//       }

//       //약수의 수 = 짝수 조건문
//       (count % 2 === 0) ? answer+=i : answer-=i;
//   }

//   return answer
// }

// 다른사람 풀이 = 제곱근이 정수면 약수의 개수가 홀수

//34 문자열 내림차순으로 배치하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// function solution(s) {
//   return s.split('').sort().reverse().join('');
// }

//split = 나눠서 배열만들기
//sort = 오름차순 정렬
//reverse = 반대로 정렬(즉, 내림차순)
//join = 문자열로 합치기

//35 부족한 금액 계산하기
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다. 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요. 단, 금액이 부족하지 않으면 0을 return 하세요.

// function solution(price, money, count) {
//   let totalPrice = 0;

//   for(let i=1; i <= count; i++){
//       totalPrice += price * i;
//   }

//   //조건문 추가!
//   if(totalPrice > money){
//    return parseInt(totalPrice - money);
//   } else{
//   return 0;
//   }
// }

//36 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

//왜 안되지...
// function solution(s) {
//   if(s.length == 4 || s.length == 6){
//     return !Number.isNaN(Number(s))
//   }else{
//     return false;
//   }
// };
//e = 자연상수 (Math.E) 값으로 인식된다
//그래서 '12e1'가 true로 떠서 실패

// function solution(s) {
//   if(s.length == 4 || s.length == 6){
//     var answer = true;
//     var arr = s.split('');

//     for(let i=0; i<arr.length; i++){
//       if(Number.isNaN(Number(arr[i])) === true){
//         answer = false;
//         break;
//       }
//     }

//     return answer;
//   } else {
//     return false;
//   }
// }

//37 행렬의 덧셈
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// function solution(arr1, arr2) {
//   var answer = [];

//   //arr1,2의 배열(index i) 불러오기
//   for (let i = 0; i < arr1.length; i++) {
//     let test = [];
//     //arr1,2의 배열(index i)의 인덱스 값(index j) 불러오기
//     for (let j = 0; j < arr1[i].length; j++) {
//       test.push(arr1[i][j] + arr2[i][j]);
//     }
//     answer.push(test);
//   }

//   return answer;
// }

//38 직사각형 별찍기
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다. 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', (data) => {
//   //data = n,m
//   const num = data.split(' ');
//   //n과 m 값을 숫자로
//   const a = Number(num[0]),
//     b = Number(num[1]);

//   //세로값(m) 반복
//   for (let i = 0; i < b; i++) {
//     //가로값(n)만큼 별 출력
//     console.log('*'.repeat(a));
//   }
// });

//39 최대공약수와 최대공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// function solution(n, m) {
//   //유클리드 호제법
//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//   const lcm = (a, b) => (a * b) / gcd(a, b);
//   return [gcd(n, m), lcm(n, m)];
// }

//40 3진법 뒤집기
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   //3진수 배열 만들고 뒤집고 합체
//   var arrN3 = [...n.toString(3)];
//   var revN3 = arrN3.reverse().join('');

//   //3진수를 10진수로 만들기
//   return parseInt(revN3, 3);
// }

//과제1 문자열 연습하기
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// function solution(s) {
//   var arrS = s.toLowerCase().split('');
//   var numP = arrS.filter((item) => item === 'p');
//   var numY = arrS.filter((item) => item === 'y');

//   if (numP.length === 0 && numY.length === 0) {
//     return true;
//   } else if (numP.length === numY.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

//과제2 반복문,조건문 연습
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// function solution(abs, signs) {
//   var answer = 0;

//   for (let i = 0; i < abs.length; i++) {
//     if (signs[i] === true) {
//       answer += abs[i];
//     } else {
//       answer -= abs[i];
//     }
//   }

//   return answer;
// }

//41 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

//first try = fail
//문장의 인덱스가 아닌 단어별 인덱스로 리턴해야함
// function solution(s) {
//   var arrS = s.split('');

//   for (let i = 0; i < arrS.length; i++) {
//     if (i % 2 === 0) {
//       var upperS = arrS[i].toUpperCase();
//       arrS.splice(i, 1, upperS);
//     } else {
//       var lowerS = arrS[i].toLowerCase();
//       arrS.splice(i, 1, lowerS);
//     }
//   }

//   return arrS.join('');
// }

//second try
// function solution(string) {
//   let answer = [];
//   let words = string.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     let word = [];
//     for (let j = 0; j < words[i].length; j++) {
//       word.push(j % 2 === 0 ? words[i][j].toUpperCase() : words[i][j].toLowerCase());
//     }
//     answer.push(word.join(''));
//   }
//   return answer.join(' ');
// }

//42 삼총사
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다. 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// function solution(number) {
//   let count = [];

//   for (let i = 0; i < number.length - 2; i++) {
//     for (let j = i + 1; j < number.length - 1; j++) {
//       for (let k = j + 1; k < number.length; k++) {
//         if (number[i] + number[j] + number[k] === 0) {
//           count.push([number[i], number[j], number[k]]);
//         }
//       }
//     }
//   }

//   return count.length;
// }

//43 크기가 작은 문자열
//숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// function solution(t, p) {
//   let answer = [];
//   let numP = Number(p);
//   let pLth = p.length;
//   let tLth = t.length;

//   //tLth - pLth + 1 하는 이유 = tLth 마지막 글자까지 i가 도는걸 방지
//   for (let i = 0; i < tLth - pLth + 1; i++) {
//     let sliceT = t.slice(i, i + pLth);
//     let numT = Number(sliceT);

//     if (numT <= numP) {
//       answer.push(numT);
//     }
//   }

//   return answer.length;
// }

//44 최소직사각형
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다. 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// function solution(sizes) {
//   let arrW = [];
//   let arrH = [];
//   let arrS = [];

//   for (let i = 0; i < sizes.length; i++) {
//     arrS[i] = sizes[i].sort((a, b) => b - a);
//     arrW.push(arrS[i][0]);
//     arrH.push(arrS[i][1]);
//   }

//   return Math.max(...arrW) * Math.max(...arrH);
// }

//45 시저암호
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// function solution(s, n) {
//   const low = 'abcdefghijklmnopqrstuvwxyz';
//   const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   let arrS = s.split('');
//   let answer = [];

//   for (let i = 0; i < arrS.length; i++) {
//     let char = arrS[i];
//     if (low.includes(char)) {
//       const lowIndex = (low.indexOf(char) + n) % 26;
//       answer.push(low[lowIndex]);
//     } else if (up.includes(char)) {
//       const upIndex = (up.indexOf(char) + n) % 26;
//       answer.push(up[upIndex]);
//     } else {
//       answer.push(' ');
//     }
//   }

//   return answer.join('');
// }

//45 숫자 문자열과 영단어
//네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

//테스트는 통과/결과는 실패
// function solution(s) {
//   var numToEng = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eigth',
//     'nine',
//   ];

//   for (let i = 0; i < 10; i++) {
//     if (s.includes(numToEng[i])) {
//       //replaceAll에서 일치항목을 찾기 때문에 if문이 필요 없다.
//       s = s.replaceAll(numToEng[i], i);
//     }
//   }

//   return Number(s);
// }

//해결
// function solution(s) {
//   var numToEng = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//   ];

//   for (let i = 0; i < 10; i++) {
//     s = s.replaceAll(numToEng[i], i);
//   }

//   return Number(s);
// }

//과제3 문자열 내 마음대로 정렬하기
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// function solution(strings, n) {
//   let answer = [];
//   let arr = [];

//   //strings 요소 word 찾기
//   strings.forEach((word) => {
//     //word에 n번째 글자 찾기
//     let wordChar = word.charAt(n);
//     //해당인덱스 글자 앞에 붙이기
//     let indexWord = wordChar.concat(word);
//     arr.push(indexWord);
//   });
//   //정렬하기
//   arr = arr.sort();
//   //앞글자 삭제하기
//   arr.forEach((s) => {
//     let answerW = s.substring(1);
//     answer.push(answerW);
//   });

//   return answer;
// }

//다른사람의 답변
// function solution(strings, n) {
//   // strings 배열
//   // n 번째 문자열 비교
//   return strings.sort((s1, s2) =>
//     s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
//   );
// }

//프로그래머스 2일차
//배열 두배 만들기
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
//   let answer = [];
//   numbers.forEach((number) => {
//     answer.push(number * 2);
//   });

//   return answer;
// }

//프로그래머스 3일차
//나머지 구하기
//정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// function solution(num1, num2) {
//   return num1 % num2;
// }

//과제4 나이든 유저
// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요

// var user = {
//   name: 'john',
//   age: 20,
// };

// var getAged = function (user, passedTime) {
//   //빈 객체 생성 후 user 객체 복사
//   let other = {};
//   for (let index in user) {
//     other[index] = user[index];
//   }

//   //other유저의 나이에 passedTime 더하기
//   other.age += passedTime;
//   //더한 나이의 유저 반환
//   return other;
// };

// var agedUser = getAged(user, 6);

// var agedUserMustBeDifferentFromUser = function (user1, user2) {
//   if (!user2) {
//     console.log("Failed! user2 doesn't exist!");
//   } else if (user1 !== user2) {
//     console.log(
//       'Passed! If you become older, you will be different from you in the past!'
//     );
//   } else {
//     console.log('Failed! User same with past one');
//   }
// };

// agedUserMustBeDifferentFromUser(user, agedUser);

//48 K번째수
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다. 2에서 나온 배열의 3번째 숫자는 5입니다. 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// function solution(array, commands) {
//   let answer = [];

//   commands.forEach((command) => {
//     let i = command[0] - 1;
//     let j = command[1];
//     let k = command[2] - 1;

//     let sliceArr = array.slice(i, j).sort((a, b) => a - b);
//     //sort()만 쓸 경우 문자열로 변환해서 정렬하기 때문에 오류가 발생할 수 있다.
//     //즉, [2, 3, 10]이 아닌 [10, 2, 3]으로 정렬될 가능성이 있다.
//     //따라서 정렬기준 함수를 같이 작성해주는 것이 더 정확하다.
//     answer.push(sliceArr[k]);
//   });

//   return answer;
// }

//프로그래머스 3일차
//중앙값 구하기
//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// function solution(array) {
//   array = array.sort((a, b) => a - b);
//   let centerNum = Math.round(array.length / 2);

//   return array[centerNum - 1];
// }

// //한줄로 줄여보기!
// function solution(array) {
//   return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }

//최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// function solution(array) {
//   if (array.length <= 1) return array[0];

//   const obj = {};
//   const answer = [];

//   //obj에 key=해당숫자 / value=개수 쌍 넣기
//   array.forEach((num) => {
//     obj[num] = ++obj[num] || +1;
//   });
//   //obj key-value 객체로 넣기
//   for (let key in obj) {
//     answer.push([key, obj[key]]);
//   }
//   //answer 개수 많은 순으로 정렬
//   answer.sort((a, b) => b[1] - a[1]);
//   //최빈값 여러개일 때 -1 반환
//   if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;
//   //최빈값 1개일 때 해당숫자 반환
//   return Number(answer[0][0]);
// }

//짝수는 싫어요
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   var answer = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       answer.push(i);
//     }
//   }

//   return answer;
// }

//과제5 어떤 매치가 성사될까
// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// var fullname = 'Ciryl Gane';

// var fighter = {
//   fullname: 'John Jones',
//   opponent: {
//     fullname: 'Francis Ngannou',
//     getFullname: function () {
//       console.log(this); //{ opponent }
//       return this.fullname;
//     },
//   },

//   getName: function () {
//     console.log(this); //{ fighter }
//     return this.fullname;
//   },

//   getFirstName: () => {
//     console.log(this); //{ window }
//     return this.fullname.split(' ')[0];
//   },

//   getLastName: (function () {
//     return this.fullname.split(' ')[1];
//   })(),
// };

// console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
// console.log(
//   'It is',
//   fighter.getName(),
//   'VS',
//   fighter.getFirstName(),
//   fighter.getLastName
// );

//출력결과
// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane

//이유
// fighter.opponent.getFullname() = Francis Ngannou
// getFullname()은 opponent의 메서드로 호출됐기 때문에, opponent의 fullname의 value인 'Francis Ngannou'를 반환한다.

// fighter.getName() = John Jones
// getName() 또한 fighter의 메서드로 호출됐기 때문에, fighter의 fullname의 value인 'John Jones'를 반환한다.

// fighter.getFirstName() = Ciryl
// 화살표 함수는 this 바인딩을 하지 않는다. 즉, 화살표 함수의 this는 상위의 this를 바라보기 때문에, getFirstName의 this는 전역객체를 바인딩한다. 따라서 getFirstName()은 'Ciryl'을 반환한다.

// fighter.getLastName = Gane
// fighter는 getLastName의 호출주체가 아니기 때문에, getLastName의 함수는 함수로서 호출되었다. 즉, getLastName의 this는 전역객체를 바인딩하기 때문에 'Gane'을 반환한다.

//49 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
//   //중복값 없애기 = Set 활용
//   let answer = new Set();

//   //[i] + [j] 더한 값 set에 add하기
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       answer.add(numbers[i] + numbers[j]);
//     }
//   }

//   //set을 배열로 만들기 + 정렬
//   return Array.from(answer).sort((a, b) => a - b);
// }

//프로그래머스 4일차
//세균증식
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// function solution(n, t) {
//   for (let i = 1; i <= t; i++) {
//     n *= 2;
//   }

//   return n;
// }

// //다른사람 풀이
// function solution(n, t) {
//   return n * Math.pow(2, t); // Math.pow(2, t)는 2의 t승을 계산하는 함수
// }

//양꼬치
//머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

// function solution(n, k) {
//   let totalDrinks = 0;
//   let howMany = Math.floor(n / 10);

//   n >= 10 ? (totalDrinks = k - howMany) : (totalDrinks = k);

//   return n * 12000 + totalDrinks * 2000;
// }

// //다른사람 풀이
// function solution(n, k) {
//   return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
// }

//편지
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

// function solution(message) {
//   return 2 * message.length;
// }

//문자열 뒤집기
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// function solution(string) {
//   let arr = string.split('');
//   return arr.reverse().join('');
// }

// //한줄로 작성해보기
// function solution(string) {
//   return string.split('').reverse().join('');
// }

//순서쌍의 개수
//순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) arr.push(i);
//   }

//   return arr.length;
// }

//50 가장 가까운 같은 글자
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.
// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// function solution(string) {
//   let answer = [];
//   let arrS = string.split('');

//   for (let i = 0; i < arrS.length; i++) {
//     let slicedS = arrS.slice(0, i);
//     //slice는 바로 앞까지만 잘린다는걸 잊지말자!!!
//     let lastIndex = slicedS.lastIndexOf(arrS[i]);
//     answer.push(lastIndex === -1 ? lastIndex : slicedS.length - lastIndex);
//   }

//   return answer;
// }

//5일차
//배열 원소의 길이
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(strlist) {
//   let answer = [];
//   strlist.forEach((word) => {
//     answer.push(word.length);
//   });

//   return answer;
// }

//점의 위치 구하기
// function solution(dot) {
//   let sign1 = Math.sign(dot[0]);
//   let sign2 = Math.sign(dot[1]);

//   if (sign1 === 1 && sign2 === 1) {
//     return 1;
//   } else if (sign1 === 1 && sign2 === -1) {
//     return 4;
//   } else if (sign1 === -1 && sign2 === 1) {
//     return 2;
//   } else {
//     return 3;
//   }
// }

// //다른 사람 풀이
// function solution(dot) {
//   return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
// }
// //삼항연산자 중첩으로 사용 가능!!

//모음 제거
// function solution(string) {
//   let answer = [];
//   const vowel = ['a', 'e', 'i', 'o', 'u'];
//   string = [...string];
//   string.filter((char) => {
//     if (!vowel.includes(char)) answer.push(char);
//   });

//   return answer.join('');
// }
// //필터 제대로 써먹지 못함..ㅠ

// //다른 사람 풀이
// function solution(my_string) {
//   return Array.from(my_string)
//     .filter((t) => !['a', 'e', 'i', 'o', 'u'].includes(t))
//     .join('');
// }

// 51 푸드파이터 대회
// 수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다. 이 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다. 대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. 중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
// 이때, 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양이 같아야 하며, 음식을 먹는 순서도 같아야 합니다. 또한, 이번 대회부터는 칼로리가 낮은 음식을 먼저 먹을 수 있게 배치하여 선수들이 음식을 더 잘 먹을 수 있게 하려고 합니다. 이번 대회를 위해 수웅이는 음식을 주문했는데, 대회의 조건을 고려하지 않고 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다.
// 예를 들어, 3가지의 음식이 준비되어 있으며, 칼로리가 적은 순서대로 1번 음식을 3개, 2번 음식을 4개, 3번 음식을 6개 준비했으며, 물을 편의상 0번 음식이라고 칭한다면, 두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개씩을 먹게 되므로 음식의 배치는 "1223330333221"이 됩니다. 따라서 1번 음식 1개는 대회에 사용하지 못합니다.
// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

// function solution(food) {
//   let answer = '';

//   for (let i = 0; i < food.length; i++) {
//     //2로 나눈 몫 = count 숫자 구하기
//     let count = Math.floor(food[i] / 2);
//     for (let j = 0; j < count; j++) {
//       //j(count)개 만큼 i(123)추가
//       answer += i;
//     }
//   }
//   //문자열 뒤집어서 붙이기
//   let reverse = answer.split('').reverse().join('');
//   return answer + '0' + reverse;
// }

// //다른 사람 풀이

// function solution(food) {
//   let answer = '';
//   for (let i = 0; i < food.length; i++) {
//     let count = Math.floor(food[i] / 2);
//     answer += i.toString().repeat(count);
//   }

//   return answer + 0 + [...answer].reverse().join('');
// }

//6일차
//배열 뒤집기
//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(num_list) {
//   return num_list.reverse();
// }

//배열 자르기
//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// function solution(numbers, num1, num2) {
//   return numbers.slice(num1, num2 + 1);
// }

//특정 문자 제거하기
//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// function solution(my_string, letter) {
//   return my_string.replaceAll(letter, '');
// }

//피자 나눠 먹기 3
//머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// function solution(slice, n) {
//   return Math.ceil(n / slice);
// }

//머쓱이보다 키큰 사람
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// function solution(array, height) {
//   const taller = [];
//   array.forEach((arr) => {
//     if (arr > height) taller.push(arr);
//   });

//   return taller.length;
// }

//중복된 숫자개수
//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// function solution(array, n) {
//   const answer = [];
//   array.filter((num) => {
//     if (num === n) answer.push(num);
//   });

//   return answer.length;
// }

//피자 나눠 먹기 1
//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// function solution(n) {
//   return Math.ceil(n / 7);
// }

//옷가게 할인 받기
//머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

// function solution(price) {
//   return price >= 500000
//     ? parseInt(price * 0.8)
//     : price >= 300000
//     ? parseInt(price * 0.9)
//     : price >= 100000
//     ? parseInt(price * 0.95)
//     : price;
// }

//과제6
//아래의 코드를 async/await 로 리팩토링 하기

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// //리팩토링 부분
// async function loadJson(url) {
//   const response = await fetch(url);

//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// async function koreanMovie() {
//   let res;
//   while (true) {
//     try {
//       res = await loadJson(
//         `https://klassic-quote-api.mooo.com/v1/random-quote`
//       );
//       break;
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('무언가 에러가 발생했군요!');
//         return koreanMovie();
//       } else {
//         throw err;
//       }
//     }
//   }

//   alert(`${res.author}: ${res.quote}`);
//   return res;
// }

// koreanMovie();

//52 콜라 문제
// 오래전 유행했던 콜라 문제가 있습니다. 콜라 문제의 지문은 다음과 같습니다.
// 정답은 아무에게도 말하지 마세요.
// 콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
// 단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.

// 문제를 풀던 상빈이는 콜라 문제의 완벽한 해답을 찾았습니다. 상빈이가 푼 방법은 아래 그림과 같습니다. 우선 콜라 빈 병 20병을 가져가서 10병을 받습니다. 받은 10병을 모두 마신 뒤, 가져가서 5병을 받습니다. 5병 중 4병을 모두 마신 뒤 가져가서 2병을 받고, 또 2병을 모두 마신 뒤 가져가서 1병을 받습니다. 받은 1병과 5병을 받았을 때 남은 1병을 모두 마신 뒤 가져가면 1병을 또 받을 수 있습니다. 이 경우 상빈이는 총 10 + 5 + 2 + 1 + 1 = 19병의 콜라를 받을 수 있습니다.
// 문제를 열심히 풀던 상빈이는 일반화된 콜라 문제를 생각했습니다. 이 문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다. 기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. 상빈이는 열심히 고심했지만, 일반화된 콜라 문제의 답을 찾을 수 없었습니다. 상빈이를 도와, 일반화된 콜라 문제를 해결하는 프로그램을 만들어 주세요. 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

function solution(a, b, n) {
  var count = 0;

  //빈병으로 못 바꿀 때까지 반복
  while (n >= a) {
    let quotient = Math.floor(n / a); //몫
    let get = b * quotient; //바꾼 콜라병의 수

    //전체 개수 = 총 - 바꾼 빈병 개수 + 바꾼 콜라병
    n = (n % a) + get;
    count += get;
  }

  return count;
}