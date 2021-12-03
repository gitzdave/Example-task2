import React from 'react';
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';
import MedicalTreatment from "./MedicalTreatment";

var patientName =" Name is : Dave"
var category = " Category is: minor"
var type =" Type is : vaccination"
var treatCourseId = " Treatcourseid is : 1112"
var startDate = " StartDate is :  02/12/21"



export default function App() {
const medicalTreatmentListAsJson =
'[{ "treatCourseId": "11" , "treatId": "01" , "name": "David", "type": "vaccination", "startDate": "01-10-20" },'
+
'{ "treatCourseId": "12" , "treatId": "02" , "name": "Mary", "type": "covid", "startDate": "01-10-20" },'+
'{ "treatCourseId": "13" , "treatId": "03" , "name": "John", "type": "vaccination", "startDate": "01-10-20" },'+
'{ "treatCourseId": "14" , "treatId": "04" , "name": "Boris", "type": "Vaccination", "startDate": "01-10-20" }]';

const dataString = JSON.parse(medicalTreatmentListAsJson);



  return (
    <div>
  <h1>  Results of MedicalTreatment </h1>
   <p> <MedicalTreatment  name={patientName}  /> </p>
   <p> <MedicalTreatment  type={type}  /> </p>
   <p> <MedicalTreatment  category={category}  /> </p>
   <p> <MedicalTreatment  startDate={startDate}  /> </p>
   <p> <MedicalTreatment  treatCourseId={treatCourseId}  /> </p>


      <h1> List of patient Records: </h1>
     <MedicalTreatmentList  data = {medicalTreatmentListAsJson}/>

     <h1> Results after filter: </h1>
     
     {dataString.filter(record => record.type =="covid").map(filteredRecord => (
        <li>
          {filteredRecord.name}
        </li>
      ))}
    </div>
  );
}
