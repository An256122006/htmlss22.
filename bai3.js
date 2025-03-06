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
let arr2;
if(index==a){
    arr.reverse();
    arr2=arr.join("")
    document.write(arr2);
}else{
    document.write('khong hop le');
}