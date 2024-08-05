const form = document.querySelector('form')

form.addEventListener('submit' ,function (e){
e.preventDefault();

const hei =parseInt(document.querySelector("#height").value)
const wid = parseInt(document.querySelector("#weight").value)
const res = document.querySelector("#results")
const guide = document.querySelector("#weight-guide")

if ( hei < 0 || isNaN(hei) || hei === '' )
    {res.innerHTML=`enter a valid number hei`}

else if (wid <= 0 || isNaN(wid) || wid === '' )
   { wid.innerHTML=`enter a valid number wid`}
else {

const bmi = (wid / ((hei * hei) / 10000)).toFixed(2);

res.innerHTML=`<span>${bmi}</span>`

if (bmi < 18.6)
{guide.innerText='you are underweight'}
else if (bmi >= 18.6 && bmi<= 24.9)
{guide.innerText='you are normal'}
if (bmi > 24.9)
{guide.innerText='you are overweight'
}

}
}
)
