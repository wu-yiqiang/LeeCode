var num=new Array()
nums=[3,0,1]
var lens=nums.length
var newarry=new Array(nums.length+1)
for (var i=0;i<lens;i++){
    newarry.splice(nums[i],0,nums[i]);
    /* newarry[nums[i]-1]=num[i];*/
    alert(newarry)
    /*.push(nums[i])*/
}
/*将数组中为空的位置找出来*/
for (var j=0;j<newarry.length;j++){
    if(newarry[j]==null){
        //alert(j+1)
    }
}