/*
* function:插入排序
* */

var arr=[12,34,1,3,5,6,7,3,4,56,34,0,0,1,2,223,3,0,12,2,2,3,1]
function InsertionSort(arr,flags) {
		//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列
	for (let i=1;i<arr.length;i++){
		let current=arr[i]
		let j=i-1
		while (j>=0 && flags?arr[j]<current:arr[j]>current){
			//往前移动一位
			arr[j+1]=arr[j]
			j--
		}
		arr[j+1]=current
	}
	return arr
}

console.log(InsertionSort(arr,true))
