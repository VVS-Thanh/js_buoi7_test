//Hàm bt1
function sum(array) {
  let sum = 0;
  if (Array.isArray(array) === false) {
    return "Dữ liệu nhập vào phải là mảng.";
  } else {
    for (let value of array) {
      sum += value;
    }
    console.log(`Tổng các giá trị trong mảng là: ${sum}`);
  }
}

//Hàm bt2
function checkNumber(array, x) {
  let vt = 0;
  if (Array.isArray(array)) {
    for (i = 0; i < array.length; i++) {
      if (array[i] == x) {
        vt = i;
        console.log(`Phần tử ${x} có trong mảng và có vị trí là ${vt}`);
        break;
      }
    }
  } else {
    return "Dữ liệu nhập vào phải là mảng.";
  }
}

//hàm bt3
function takeArr(array, x, y) {
  let arr = [];
  if (Array.isArray(array)) {
    if (x >= 0) {
      arr = array.slice(x, y);
      if (y == "undefined") {
        arr = array.slice(x, array.length);
      }
      console.log(
        `Vị trí startPoint là ${x} và endPoint là ${y} ta được mảng như sau ${arr}`
      );
    } else {
      console.log(
        `Giá trị stratPoint phải lớn hơn hoặc bằng 0. Giá trị bạn đã nhập là ${x}`
      );
    }
  } else {
    console.log("Dữ liệu nhập vào phải là mảng. ");
  }
}

//Hàm bt4
function removeArr(array, x) {
  if (Array.isArray(array)) {
    console.log(`Mảng trước khi xoá giá trị ${x} là ${array}`);
    for (i = 0; i < array.length; i++) {
      if (array[i] == x) {
        array.splice(i, 1);
      }
    }
    console.log(
      `Giá trị ${x} đã được xoá khỏi mảng. Mảng sau khi xoá là: ${array}`
    );
  } else {
    console.log("Dữ liệu nhập vào phải là mảng.");
  }
}
//bt1
var a = [2, 3, 6, 8, 9, 23, 16];
var b = [2, 3, 6, 8, 9, 23, 16];
takeArr(a, 0);
sum(a);
console.log(a.pop(2));
//bt2
checkNumber(a, 6);

//bt3
takeArr(b, 0);

//bt4
removeArr(a, 6);
