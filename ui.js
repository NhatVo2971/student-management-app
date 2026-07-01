function renderStudents(students){
    let html = `
        <h2>Student List</h2>
        <p>Showing ${students.length} students</p>
    `;
    if(students.length === 0){
        html += `
            <p>No Students found.</p>
        `;
        document.getElementById("output").innerHTML = html;
        return;
    }
    for(let i = 0; i < students.length; i++){
        html+=`
            <div class="student-card">
                <h3>${students[i].name}</h3>
                <p>${students[i].major}</p>
                <button onclick="editStudents('${students[i].id}')">
                    Edit
                </button>
                <button onclick="deleteStudents('${students[i].id}')">
                    Delete
                </button>
            </div>
        `;
    }
    document.getElementById("output").innerHTML = html;
}
function renderDashboard(students){
    let total = students.length;
    let se = students.filter(student =>
        student.major === "Software Engineering").length;
    let ds = students.filter(student =>
        student.major === "Data Science").length;
    let cyber = students.filter(student =>
        student.major === "Cyber Security").length;
    document.getElementById("dashboard").innerHTML=`
        <h2>Dashboard</h2>
        <p>Total: ${total}</p>
        <p>Software: ${se}</p>
        <p>Data: ${ds}</p>
        <p>Cyber: ${cyber}</p>
    `;
}

function showLoading(message){
    document.getElementById("loading-message")
        .textContent = message;
}
function hideLoading(){
    document.getElementById("loading-message")
        .textContent = "";
}
function clearInputs(){
    document.getElementById("name-input").value = "";
    document.getElementById("major-input").value = "";
}
function loadingButton(){
    button.disabled = true;
    button.textContent = "Loading...";
}
function normalButton(){
    button.disabled = false;
    button.textContent = "Add Student";
}