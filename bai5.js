let arr=[];
let sum1=0;
let sum2=0;
let a=Number(prompt('moi ban nhap so phan tu muon them'));
for(let i=0;i<a;i++){
    arr[i]=Number(prompt("moi ban nhap phan tu thu "+(i+1)));
    if(arr[i]%2==0){
        sum2=sum2+arr[i];
    }else{
        sum1=sum1+arr[i];
    }
}
document.write(arr);
document.write("<br>");
document.write('tong so chan la:'+sum2);
document.write("<br>");
document.write('tong so le la:'+sum1);