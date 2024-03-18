let numbers=[];
const check=()=>{
    let output="";
    const input=document.getElementById('input').value;
    numbers.push(input);
    for(let k=0;k<numbers.length;k++){
        let num=numbers[k];
        let i=0;
        let j=num.length-1;
        let ispalin=true;
        while(i<j){
            if(num.charAt(i)!=num.charAt(j)){
                ispalin=false;
            }
            i++;
            j--;
        }
        output+=`${num} is a ${ispalin==true?"":"not"} palindrome<br/>`;
    }
    document.getElementById('output').innerHTML=output;
    numbers=[];
}
const reset=()=>{
    numbers=[];
    document.getElementById('output').innerHTML="";
    document.getElementById('input').value="";
}
const next=()=>{
    const input=document.getElementById('input').value;
    numbers.push(input);
    document.getElementById('input').value="";
}