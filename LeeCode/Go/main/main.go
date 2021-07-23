package main

import (
	"fmt"
	_"net/http"
	"reflect"
	"encoding/json"
)

func main() {
	var x int = 124
	var y int =21
	swap(&x,&y)
	
	var Num float64=1.453343

	reflectNum(Num)

	user:=User{1,"nacy",16}
	DoFiledAndMethod(user)

	movie:=Movie{"半折直树",2011,60,[]string{"jieyare","xiangchuan"}}
	jsonstr,err:=json.Marshal(movie)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("json=",jsonstr)

	//反序列化
	myMovie:=Movie{}
	err=json.Unmarshal(jsonstr,&myMovie)
	if err!= nil {
		fmt.Println("failed")
	}

	fmt.Println(myMovie)


}

type Movie struct {
	Title string  `json:"Title"`
	Year int `json:"Year"`
	Price int	`json:"Rmb"`
	Actors []string  `json:"ActList"`
}





func reflectNum(arg interface{}){
	fmt.Println("tyepe:",reflect.TypeOf(arg),"value=",reflect.ValueOf(arg))
}

type User struct {
	Id int
	Name string
	Age int
}

func (this *User) Call(){
	fmt.Println("user is called")
	fmt.Println("%s\n",this)
}


func DoFiledAndMethod(input interface{}){
	inputTYpe:=reflect.TypeOf(input)
	inputValue:=reflect.ValueOf(input)
	fmt.Println("value=",inputValue,"type=",inputTYpe.Name())
}

func swap(aa *int,bb *int){
	
	tmp:=*aa

	*aa=*bb
	*bb=tmp

}


func dis(){
	
}
//创建链表
/*func CreateLinkList(array){
	fmt.Print("asd")
}

//删除链表
func DeleteLinkList(array ,num){
	fmt.Print("asd")
}

//链表判空
func EmptyLinkList(array){
	fmt.Print("asd")
}

//添加节点
func AddNode(array,Num)  {
	fmt.Print("asd")
}*/
