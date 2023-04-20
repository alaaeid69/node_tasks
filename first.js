import express from "express";
const app =express ();

const students =[
    "alaa",
    "eid",
    "amr",
    "abeer",
    "hana",
    "amina"
];
const studentFunction =(req , res ) =>{
    let out ="<ul>";
    for ( let i = 0; i <students.length ;i++){
     const student =students[i];
     out +="<li>" + student + "</li>";
   }
   out+= "</ul>";
   res.send(out)

};
app.get('/students', studentFunction);
app.listen(5000);
