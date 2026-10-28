// document.write("외부스크립트방법")

console.log("콘솔창에 나와야하는내용")
var num=10+20;
console.log(num);
let sum=80+1234;
console.log(sum);

let string1="hello world";
let string2='시네마 웹사이트 "cinema website에 오신걸 환영합니다"';
console.log(string1);
console.log(string2);

let dan=3;
let gugu=8;
let string=`${dan}*${gugu}=${dan*gugu}`;
console.log(string);

let studentscore=[70,80,90,100];
console.log(studentscore);
console.log(studentscore[2]);

let stdscore={
    koreanscore:80,
    englishscore:70,
    mathscore:60,
    scienescore:100
}
console.log(stdscore);
console.log(stdscore.koreanscore);

dan=2;
for(let i=1;i<=9;i++)
{
    for(let j=1;j<=9;j++)
    {
        console.log(`${i}*${j}=${i*j}`);
    }
    console.log("---------------");
}


