import React from 'react';
import MedicalTreatment from './MedicalTreatment';



function MedicalTreatmentList(props){

  const medicalTreatmentListJ = props.data;
  const medicalTreatmentlist= JSON.parse(medicalTreatmentListJ);
  const ListMedicalTreatmentList = medicalTreatmentlist.map ((medicalTreatment)=>
<li>
<MedicalTreatment treatId = {medicalTreatment.treatId} treatCourseId={medicalTreatment.treatCourseId}  name= {medicalTreatment.name} startDate={medicalTreatment.startDate} category={medicalTreatment.category}  type = {medicalTreatment.type}/>
</li>);

return (
<ul>
{ListMedicalTreatmentList}
</ul>


)


}

export default MedicalTreatmentList;