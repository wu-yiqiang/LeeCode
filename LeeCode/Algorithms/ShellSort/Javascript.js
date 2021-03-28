/*
* function:希尔排序
*
* */

var arr=[12,34,1,3,5,6,23,7,3,4,56,34,0,999,999,0,1,2,223,3,0,2,2,1,1,0,0,0,2,1,2]


function SelectionSort(array,flags) {
	//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列
	var step=setSetp(arr.length)
	var count=0
	while(step>=1){
		//需要循环次数
		for (let i=0;i<=step;i++){

			//排序
			for (let j=i;j<arr.length;j=j+step){
					for (let t=0;t<arr.length;t+=step){
						if (arr[t]>arr[t+1]){
							//交换值
							arr[t]=arr[t]^arr[t+1]
							arr[t+1]=arr[t]^arr[t+1]
							arr[t]=arr[t]^arr[t+1]
							count++
						}

					}
			}

		}

		step=setSetp(step)
	}
	console.log(count)
	return array
}

function setSetp(len){
	var lengs=len/2
	return parseInt(lengs)
}

console.log(SelectionSort(arr,true))
