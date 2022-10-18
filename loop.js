//for loop

var array = [9,5,2,4,"dog","cat"]
for(var i=0; i<array.length; i++){
    console.log(array)
    console.log(i)
}

//for in 
var obj = {
    name:"AK",
    city:"chennai"
}
for (var key in obj){
    console.log(obj)
}


//for of 

var bike = ["BMW","Ninja","KTM"]
for (var index of bike){
  console.log(bike.index)
}

for (var key in bike){
   console.log(bike[key])
}