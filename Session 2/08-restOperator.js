function add(x,y)
{
    console.log(x+y)
}
add(5,10,20,30,40)


function add(...x)
{
    console.log(x)
}
add(5,10,20,30,40)

//Rest operator is used to pack the data into array
function add(a,b,...x)
{
    console.log(a,b,x)
}
add(5,10,20,30,40)