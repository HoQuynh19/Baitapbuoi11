// Bài tập 1: Tính tổng các phần tử trong mảng
// + Cho mảng ban đầu. Tính tổng các phẩn tử trong mảng. Ví dụ:
// Input: [1,2,3]
// Ouput: 6


let arr1 = [1,2,3];

let sum = 0;

for(let i = 0; i < arr1.length; i++){
    sum += arr1[i];
}

console.log("Tổng của mảng là:" + sum);

// Bài tập 2: Tìm phần tử lớn nhất trong mảng
// + Cho mảng ban đầu. Tìm phần tử lớn nhất. ví dụ:
// Input: [1,2,3]
// Output: 3


let arr2 = [1,2,3];

let max2 = arr2[0];

for(let i = 0; i < arr1.length; i++){
    if(max2 <= arr2[i]){
        max2 = arr2[i]
    }
}
console.log("Số lớn nhất trong mảng là:" + max2);


// Bài tập 3: Tìm phần tử nhỏ nhất trong mảng
// + Cho mảng ban đầu. Tìm phần tử nhỏ nhất. ví dụ:
// Input: [10,8,2,6]
// Output: 2


let arr3 = [1,2,3];

let min3 = arr2[0];

for(let i = 0; i < arr1.length; i++){
    if(min3 >= arr3[i]){
        min3 = arr3[i]
    }
}
console.log("Số nhỏ nhất trong mảng là:" + min3);


// Bài tập 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cho mảng ban đầu, làm theo 2 cách:
// + Cách 1: Không sử dụng hàm có sẵn
// + Cách 2: Sử dụng hàm có sẵn
// Input: [1, 2, 3, 4, 5];
// Output: true/false

let arr4 = [1,2,3];
let inPut4 = +prompt("Nhập số cần kiểm tra");


//cách 1: - dùng hàm có sẵn
let outPut4 = arr4.includes(inPut4);
console.log(outPut4);

// cách 2: - dùng vòng for
let check = false;
for(let i = 0; i < arr4.length;i++){
    if(arr4[i] == inPut4){
        check = true;
        break;
    }
}
if(check){
    console.log(true);
}else{
    console.log(false);
}


// Bài tập 5: Đảo ngược giá trị trong mảng
// Input: [1, 2, 3, 4, 5]
// Ouput: [5, 4, 3, 2, 1]

let arr5 = [1, 2, 3, 4, 5,6];
// cách 1: dùng vòng lặp 
let first5 = 0;  // 0 ở đây là vị trí index của mảng dùng cho phần duyệt.
let last5 = arr5.length - 1;

while (first5 < last5) {
    let b = arr5[first5];
    arr5[first5] = arr5[last5];
    arr5[last5] = b;
    first5++;
    last5--;
}
console.log(arr5);

// cách 2: dùng hàm có sẵn của js là : reverse
arr5.reverse();
console.log(arr5);


// Bài tập 6: Lọc các phần tử chẵn trong mảng:
// Input: [1, 2, 3, 4, 5]
// Ouput: [2, 4]

let arr6 = [1, 2, 3, 4, 5];
for(let i = 0; i < arr6.length; i++){
    if( arr6[i] / 2 != 0){
        arr6.splice(i,1);
    }
}
console.log(arr6);


// Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
// + Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ. Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
// Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
// Output: 3

let arr7 = [1, 2, 3, 2, 4, 2, 5] ;

let inPut7 = +prompt("Nhập số cần kiểm tra số lần xuất hiện trong mảng arr7");

let dem = 0;
for(let i = 0; i < arr7.length;i++){
    if(inPut7 == arr7[i]){
        dem++;
    }
}
console.log("số lấn suất hiện của số" + inPut7+ "là : " +dem);

// Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
// Input: [4, 2, 9, 5, 1]
// Output: [1, 2, 4, 5, 9]

let arr8 = [4, 2, 9, 5, 1];

let trungGian;

for(let i = 0; i < arr8.length;i++){
    for(let j = i + 1; j < arr8.length + 1; j++){
        if(arr8[i] > arr8[j]){
            trungGian = arr8[i];
            arr8[i] = arr8[j];
            arr8[j] = trungGian;
        }
    }
}

console.log("mang sau khi sap xep la:" + arr8);