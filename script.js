let c;
function c_name()
{
    let f_name=document.querySelector('#f_name').value;
    let l_name=document.querySelector('#l_name').value;
    c=f_name+" "+l_name;
    document.querySelector('p span').innerHTML=c;
}
// clear
function clear()
{
    let f_name=document.querySelector('#f_name').value=" ";
    let l_name=document.querySelector('#l_name').value=" ";
    c=f_name+" "+l_name;
    document.querySelector('p span').innerHTML=c;
}
