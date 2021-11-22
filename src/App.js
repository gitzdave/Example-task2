import React from 'react';
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';


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
      <h1>This is the list of patients: </h1>
     <MedicalTreatmentList  data = {medicalTreatmentListAsJson}/>

     <h1>Search Results: </h1>
     
     {dataString.filter(record => record.type =="covid").map(filteredRecord => (
        <li>
          {filteredRecord.name}
        </li>
      ))}
    </div>
  );
}
