const express=require('express');
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
const port=process.env.PORT || 5000
const users =[{id:1,Name:"Mizanur Rahman",Email:'mizanakandha@gmail.com'},
{id:2,Name:"Rahim Rahman",Email:'rahim34@gmail.com'},
{id:3,Name:"Karim Rahman",Email:'karim343@gmail.com'},
{id:4,Name:"Jabbar Rahman",Email:'dfds@gmail.com'},
{id:5,Name:"Fukku Rahman",Email:'dfd@gmail.com'},]
app.get('/',(req,res)=>{
    res.send('This is your user manegment site ')
})
app.get('/user',(req,res)=>{
    res.send(users)
})
app.post('/user',(req,res)=>{
    console.log('post api hitting')
    console.log(req.body)
    const newData=req.body
    newData.id=users.length+1
    users.push(newData)
    res.send(newData)

})
app.listen(port,()=>{
    console.log(`Your Port is ranning ${port}`)
})