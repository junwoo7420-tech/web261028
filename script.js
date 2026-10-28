// // document.write("외부스크립트방법")

// console.log("콘솔창에 나와야하는내용")
// var num=10+20;
// console.log(num);
// let sum=80+1234;
// console.log(sum);

// let string1="hello world";
// let string2='시네마 웹사이트 "cinema website에 오신걸 환영합니다"';
// console.log(string1);
// console.log(string2);

// let dan=3;
// let gugu=8;
// let string=`${dan}*${gugu}=${dan*gugu}`;
// console.log(string);

// let studentscore=[70,80,90,100];
// console.log(studentscore);
// console.log(studentscore[2]);

// let stdscore={
//     koreanscore:80,
//     englishscore:70,
//     mathscore:60,
//     scienescore:100
// }
// console.log(stdscore);
// console.log(stdscore.koreanscore);

// dan=2;
// for(let i=1;i<=9;i++)
// {
//     for(let j=1;j<=9;j++)
//     {
//         console.log(`${i}*${j}=${i*j}`);
//     }
//     console.log("---------------");
// }

// script.js : 내 영화 평점 통계(콘솔판) 
// 작성자 : 권준우(2651006) 

const titles = ["남자가 사랑할 때","레디 플레이 원","그린 북","메이즈 러너","악마는 프라다를 입는다"];

const ratings = [7.2, 7.5, 8.3, 7.2, 8.4];

const years = [2014, 2018, 2018, 2014, 2006];

let sum = 0;

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}

console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    if (ratings[i] >= 8) {
        count++;
    }

    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(
        titles[i] + " (" + years[i] + ") : " +
        ratings[i] + " " + label
    );
}

console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

const avgText = average.toFixed(1);
const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);
