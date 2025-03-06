let arr=[];
let a=Number(prompt('moi ban nhap so phan tu muon them'));
for(let i=0;i<a;i++){
    arr[i]=Number(prompt("moi ban nhap phan tu thu "+(i+1)));
}
let index=0;
for(let i=0;i<a;i++){
    if(Number.isInteger(arr[i])){
         index++;
    }
}
let max=arr[0];
if(index==a){
    for(let i=0; i<a;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    alert(max);
}else{
    document.write('khong hop le');
}