const API = "http://localhost:3000/students";
async function getStudents(url){
    let response = await fetch(url);
    return await response.json();
}
async function createStudents(student){
    return await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(student)
    });
}
async function updateStudents(id, student){
    return await fetch(API + "/" + id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(student)
    });
}
async function removeStudents(id){
    return await fetch(API + "/" + id,{
        method:"DELETE"
    });
}