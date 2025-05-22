//singleton
//objects literals
//Object.create

const mySym = Symbol("key1")

 //objects literals
 const JsUser = {
    name: "Rahul",
    "full name" : "Rahul Ponde",
    [mySym] : "mykey1",
    // mySym : "mykey1",
    age:18,
    location: "Jaipur",
    email: "rahul@google.com",
    isLoggedIN: false,
    lastloginDays: ["Monday", "Saturday"]
 }

 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])
//  console.log(typeof JsUser.mySym)

