
let str=prompt("moi nhap day so bat ky").trim();
const arr=str.split("");
let index=0;
let a=arr.length;
for(let i=0;i<a;i++){
    arr[i]=Number(arr[i]);
}
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