var Counter = 1;
 document.getElementById('StudentDataForm').addEventListener('submit', function(event) {
     event.preventDefault();
     var Student_UID = document.getElementById('SUID').value;
     var Student_firstName = document.getElementById('FirstName').value;
     var Student_lastName = document.getElementById('LastName').value;
     var email = document.getElementById('Email').value;
     var gender = document.querySelector('input[name="gender"]:checked').value;
     var day = document.getElementById('day').value;
     var month = document.getElementById('month').value;
     var year = document.getElementById('year').value;
     var  contactNumber= document.getElementById('contactNumber').value;
     var hobbies="";
     document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox)
     {
        hobbies +=checkbox.value +" ";
     });
     



     var newRow = '<tr><td>' + Counter + '</td><td>'  + Student_UID + '</td><td>' + Student_firstName + Student_lastName + '</td><td>' + email + '</td><td>' + gender + '</td><td>' + day+"-"+month+"-"+year + '</td><td>' + contactNumber+ '</td></tr>'+hobbies+'</td><td>';
     document.getElementById('studentTableBody').insertAdjacentHTML('beforeend', newRow);
     Counter++;
     document.getElementById('StudentDataForm').reset();
 });

 var daySelect = document.getElementById('day');
 for (var i = 1; i <= 31; i++) {
     var option = document.createElement('option');
     option.value = i;
     option.text = i;
     daySelect.appendChild(option);
 }

 var monthSelect = document.getElementById('month');
 var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 for (var i = 0; i < months.length; i++) {
     var option = document.createElement('option');
     option.value = i + 1;
     option.text = months[i];  //store in the items of month
     monthSelect.appendChild(option);
 }

 var yearSelect = document.getElementById('year');
 var currentYear = new Date().getFullYear();
 for (var i = currentYear; i >= 1900; i--) {
     var option = document.createElement('option');
     option.value = i;
     option.text = i;
     yearSelect.appendChild(option);
 }