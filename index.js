// Code your solutions in this file
function writeCards(arr, string)
{
    let newArr = [];
    for(let i = 0; i <arr.length; i++)
    {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${string} gift!`);
    }
    return newArr;
}

function countDown(num)
{
    while(num > -1)
    {
        console.log(num);
        num--;
    }
} 