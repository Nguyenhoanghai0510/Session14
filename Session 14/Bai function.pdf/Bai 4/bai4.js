function sliceArr(arr) {
    if (arr.length > 15){
        return arr.substring(0, 10) + "...";
    }
    return arr;
}
console.log(sliceArr("Xin chào Rikkei Academy"));