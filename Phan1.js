//hàm câu 1
function checkVowel(str) {
  let conut = 0;
  if (typeof str === "string") {
    for (i = 0; i < str.length; i++) {
      if (
        str.substring(i, i + 1) == "a" ||
        str.substring(i, i + 1) == "e" ||
        str.substring(i, i + 1) == "i" ||
        str.substring(i, i + 1) == "o" ||
        str.substring(i, i + 1) == "u"
      ) {
        conut++;
      }
    }
    return console.log(`${str} có ${conut} nguyên âm`);
  } else
    console.log(
      "Giá trị input không phải là kiểu dữ liệu chuỗi. Mời nhập giá giá trị mới"
    );
}

//hàm câu 2
function contArr(array) {
  let result = {};
  if (!Array.isArray(array)) {
    console.log("Giá trị nhập vào không phải mảng");
  } else {
    console.log(`Mảng ${array}`);
    array.forEach((x) => {
      result[x] = result[x] || 0;
      result[x]++;
    });
    for (let key in result) {
      console.log(`Giá trị ${key} có số lần xuất hiện là ${result[key]}`);
    }
  }
}

//hàm câu 3
function reverseStr(str) {
  if (typeof str !== "string") {
    console.log("Giá trị nhập vào không phải kiểu dữ liệu chuỗi");
  }
  let s = str.split("").reverse().join("");
  console.log(`Chuỗi trước khi nghịch đảo là : ${str}`);
  console.log(`Chuỗi sau khi nghịch đảo là: ${s}`);
}

//hàm câu 4
function plusStr(str) {
  let s = str.split("_");
  if (typeof str !== "string") {
    console.log("Giá trị nhập vào không phải kiểu dữ liệu chuỗi");
  } else {
    console.log(`Chuỗi nhập vào có giá trị là: ${str}`);
    for (i = 0; i < s.length; i++) {
      s[i] =
        s[i].charAt(0).toLocaleUpperCase() + s[i].substring(1, s[i].length);
    }
    console.log(`Chuỗi sau khi chuyển đổi là: ${s.join(" ")}`);
  }
}

//hàm câu 5
function swapNumber(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Giá trị nhập vào phải thuộc kiểu dữ liệu number");
  } else {
    console.log(`Hai số trước khi đổi chỗ: a = ${a} và b = ${b}`);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`Hai số sau khi đổi chổ là: a = ${a} và b = ${b}`);
  }
}

//câu 1
var a = "aaaaaaaaa";
checkVowel(a);

//câu 2
let arr = [5, 2, 5, 5, 1, 4, 5, 2];
contArr(arr);

//câu 3
var str = "bui the thanh";
reverseStr(str);

//câu 4
var s = "user_name";
plusStr(s);

//câu 5
let num1 = 5;
let num2 = 10;
swapNumber(num1, num2);
