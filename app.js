let students = [];
let currentPage = 1;
const limit = 3;
let editId = null;
let button = document.getElementById("add-btn");
button.addEventListener(
    "click",
    addStudents
)
document
.getElementById("search-input")
.addEventListener("input",function(){
    currentPage = 1;
    loadStudents();
});
document
.getElementById("sort-select")
.addEventListener("change",function(){
    currentPage = 1;
    loadStudents();
})
document
.getElementById("next-btn")
.addEventListener("click",function(){
    currentPage++;
    loadStudents();
});
document
.getElementById("prev-btn")
.addEventListener("click", function(){
    if(currentPage > 1){
        currentPage--;
        loadStudents();
    }
});
document
.getElementById("clear-btn")
.addEventListener("click", function(){
    document.getElementById("search-input").value = "";
    currentPage = 1;
    loadStudents();
})
async function loadStudents(){
    showLoading("Loading Student...");
    let keyword =
        document.getElementById("search-input").value;
    let order =
        document.getElementById("sort-select").value;
    let url =
        API
        +"?name_like="
        +keyword
        +"&_sort=name"
        +"&_order="+order
        +"&_page="+currentPage
        +"&_limit="+limit;
    students =
        await getStudents(url);
    renderStudents(students);
    renderDashboard(students);
    document.getElementById("page-number")
        .textContent = currentPage;
    hideLoading();
}
async function addStudents(){
    let name = document.getElementById("name-input").value.trim();
    let major = document.getElementById("major-input").value.trim();
    if(name === "" || major === ""){
        alert("Please fill all fields!");
        return;
    }
    if(name.length < 3){
        alert("Name must be at least 3 characters");
        return;
    }
    if(major.length < 3){
        alert("Major must be at least 3 characters");
        return;
    }
    loadingButton();
    try{
        let response;
        if(editId === null){
            response = await createStudents({
                name:name,
                major:major
            });
        }else{
            response = await updateStudents(editId,{
                id:editId,
                name:name,
                major:major
            });
            editId = null;
        }
        if(response.ok){
            alert("Success!");
            clearInputs();
            loadStudents();
        }else{
            alert("Server Error!");
        }
    }
    catch(error){
        console.log(error);
        alert("Cannot connect to server!");
    }
    finally{
        normalButton();
    }
}
async function deleteStudents(id){
    let answer = confirm("Are you sure?");
        if(answer){
        await removeStudents(id);
        loadStudents();
    }
}
function editStudents(id){
    for(let i = 0; i < students.length; i++){
        if(students[i].id == id){
            document.getElementById("name-input").value =
                students[i].name;
            document.getElementById("major-input").value =
                students[i].major;
            editId = id;
            button.textContent = "Update Student";
            break;
        }
    }
}
loadStudents();