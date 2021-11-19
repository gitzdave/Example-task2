import React from 'react';
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';


export default function App() {
const medicalTreatmentListAsJson =
'[{ "treatCourseId": "11111" , "treatId": "00002" , "name": "1122", "type": "vaccination", "startDate": "01-10-20" },'
+
'{ "treatCourseId": "11111" , "treatId": "00002" , "name": "1122", "type": "vaccination", "startDate": "01-10-20" },'+
'{ "treatCourseId": "11111" , "treatId": "00002" , "name": "1122", "type": "vaccination", "startDate": "01-10-20" },'+
'{ "treatCourseId": "11111" , "treatId": "00002" , "name": "1122", "type": "vaccination", "startDate": "01-10-20" }]';


  return (
    <div>
      <h1>This is the list of patients: </h1>
     <MedicalTreatmentList  data = {medicalTreatmentListAsJson}/>
    </div>
  );
}
