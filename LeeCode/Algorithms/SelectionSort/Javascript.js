/*
* function:选择排序
*
* */

var arr=[12,34,1,3,5,6,7,3,4,56,34,0,0,1,2,223,3]


function SelectionSort(array,flags) {
	//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列
	for(let i=0;i<array.length-1;i++){
		//每次循环
		let minindex=i
		for (let j=i+1;j<array.length;j++){
			if(flags?array[minindex]<array[j]:array[minindex]>array[j]){
				minindex=j
			}
		}

		//交换本轮循环中查找到符合要求的元素
		let tmp
		tmp=array[i]
		array[i]=array[minindex]
		array[minindex]=tmp

	}
	return array
}

console.log(SelectionSort(arr,true))

