let choice;
let arr = [];
let a;
let up;
let up2;
do {
    choice = prompt(`
        1. Nhập vào mảng
        2. Hiển thị mảng
        3. Thêm phần tử 
        4. Sửa phần tử
        5. Xoá phần tử 
        6. Thoát`);
    switch (choice) {
        case "1":
            a = Number(prompt('moi ban nhap so phan tu muon them'));
            for (let i = 0; i < a; i++) {
                arr[i] = Number(prompt("moi ban nhap phan tu thu " + (i + 1)));
            }
            break;
        case "2":
            alert(arr);
            break;
        case "3":
            up = Number(prompt("moi ban nhap vi tri muon them"));
            up2 = prompt("moi ban nhap so muon them");
            arr.splice(up, 0, up2);
            alert(arr);
            break;
        case "4":
            up = Number(prompt("moi ban nhap vi tri muon sua"));
            up2 = prompt("moi ban nhap so muon them");
            arr[up - 1] = up2;
            alert(arr);
            break;
        case "5":
            up = Number(prompt("moi ban nhap vi tri muon xoa"));
            arr.splice((up-1),1);
            alert(arr);
            break;
        case "6":
            break;
        default:
            break;    
    }
} while (choice !== "6");