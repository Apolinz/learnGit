function mergeSort(arr){
    if(arr.length<2){
      return;
    }
    //设置子序列的大小
    var step=1; 
    var left,right;
    while(step<arr.length){
      left=0;
      right=step;
      while(right+step<=arr.length){
        mergeArrays(arr,left,left+step,right,right+step);
        left=right+step;
        right=left+step;
      }
      if(right<arr.length){
        mergeArrays(arr,left,left+step,right,arr.length);
      }
      step*=2;
    }
  }
  //对左右序列进行排序
  function mergeArrays(arr,startLeft,stopLeft,startRight,stopRight){
    // 建立一个左、右数组
    var rightArr=new Array(stopRight-startRight+1);
    var leftArr=new Array(stopLeft-startLeft+1);
    // 给右数组赋值
    k=startRight;
    for(var i=0;i<(rightArr.length-1);++i){
      rightArr[i]=arr[k];
      ++k;
    }
     // 给左数组赋值
    k=startLeft;
    for(var i=0;i<(leftArr.length-1);++i){
      leftArr[i]=arr[k];
      ++k;
    }
    //设置哨兵值，当左子列或右子列读取到最后一位时，即Infinity，可以让另一个剩下的列中的值直接插入到数组中
    rightArr[rightArr.length-1]=Infinity;
    leftArr[leftArr.length-1]=Infinity;
    var m=0;
    var n=0;
    // 比较左子列和右子列第一个值的大小，小的先填入数组，接着再进行比较
    for(var k=startLeft;k<stopRight;++k){
      if(leftArr[m]<=rightArr[n]){
        arr[k]=leftArr[m];
        m++; 
      }
      else{
        arr[k]=rightArr[n];
        n++;
      }
    }
  }
  // 测试数据
  var nums = prompt("input the array you want to Sort");
  nums = nums.split(",");
  mergeSort(nums);
  alert(nums);