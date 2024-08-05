const anchor=document.querySelectorAll('a')

anchor.forEach( (anchor)=>{
anchor.style.textDecoration='none'
anchor.style.fontSize='20px'
anchor.style.border='2px solid purple'
anchor.style.padding='5px'
anchor.style.backgroundColor='rgb(250,250,200)'

})






const buttons=document.querySelectorAll('.button')
const selBody=document.querySelector('body')
// selBody.style.backgroundColor='pink';
buttons.forEach( function(button){
    button.addEventListener('click', function(e)
{
    if(e.target.id === 'grey')
    {
        selBody.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'pink')
    {
        selBody.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'blue')
    {
        selBody.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'yellow')
    {
        selBody.style.backgroundColor= e.target.id;
    }
})
})
