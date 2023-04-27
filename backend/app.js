const Express=require('express')
const Bodyparser=require('body-parser')
const Cors=require('cors')

const app=Express()

app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.use(Cors())

// app.post("/employeeform",async(req,res)=>{
//     let data= new bookModel(req.body)
//     let result= await data.save()
//     res.json(result)
// })

// app.get("/",async(req,res)=>{
//     let data=await bookModel.find()
//     res.json(data)
// })

app.listen(3030,()=>{
    console.log("App is running")
})