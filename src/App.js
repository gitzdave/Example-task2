import React from 'react';
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';
import MedicalTreatment from "./MedicalTreatment";

var treatId = "Treat Id is : 911"
var patientName =" Name is : Dave  King"
var category = " Category is: minor"
var type =" Type is : vaccination"
var treatCourseId = " Treatcourseid is : 1112"
var startDate = " StartDate is :  02/12/21"

export default function App() {
const medicalTreatmentListAsJson =
'[{ "treatCourseId": "11" , "treatId": "01" , "name": "David", "type": "inpatient", "startDate": "01-10-20" , "category":"major"},'
+
'{ "treatCourseId": "12" , "treatId": "02" , "name": "Mary", "type": "outpatient", "startDate": "01-10-20","category":"major" },'+
'{ "treatCourseId": "13" , "treatId": "03" , "name": "John", "type": "outpatient", "startDate": "01-10-20","category":"major" },'+
'{ "treatCourseId": "14" , "treatId": "04" , "name": "Boris", "type":"inpatient", "startDate": "01-10-20" ,"category":"major"}]';

const dataString = JSON.parse(medicalTreatmentListAsJson);



  return (
    <div>
<p class="p1"> <img src="https://webstockreview.net/images/healthcare-clipart-healthcare-management-11.png" class="imageclass"/></p>

  <h1>  Task 1: MedicalTreatment Results: </h1>
  <p> <MedicalTreatment  treatId={treatId}  /> </p>
   <p> <MedicalTreatment  name={patientName}  /> </p>
   <p> <MedicalTreatment  type={type}  /> </p>
   <p> <MedicalTreatment  category={category}  /> </p>
   <p> <MedicalTreatment  startDate={startDate}  /> </p>
   <p> <MedicalTreatment  treatCourseId={treatCourseId}  /> </p>


      <h1> Task 2: List of patient Records: </h1>
     <MedicalTreatmentList  data = {medicalTreatmentListAsJson}/>

     <h1> Results of patient Names after filter: </h1>
     
     {dataString.filter(record => record.category =="major").map(filteredRecord => (
        <li>
          {filteredRecord.name}
        </li>
      ))}
    </div>
  );
}
