var student_name=document.getElementById("student_name")
var student_age=document.getElementById("student_age")
var student_gender=document.getElementsByName("student_gender")
var student_course=document.getElementById("student_course")
var student_email=document.getElementById("student_email")
var savebutton=document.getElementById("btn")
var tblbody=document.getElementById("insert_tablebody")

savebutton.addEventListener("click",function(){

var tblrow=document.createElement("tr")
var studentnametd=document.createElement("td")
studentnametd.textContent=student_name.value 
var studentagetd=document.createElement("td")
studentagetd.textContent=student_age.value
var studentgendertd=document.createElement("td")
studentgendertd.textContent=student_gender.value 
for (count=0;count<2
;count=count+1){
    if(student_gender[count].checked){
        studentgendertd.textContent=student_gender[count].value
    }
}

var studentcoursetd=document.createElement("td")
studentcoursetd.textContent=student_course.value 

var studentemailtd=document.createElement("td")
studentemailtd.textContent=student_email.value 

var deleterow='<button onclick="destroy(event)"  style="background-color: red;color: white;" >Delete</button>'
var studentdeletetd=document.createElement("td")
studentdeletetd.innerHTML=deleterow 
tblrow.appendChild(studentnametd)
tblrow.appendChild(studentagetd)
tblrow.appendChild(studentgendertd)
tblrow.appendChild(studentcoursetd)
tblrow.appendChild(studentemailtd)
tblrow.appendChild(studentdeletetd)

tblbody.appendChild(tblrow)



})




function destroy(event){
    event.target.closest("tr").remove()
}