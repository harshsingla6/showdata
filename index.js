const express = require("express");

const app = express();

let datas = [
    {
        id: 1,
        data: "xyz",
        'location.city': "delhi",
        'location.state': "delhi",
        value: 123
    },
    {
        id: 2,
        data: "xyz",
        'location.city': "delhi",
        'location.state': "delhi",
        value: 1234
    },
    {
        id: 3,
        data: "xyz",
        'location.city': "delhi",
        'location.state': "delhi",
        value: 12345
    }, {
        id: 4,
        data: "xyz",
        'location.city': "delhi",
        'location.state': "delhi",
        value: 123456
    },
    {
        id: 5,
        data: "xyz",
        'location.city': "delhi",
        'location.state': "delhi",
        value: 1234567
    }
];
// app.get("/details", (req, res) => {
//     const valueArray = [];
//     for(const object of data){
        // for(const value in object){
            // if(value === "value") {
            //   lueArray.push(object[value]); 
            // }
        // }
//     }
//     res.json([{
//     id: 1,
//     data: "xyz",
//     'location.city': "delhi", 
//     'location.state': "delhi",
//     value: valueArray
//     }]);
//  });

app.get("/details", (req, res) => {
    const valueArray = [];
     datas =datas.map((data , index)=>{
         for(const value in data){

             if(value == "value") {
                 valueArray.push(data["value"]); 
                 console.log(valueArray)
                //   console.log(value,data[value])
                data[value]=valueArray;
            }   
        }
            // console.log(datas)
            return data
            // {
            //     data
            // }
                // value : valueArray
        })
    res.json(datas)
    })


// var ids;
// data.forEach(myfunction){
//   for(i=0,i)
// }
// if(ids === "id"){
//     console.log("err")
// }
// var arr =[1,2,3,4,5,6,7,8,9,]
// var idvalue = 1
//     for (i = 1; i <= arr.length; i++) { 
//       if(idvalue == arr[i]){
//           idvalue==arr[i]
//       }
//      }
//       console.log(i);
// const arr= [1,2,3,4,5]
// var id = 0;
// arr.forEach(function f(element){
// if(element <= arr.length){
//      id == element
// }
// else {
//     id.push(arr.element)
// }
//   })

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

// [{ id: 1, data: "xyz",
// 'location.city': "delhi", 
// 'location.state': "delhi", "value": 123 },
//  { id: 1, data: "xyz", 
//  'location.city': "delhi",
//   'location.state': "delhi",
//    "value": 1234 },]
// ];

// const dataChanger = (datas) => {
//     const valueArray = [];
//     const changedData = datas.map(data => {
//       valueArray.push(data["value"]);
//       const updatedData = Object.assign({}, data);
//         updatedData.value = valueArray;
//         return updatedData;
//     });
    
//     return changedData;
//   }