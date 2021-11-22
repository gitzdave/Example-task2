import React from 'react';
import MedicalTreatment from './MedicalTreatment';



function MedicalTreatmentList(props){

  const medicalTreatmentListJ = props.data;
  const medicalTreatmentlist= JSON.parse(medicalTreatmentListJ);
  const ListMedicalTreatmentList = medicalTreatmentlist.map ((medicalTreatment)=>
<table>
<thead>
  <th>treatId </th>
  <th>treatCourseId </th>
  <th>name </th>
  <th>startDate </th>
  <th>type </th>
  <th>category</th>
</thead>

  <tbody>
<td> <MedicalTreatment treatId = {medicalTreatment.treatId} />   </td>
<td> <MedicalTreatment treatCourseId={medicalTreatment.treatCourseId} /> </td>
<td><MedicalTreatment name= {medicalTreatment.name}/></td>
<td><MedicalTreatment startDate={medicalTreatment.startDate}/></td>
<td><MedicalTreatment category={medicalTreatment.category} /></td>
<td><MedicalTreatment type = {medicalTreatment.type}/></td>
</tbody>
</table>);

return (
<table>
{ListMedicalTreatmentList}
</table>


)


}

export default MedicalTreatmentList;