var row = 1;
   var submit = document.getElementById("submit");
   submit.addEventListener("click",displayDetails);

  

    function displayDetails() {
    var name = document.getElementById("name").value;
    var cname = document.getElementById("cname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var City = document.getElementById("City").value;
    
    if(!name || !cname || !email || !age || !City) {
        alert("Please fill all the details");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6=newRow.insertCell(5);
    
    cell1.innerHTML =name;
    cell2.innerHTML =cname;
    cell3.innerHTML =email;
    cell4.innerHTML =age;
    cell5.innerHTML =City;
    cell6.innerHTML =` <button onClick ="onDelete(this)">Delete</button>`;
    row++;
}
function reset(){
  document.getElementById('name').value=''
  document.getElementById('cname').value=''
  document.getElementById('email').value=''
  document.getElementById('age').value=''
  document.getElementById('City').value=''
}


  function onDelete(td) {
    if (confirm("Do you want to delete this record?")) {
      row = td.parentElement.parentElement;
      document.getElementById("display").deleteRow(row.rowIndex);
      resetForm();
    }
}
