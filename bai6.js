let numbers= [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let a=Number(prompt("moi ban nhap so can tim:"));
let index=0;
for(let i=0;i<10;i++){
    if(numbers[i]==a){
        index++;
    }
}
if(index>0){
    alert(`so ${a} xuat hien : ${index}`);
}else{
    alert(`so ${a} khong ton tai`);
}