let express = require('express')
let app = express()
let port = 8000
let ConectDb = require('./db/dbConection')
let User = require('./db/User')
let cors = require('cors')
let Expense = require('./db/Expense')

//MidleWare 
app.use(express.json())

// Enable the Cors 
app.use(cors())

//Registration
app.post('/register', async (req, res) => {
    try {
        let { username, password, Email, FullName} = req.body;

        // Save the user directly
        let user = new User({ username, password, Email, FullName });
        await user.save();

        res.status(201).json({ message: "Registration Successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Registration Failed" });
    }
});


//Login

    app.post('/login',async(req,res)=>{
        try {
            let {username, password, Email, FullName}= req.body  //Yaha pe req.body se client se aaya hua  username aur password destructure karke variables mein save kar rahe ho.

            let user =await User.findOne({username}) //MongoDB query jo database me username ko dhundta hai.//Agar username milta hai, toh uska pura user object user variable me save hoga.//Agar username nahi mila, toh user null hoga.


            if(!user){
                return res.status(401).json({error:'Invalid username'})
            }

        if(user.password!==password){
            return res.status(401).json({error:"Invalid usename password"})
        }
        res.status(200).json({message:'Login successful'})
    } catch (error) {
        res.status(500).json({error:'Login failed'})
    }
})


app.post('/AddExpense', async (req, res) => {
    try {
      let { ExpenseName, Amount, Date, Description } = req.body;
        console.log(req.body);
         
      let newExpens = new Expense({ ExpenseName, Amount, Date, Description });
  
      await newExpens.save();
      res.status(201).json({ message: "Expense added successfully" });
    } catch (error) {
      console.error("Error in /AddExpense endpoint:", error);
      res.status(500).json({ message: "Failed to add expense" });
    }
  });
  
//  Get Expense

app.get('/expenses',async (req,res)=>{
    try {
    let expenses = await Expense.find()   // Expense ke ander find karna tha
    res.json(expenses)
    

    } catch (error) { 
    res.status(500).json({ message: "Error fetching expenses", error: err });

    }
    
})

ConectDb()

app.listen(port,()=>{
    console.log('Server was runing on 8000 Port');
})





// // By cript wala  
// // link -- https://chatgpt.com/c/6735b8a7-0838-8010-b437-4b62fa82aa54
// // npm install bcrypt


// let express = require('express')
// let app = express()
// let port = 8000
// let ConectDb = require('./db/dbConection')
// let User = require('./db/User')

// //MidleWare 
// app.use(express.json())

// //Registration
// app.post('/register', async (req, res) => {
//     try {
//         let { username, password } = req.body;

//         // Password ko hash karna (encrypt)
//         const salt = await bcrypt.genSalt(10); // Salt generate karte hain
//         const hashedPassword = await bcrypt.hash(password, salt); // Password ko hash karte hain

//         // New user object create with hashed password
//         let user = new User({ username, password: hashedPassword });
//         await user.save(); // User data MongoDB me save hoga

//         res.status(201).json({ message: "Registration Successful" });
//     } catch (error) {
//         res.status(500).json({ error: "Registration Failed" });
//     }
// });
// //Login

// app.post('/login', async (req, res) => {
//     try {
//         let { username, password } = req.body;

//         // Username se user dhundho
//         let user = await User.findOne({ username });

//         if (!user) {
//             return res.status(401).json({ error: "Invalid credentials" }); // Generic error
//         }

//         // Password compare karo (hashed password ka plaintext se)
//         const isMatch = await bcrypt.compare(password, user.password); // bcrypt.compare()

//         if (!isMatch) {
//             return res.status(401).json({ error: "Invalid credentials" }); // Generic error
//         }

//         res.status(200).json({ message: "Login successful" });
//     } catch (error) {
//         res.status(500).json({ error: "Login failed" });
//     }
// });

// ConectDb()

// app.listen(port,()=>{
//     console.log('Server was runing on 8000 Port');
// })