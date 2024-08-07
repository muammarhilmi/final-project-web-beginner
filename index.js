let obj1 = {
     "nama": "budi", 
     "umur": 20,
     "data": {
        "jeruk": "fhaifia",
        "khad": [
            "jofaj": "hafhihafi"
        ]
     }
    };

let obj3 = { 
    ...obj1,
    nama: "hiromiya",
    umur: 23,
    ...obj1.data,
    jeruk: "jkjkjkj"
 };

console.log(obj3)