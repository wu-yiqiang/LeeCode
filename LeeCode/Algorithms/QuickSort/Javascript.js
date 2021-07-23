/*
* function:快速排序
* */
//12,4,1,3,5,6,7,3,34,56,34
var arr=[12,12,34,1,12,3,1,45,58,100,99,7,0,5,6,7,3,4,3,56,34,45,6,7,8,9,56]
//递归法,递归法在分区形式上也能分为三种方式，1，左右指针法2.挖坑法3.前后指针法
function QuickSort(array,lefts,rights) {
	//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列
	//设置head指针tail指针
	//首先得到需要进行排序的次数
	let left=lefts;
	let right=rights;
	let middle
	if(left<right){
		//分区
		middle=partion(array,left,right)
		//左边排序
		QuickSort(array,left,middle-1)
		//右边排序
		QuickSort(array,middle+1,right)
	}
	return array
}

//分区函数
function partion(array,left,right){
	//设定基准值
	let key=array[right]
	let i=left+1
	let j=right
	while(i < j)
	{
		while(i < j && array[i] <= key)
		{
			++i;
		}
		while(i < j && array[i] >= key)
		{
			--j;
		}
		swap(array[i],array[j]);
	}
	swap(array[left],array[right]);
	return i;
}


//交换两个值
function swap(value1,value2){
	let tmp
	tmp=value1
	value1=value2
	value2=tmp
}

console.log(QuickSort(arr,0,arr.length-1))



//非递归法
function QuickSortNoRecursive(array,left,right) {



}