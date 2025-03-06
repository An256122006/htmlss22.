let numbers= [2,5,7,4,1,8,6];
for(let i=0;i<7;i++){
    let search=Number(prompt("moi ban nhap so muon tim"));
    if(numbers[i]==search){
        alert('bingo');
    }else{
        alert("chuc ban may man lan sau");
    }
}