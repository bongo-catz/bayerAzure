import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
    <td><input type = "number" required = "required" placeholder = "Enter..." name = "SAP_Mat_Num" value = {editFormData.SAP_Mat_Num} onChange = {handleEditFormChange} /></td>
    <td><input type = "text" placeholder = "Enter..." name = "Used_in_Products" value = {editFormData.Used_in_Products} onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Material_Name} name = "Material_Name" onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Criticality} name = "Criticality" onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Work_Stream} name = "Work_Stream" onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Material} name = "Material" onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Supplier} name = "Supplier" onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Manufacturer} name = "Manufacturer" onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Sup_Man_Article_Num} name = "Sup_Man_Article_Num" onChange = {handleEditFormChange} /></td>
    <td><input type = "text" required = "required" placeholder = "Enter..." value = {editFormData.Qual_Status} name = "Qual_Status" onChange = {handleEditFormChange} /></td>
    <td><button type = "submit">
      Submit
      </button></td>
  </tr>
  )
}

export default EditableRow
