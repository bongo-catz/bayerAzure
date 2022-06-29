import React, {useState, useEffect, Fragment} from 'react';
import "./Raw_Materials_Data.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import $ from 'jquery';

const PATH = "http://localhost:8080/Materials/includes/edit_materials.inc.php";

const Data = () => {
  const [editRow, setEditRow] = 
  useState(null);

  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/Materials/includes/view_alL_materials.inc.php")
    .then(res => res.json())
    .then(
        (result) => {
          setItem(result);
        }
      )
  }, [])

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditRow(item.SAP_Mat_Num);

    const formValues = {
      SAP_Mat_Num: item.SAP_Mat_Num,
      Used_in_Products: item.Used_in_Products,
      Material_Name: item.Material_Name,
      Criticality: item.Criticality,
      Work_Stream: item.Work_Stream,
      Material: item.Material,
      Supplier: item.Supplier,
      Manufacturer: item.Manufacturer,
      Sup_Man_Article_Num: item.Sup_Man_Article_Num,
      Qual_Status: item.Qual_Status,
    }

    setEditFormData(formValues);
  }

  const [editFormData, setEditFormData] = useState({
    SAP_Mat_Num: "",
    Used_in_Products: "",
    Material_Name: "",
    Criticality: "",
    Work_Stream: "",
    Material: "",
    Supplier: "",
    Manufacturer: "",
    Sup_Man_Article_Num: "",
    Qual_Status: "",
  })

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    /* const editedItem = {
      SAP_Mat_Num: editFormData.SAP_Mat_Num,
      Used_in_Products: editFormData.Used_in_Products,
      Material_Name: editFormData.Material_Name,
      Criticality: editFormData.Criticality,
      Work_Stream: editFormData.Work_Stream,
      Material: editFormData.Material,
      Supplier: editFormData.Supplier,
      Manufacturer: editFormData.Manufacturer,
      Sup_Man_Article_Num: editFormData.Sup_Man_Article_Num,
      Qual_Status: editFormData.QualStatus,
    } */
    
  }
  return (
    <div className = "app-container">
      <form>
      <table>
        <thead>
          <tr>
            <th>SAP Material Number</th>
            <th>Used in Products</th>
            <th>Material</th>
            <th>Criticality</th>
            <th>Work Stream</th>
            <th>Material</th>
            <th>Supplier</th>
            <th>Manufacturer</th>
            <th>Sup/Man #</th>
            <th>Qual. Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <Fragment>
              {editRow === item.SAP_Mat_Num ? ( 
                <EditableRow editFormData = {editFormData} handleEditFormChange = {handleEditFormChange}/> 
              ) : (
                <ReadOnlyRow item = {item} handleEditClick = {handleEditClick}/>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
    </div>
  )
}

export default Data;