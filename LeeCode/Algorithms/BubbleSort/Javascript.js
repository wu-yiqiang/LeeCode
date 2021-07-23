/*
* function:冒泡排序
*
* */

var arr=[12,34,1,3,5,6,23,7,3,4,56,34,0,999,999,0,1,2,223,3,0,2,2,1,1,0,0,0,2,1,2]


function BubbleSort(array,flags) {
	//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列

	for (let i=0;i<array.length;i++){
		for (let j=i+1;j<array.length;j++){
			if(flags?array[i]<array[j]:array[i]>array[j]){
				array[i]=array[i]^array[j]
				array[j]=array[i]^array[j]
				array[i]=array[i]^array[j]
				count++
			}
		}
	}

	return array
}

console.log(BubbleSort(arr,false))