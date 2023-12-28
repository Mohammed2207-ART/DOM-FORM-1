function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var foodOptions = document.getElementById("food").selectedOptions;
    var food = Array.from(foodOptions).map(option => option.value).join(", ");
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
  
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var cells = [
      firstName, lastName, address, pincode, gender, food, state, country
    ];
  
    for (var i = 0; i < cells.length; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = cells[i];
    }
  
    document.getElementById("myForm").reset();
  }
  