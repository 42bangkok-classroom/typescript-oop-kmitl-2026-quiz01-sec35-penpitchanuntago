console.log("please insert score :");
const args = process.argv;
let score = Number(args[2]);
if (score>100)
{
    console.log("Invalid Input");
}
else if(score>=80|| score<=100)
{
    console.log("A");
}else if(score>=70|| score<=79)
{
    console.log("B");
}
else if(score>=60|| score<=69)
{
    console.log("C");
}
else if(score>=50|| score<=59)
{
    console.log("D");
}
else if(score<50)
{
    console.log("F");
}
else(score<0)
{
    console.log("Invalid Input");
}

