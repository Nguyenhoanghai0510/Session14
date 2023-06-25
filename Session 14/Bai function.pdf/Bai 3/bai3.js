let year = Number(prompt("Nhập một năm để tính ra thế kỷ"));
let centuryYear = (year) => {
    return Math.ceil(year / 100);
}
console.log("Số năm bạn vừa nhập thuộc thế kỷ: ", centuryYear(year));