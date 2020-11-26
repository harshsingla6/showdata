const express = require("express");

const app = express();

const data = [
    {
        id: 1,
        data: "xyz",
        location: {
            city: "Delhi",
            state: "Delhi"
        },
        value: 123 
    },
    {
        id: 1,
        data: "xyz",
        location: {
            city: "Delhi",
            state: "Delhi"
        },
        value: 1234
    },
    {
        id: 1,
        data: "xyz",
        location: {
            city: "Delhi",
            state: "Delhi"
        },
        value: 12345
    }, {
        id: 1,
        data: "xyz",
        location: {
            city: "Delhi",
            state: "Delhi"
        },
        value: 123456
    },
    // {
    //     id: 1,
    //     data: "xyz",
    //     location: {
    //         city: "Delhi",
    //         state: "Delhi"
    //     },
    //     value: 1234567 
    // }
];
app.get("/details", (req, res) => {
    const valueArray = [];
    // data.forEach(myfunction){
    //   for(i=0,i)
    // }
    for(const object of data){
        for(const value in object){
            if(value === "value") {
                valueArray.push(object[value]); 
            }
        }
    }
    res.json([{
        id: 1,
        data: "xyz",
        location: {
            city: "Delhi",
            state: "Delhi"
        },
        value: valueArray
    }]);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// [{ id: 1, data: "xyz",
// location.city: "delhi", 
// location.state: "delhi", "value": 123 },
//  { id: 1, data: "xyz", 
//  location.city: "delhi",
//   location.state: "delhi",
//    "value": 1234 },]
// ];