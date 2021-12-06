var readLineSync=require("readline-sync");
console.log("----------------");
console.log("QUIZ STARTED");
console.log("----------------");
var quizQuestion=[{
  question:"1. what is my nickname?\n a ojas \n b i don't have nickname \n c oju \n d oj ",answer: "a"},
{question:"2. What is my age ?\n a 18\n b 19\n c 21 \n d 22",answer:"d"},
{question:"3. What is my favourite color ?\n a Black \n b Red \n c forest green \n d white",answer:"a"},
{question:"4. what is my zodiac sign?\n a Libra\n b leo\n c Aries \n d cancer",answer:"a"},
{question:"5. what is my favourite food ?\n a burger \n b pizza \n c chole bhature \n d rasmalai",answer:"c"},
{question:"6. What is my eye color ?\n a black \n b brown \n c grey \n d blue",answer:"a"},
{question:"7. How many sibling I have?\n a 0\n b 1 \n c 2 \n d 3",answer:"c"},
{question:"8. What is my hair color ?\n a black \n b brown \n c grey \n d blue",answer:"a"},
{question:"9. what is my favourite season ?\n a spring \n b Winter \n c summer \n d Fall",answer:"b"},
{question:"10. what is my favourite type of music ?\n a Rock\n b Pop\n c metal \n d jazz",answer:"d"}
]
var userName=readLineSync.question("What is your name ");
console.log("welcome",userName);
console.log("Let's Play Quiz");
var score=0;
for(var i=0;i<quizQuestion.length;i++){
   console.log(quizQuestion[i].question);
   var userAnswer=readLineSync.question("Enter the correct option a/b/c/d ");
   checkans(quizQuestion[i].answer,userAnswer);
}
function checkans(answer,UserAnswer){
   if(answer===UserAnswer){
     score++;
     console.log("your answer is correct");
   }
   else{
     console.log("your answer is wrong");
   }
   console.log("Current score",score);
   console.log("----------------");
}
console.log("Your final score is",score);
var highScore=8;
var players=[
  {name:"ojasvi",score:8},{name:"devang",score:7},{name:"aditya",score:6},{name:"ashwani",score:5}
]
console.log("Other player Scores ")
for(var i=0;i<players.length;i++){
  console.log("----------------");
  console.log(players[i].name,players[i].score);
}
  console.log("----------------");
if(score>highScore){
  console.log("congratulations you have created a new high score");
  console.log("you know ojasvi really well");
}