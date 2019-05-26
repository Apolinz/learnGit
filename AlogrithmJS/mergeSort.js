function merge_sort(arr) {
  let len = arr.length
  if (len <= 1) {
    return arr
  }
  let num = Math.floor(len / 2)
  let left = merge_sort(arr.slice(0, num))
  let right = merge_sort(arr.slice(num, arr.length))
  return merge(left, right)

  function merge(left, right) {
    let [l, r] = [0, 0]
    let result = []
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l])
        l++
      } else {
        result.push(right[r])
        r++
      }
    }
    result = result.concat(left.slice(l, left.length))
    result = result.concat(right.slice(r, right.length))
    return result
  }
}

  function preSetCut(array){
    let finalResult = [];
    let prePoint = 0;
    let cutPoint = 16;

    do{
      if(cutPoint > (array.length - 16)){
        cutPoint = array.length;
      }
      let arr = array.slice(0,cutPoint);
      finalResult = finalResult.concat(merge_sort(arr));
      cutPoint += 16;
    }while(cutPoint <= array.length);
    if(cutPoint > (array.length - 16)){
      cutPoint = array.length;
    }
    return finalResult;
  }

  var arraysort = prompt("input the array you want to Sort");
  arraysort = arraysort.split(",");
  //let arr = [7, 4, 3, 67, 34, 1, 8];
  //let newArr = merge_sort(arr); // [ 1, 3, 4, 7, 8, 34, 67 ]
  let finalarr = merge_sort(arraysort);
  console.log(finalarr);