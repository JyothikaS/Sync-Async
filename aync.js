
function icecream(makeicecream,flavour,flavours) // flavours obj
{ 
    setTimeout(()=> makeicecream(flavour), flavours.pineapple) // takes the time of pineapple
 } 
    const flavours = {
         "kiwi": 2000,
         "pineapple": 6000, 
        } 
    icecream(function (flavour,flavours)
    {console.log(`${flavour} flavoured icecream`) },"vanila",flavours)

