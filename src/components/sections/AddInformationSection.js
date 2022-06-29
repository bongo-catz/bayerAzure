import React, {Component, useState} from 'react';
import '../../App.css';
import { Button } from '../Button';
import './AddInformationSection.css';
import $ from 'jquery';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const PATH = "http://localhost:8080/Materials/includes/new_material.inc.php";

export default class AddInformationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SAPMATNUM: "",
      products: "",
      MatName: "",
      Crit: "",
      workstream: "",
      mat: "",
      supp: "",
      manu: "",
      sup_man_num: "",
      qual: "",
      sent: false,
      error: null,
      inputFields: {SAPMATNUM: "", products: "", MatName: "", Crit: "", workstream: "", mat: "", supp: "", manu: "", sup_man_num: "", qual: ""}
    }
  }

  FormSubmittionHandler(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: `${PATH}`,
      data: this.state,
    });
  }

  render()
  {
  return (
    <Container>
      <h1> Add New Material </h1>
      <form>
        {this.state.inputFields.map((inputField,index) => (
          <div key = {index}>
            <TextField
              name = "SAPMATNUM"
              label = "SAPMATNUM"
              variant = "filled"
              value = {inputField.SAPMATNUM}
            />
          </div>
        ))}
      </form>
    </Container>
    /* <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Add Information</h1>
        <input value = {this.state.name} onChange = {(e) =>this.setState({SAPMATNUM: e.target.value})} required = "required" className = "input" type = "number" id = "SAPMATNUM" name = "SAPMATNUM" placeholder = "SAP Material #"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({products: e.target.value})}className = "input" type = "text" id = "products" name = "products" placeholder = "Used in Products"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({MatName: e.target.value})} className = "input" type = "text" id = "MatName" name = "MatName" placeholder = "Material Name"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({Crit: e.target.value})} className = "input" type = "text" id = "Crit" name = "Crit" placeholder = "Criticality"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({workstream: e.target.value})}className = "input" type = "text" id = "workstream" name = "workstream" placeholder = "Work Stream"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({mat: e.target.value})}className = "input" id = "mat" type = "text" name = "mat" placeholder = "Material"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({supp: e.target.value})}className = "input" type = "text" id = "supp" name = "supp" placeholder = "Supplier"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({manu: e.target.value})}className = "input" type = "text" id = "manu" name = "manu" placeholder = "Manufacturer"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({sup_man_num: e.target.value})}className = "input" type = "text" id = "sup_man_num" name = "sup_man_num" placeholder = "Supplier / Manufactuer #"/>
        <br/>
        <input value = {this.state.name} onChange = {(e) =>this.setState({qual: e.target.value})}className = "input" type = "text" id = "qual" name = "qual" placeholder = "Qualification Status"/>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick = {e => this.FormSubmittionHandler(e)}
        >
          Insert
        </Button>
      </div>
    </div> */
    );
  }
}
