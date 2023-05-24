
const express = require('express')
const app = express()
app.use(express.json());
const port = 3000;
const cust=[
    {
        "title":"ccc","id":1
    },
    {
        "title":"kumar","id":2
    },
    {
        "title":"dhanu","id":3
    },
    {
        "title":"ashwin","id":4
    }
]
app.get('/1',(req,res) => {
    res.send("hii broo");
});
//get all details
app.get('/2',(req,res) => {
    res.send(cust);
}); 
//get one details by id
app.get('/3/:id',(req,res) => {

   const a= (cust.find(c=>c.id===parseInt(req.params.id)));
   if(!a) res.status(404).send(`id not found in database`);
   res.send(a);
   
});
//create data or insert data
app.post('/4',(req,res) => {

const customer={
    id:req.body.id, 
    title:req.body.title

};
cust.push(customer);
res.send(cust);


});
//update
app.put('/5/:id',(req,res) => {

    const a= (cust.find(c=>c.id===parseInt(req.params.id)));
    if(!a) res.status(404).send(`id not found in database`);
    a.title=req.body.title;
    res.send(cust);   
 });
 //delete 
app.delete('/6/:id',(req,res) => {

    const a= (cust.find(c=>c.id===parseInt(req.params.id)));
    if(!a) res.status(404).send(`id not found in database`);
    const index=cust.indexOf(cust);
    cust.splice((index+1),1);
    res.send(cust);
    
 });
//validate information
// function validateCustomer(customer) {
//     const schema={
//         tit 
//     }
// }
//port environment
// const port=process.env.port||8080;
// app.listen(port,()=>console.log(`listening to port ${port}`));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })