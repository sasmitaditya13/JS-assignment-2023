const cont1 = document.getElementById('container1');
const cont2 = document.getElementById('container2');
const cont3 = document.getElementById('container3');
const cont4 = document.getElementById('container4');
const cont5 = document.getElementById('container5');
const nop = document.getElementById('nop');
const img = document.getElementById('ques');
const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
const p3 = document.getElementById('player3');
const p4 = document.getElementById('player4');
const p1w = document.getElementById('p1win');
const p2w = document.getElementById('p2win');
const p3w = document.getElementById('p3win');
const p4w = document.getElementById('p4win');
const nowin = document.getElementById('none');
let gamma=0;
let c=0;
let alpha=0;
let x=2;
let y,y1=-1;
let beta=0;
nop.addEventListener('change', function handlechange(event){
    x=(nop.options[nop.selectedIndex].value);
    initarr();
})
function change1()
{
    cont1.style.display = 'none';
    cont2.style.display = 'block';
}
function change2()
{
    cont5.style.display = 'none';
    cont2.style.display = 'none';
    cont3.style.display = 'flex';
    
    xyz= setInterval(convert, timefind());
    

}

let a = [0,0,-1,-1];
let arrx = [0,0,-1,-1];
function initarr(){
if(x==2)
{
    a = [0,0,-1,-1];
    arrx = [0,0,-1,-1];
}
if(x==3)
{
    a = [0,0,0,-1];
    arrx = [0,0,0,-1];
}
if(x==4)
{
    a = [0,0,0,0];
    arrx = [0,0,0,0];
}

}
function convert(){
// clearInterval(xyz)
if(alpha!=0)
check();
do{
    y = Math.floor(Math.random()*(29));}
    while(y1==y);
img.src= y +".png";
console.log("A");
window.addEventListener("keydown",(e)=>{
        if(e.key == 'q' && a[0]==0)
        {a[0]=1;}
        if(e.key == 'c' && a[1]==0)
        a[1]=1;
        if(e.key == 'm' && a[2]==0)
        a[2]=1;
        if(e.key == 'p' && a[3]==0)
        a[3]=1;
    });
alpha++;
y1=y;
gamma++;
// xyz=setInterval(convert , timefind());
}


function check()
{
    if(x==2)
    {
        if(y>-1 && y<17)
        {
            if(a[0]!=1)
            a[0]=-2;
            else a[0]=0;
            if(a[1]!=1)
            a[1]=-2;
            else a[1]=0;
        }
        else
        {
            if(a[0]!=0)
            a[0]=-2;
            else a[0]=0;
            if(a[1]!=0)
            a[1]=-2;
            else a[1]=0;
        }
    }
    if(x==3)
    {
        if(y>-1 && y<17)
        {
            if(a[0]!=1)
            a[0]=-2;
            else a[0]=0;
            if(a[1]!=1)
            a[1]=-2;
            else a[1]=0;
            if(a[2]!=1)
            a[2]=-2;
            else a[2]=0;
        }
        else
        {
            if(a[0]!=0)
            a[0]=-2;
            else a[0]=0;
            if(a[1]!=0)
            a[1]=-2;
            else a[1]=0;
            if(a[2]!=0)
            a[2]=-2;
            else a[2]=0;
        }
    }
    if(x==4)
    {
        if(y>-1 && y<17)
        {
            if(a[0]!=1)
            a[0]=-2;
            else a[0]=0;
            if(a[1]!=1)
            a[1]=-2;
            else a[1]=0;
            if(a[2]!=1)
            a[2]=-2;
            else a[2]=0;
            if(a[3]!=1)
            a[3]=-2;
            else a[3]=0;
        }
        else
        {
            if(a[0]!=0)
            a[0]=-2;
            else a[0]=0;
            if(a[1]!=0)
            a[1]=-2;
            else a[1]=0;
            if(a[2]!=0)
            a[2]=-2;
            else a[2]=0;
            if(a[3]!=0)
            a[3]=-2;
            else a[3]=0;
        }
    }
    for(let k=0;k<4;k++){
        if(a[k]!=arrx[k]){
            arrx[k]=a[k];
            cont3.style.display="none";
            clearInterval(xyz);
            cont4.style.display="block";
            if(k==0)
            p1.style.display="block";
            if(k==1)
            p2.style.display="block";
            if(k==2)
            p3.style.display="block";
            if(k==3)
            p4.style.display="block";
        }
    }
    clearInterval(xyz);
    if(cont3.style.display == "flex")
    xyz = setInterval(convert , timefind());
}
function change4(){
    cont4.style.display ="none";
    c=0;
    for(let k=0;k<4;k++){
        if(a[k]==0)
        c++;
    }
    if(c==0)
    {
        cont4.style.display = 'none';
        cont5.style.display = 'flex';
        nowin.style.display = 'block';

    }
    if(c==1)
    {
        cont4.style.display = 'none';
        cont5.style.display = 'flex';
        if(a[0]==0)
        p1w.style.display = 'block';
        if(a[1]==0)
        p2w.style.display = 'block';
        if(a[2]==0)
        p3w.style.display = 'block';
        if(a[3]==0)
        p4w.style.display = 'block';
    }
    if(c==2)
    {
        change2();
    }
    
}
function change5(){
    if(x==2)
{
    a = [0,0,-1,-1];
    arrx = [0,0,-1,-1];
}
if(x==3)
{
    a = [0,0,0,-1];
    arrx = [0,0,0,-1];
}
if(x==4)
{
    a = [0,0,0,0];
    arrx = [0,0,0,0];
}
    img.src= "rsg.png";
    cont1.style.display='block';
    cont5.style.display='none';
    p1w.style.display = 'none';
    p2w.style.display = 'none';
    p3w.style.display = 'none';
    p4w.style.display = 'none';
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    nowin.style.display = 'none';
    gamma=0;
    alpha=0;
}
function timefind(){
    if (gamma<5)
    return 1750;
    else if (gamma<10)
    return 1500;
    else if(gamma<15)
    return 1250;
    else if(gamma<20)
    return 1000;
    else
    return 750;
}