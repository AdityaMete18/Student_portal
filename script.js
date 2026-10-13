let newData = []
fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json")
 .then(response => response.json())
 .then(data => {
    newData = data
    displayStudent(newData);
 })

function displayStudent(newData){
   let table = document.getElementById("student-body")
   table.innerHTML = "";
    
    newData.forEach(student => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${student.id}</td>

        <td>
        <img src="${student.img_src}" width="40" height="40">
        ${student.first_name} ${student.last_name}
        </td>

        <td>${student.gender}</td>

        <td>${student.class}</td>

        <td>${student.marks}</td>

        <td>${student.passing ? "Passed" : "Failed"}</td>

        <td>${student.email}</td>
        `

        table.appendChild(row);
    })
}

function sortAZ() {
    newData.sort((a,b)=>
    a.first_name.localeCompare(b.first_name)
    );
    displayStudent(newData);

}

function sortZA() {
    newData.sort((a,b)=>
    b.first_name.localeCompare(a.first_name)
    );
    displayStudent(newData);

}

function sortMark(){
    newData.sort((a,b)=>
    b.marks-a.marks
    );
    displayStudent(newData);
}

function sortClass(){
    newData.sort((a,b)=>
    a.class-b.class
    );
    displayStudent(newData);

}

function sortPassing() {
    newData.sort((a, b) =>
        b.passing - a.passing
    );
    displayStudent(newData);
}

function filterGender() {
    let gender = document.getElementById("genderSelect").value;

    if (gender === "All") {
        displayStudent(newData);
    } else {
        let filteredData = newData.filter(student =>
            student.gender.toLowerCase() === gender.toLowerCase()
        );

        displayStudent(filteredData);
    }
}

function searchStudent() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();

    let filteredData = newData.filter(student =>
        (student.first_name + " " + student.last_name)
        .toLowerCase()
        .includes(searchValue)
    );

    displayStudent(filteredData);
}