import React from 'react'

export const ReadOnlyRow = ({ item, handleEditClick }) => {
  return (
    <tr>
        <td>{item.SAP_Mat_Num}</td>
        <td>{item.Used_in_Products}</td>
        <td>{item.Material_Name}</td>
        <td>{item.Criticality}</td>
        <td>{item.Work_Stream}</td>
        <td>{item.Material}</td>
        <td>{item.Supplier}</td>
        <td>{item.Manufacturer}</td>
        <td>{item.Sup_Man_Article_Num}</td>
        <td>{item.Qual_Status}</td>
        <td>
            <button type = "button" onClick ={(event) => handleEditClick(event, item)}>
                Edit
            </button>
        </td>
    </tr>
  );
};

export default ReadOnlyRow;
