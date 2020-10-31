import React from 'react';
import Header from '../../widget/Header';
import Footer from '../../widget/Footer';
import styled from 'styled-components';
import axios from 'axios';
import multer from 'multer';

const FormContainerStyled=styled.div`
border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top:80px;
  input[type=text], select, textarea{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }
  @media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
`;

const FormLableStyled=styled.label`
padding: 12px 12px 12px 0;
display: inline-block;
`;

const FormLableColumnStyled=styled.div`
float: left;
width: 25%;
margin-top: 6px;
`;

const FormInputColumnStyled=styled.div`
float: left;
  width: 75%;
  margin-top: 6px;
`;
const FormRowStyled=styled.div`
:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default class AddRecipePage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            recipeTitle:'',
            recipeIngredients:'',
            recipeProcess:'',
            recipePicture:'',
            cookName:''
        }
        this.inputRef=React.createRef();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event) {
       this.setState({ [event.target.name]: event.target.value });
       //this.setState({recipePicture:event.target.files});
//         let recipePicture = []
// for (var i = 0; i < event.target.files.length; i++) {
//   recipePicture[i] = event.target.files.item(i);
// }
// recipePicture = recipePicture.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
// let message = `${recipePicture.length} valid image(s) selected`
// this.setState({ recipePicture, message })
//         console.log(this.state.recipe_picture);
  }

    handleSubmit = event =>{
      event.preventDefault();

      const recipeList = {
        recipe_title: this.state.recipeTitle,
        recipe_ingredients: this.state.recipeIngredients,
        recipe_process: this.state.recipeProcess,
        recipe_picture: this.state.recipePicture,
        recipe_cook:this.state.cookName

      };
      console.log(recipeList);
  //    {
  //     method : "POST",
  //     headers : { "Content-Type" : "application/json" },
  //     body : JSON.stringify(recipeList.recipe_title)
  // }
  // app.use(Express.static('uploads'));

  const formData = new FormData();
  formData.append('recipe_title',recipeList.recipe_title);
  formData.append('recipe_ingredients',recipeList.recipe_ingredients);
  formData.append('recipe_process',recipeList.recipe_process);
  formData.append('recipe_picture',recipeList.recipe_picture);
  formData.append('recipe_cook',recipeList.recipe_cook);
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
      // let data = JSON.stringify(recipeList);
      // console.log(data);
      //[ recipeList.recipe_title,recipeList.recipe_ingredients,recipeList.recipe_process,recipeList.recipe_picture,recipeList.recipe_cook ]
      console.log(recipeList);
      console.log(formData);
      axios.post("http://localhost:8000/AddRecipe",formData,config)
      .then(res =>{
        console.log(res.data);
      })
      .catch(error =>{
             console.log(error);
      });

      this.setState(
         { recipeProcess:'',recipeIngredients:'',recipeTitle:'',recipePicture:'',cookName:''}
      );
      alert("Successfully added");

    }


    render(){
        return(
            <>
            <Header />
            <FormContainerStyled>
  <form action="#" onSubmit={this.handleSubmit}>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="Title">Recipe Title :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="text" id="title" name="recipeTitle" ref={this.inputRef} placeholder="Enter Title.." onChange={this.handleChange} value={this.state.recipeTitle}/>
      </FormInputColumnStyled>
    </FormRowStyled>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="Title">Recipe Ingredients :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="text" id="ingredients" name="recipeIngredients" placeholder="Enter Ingredientd which separated by comma.." onChange={this.handleChange}value={this.state.recipeIngredients} />
      </FormInputColumnStyled>
    </FormRowStyled>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="Title">Recipe Process :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="text" id="process" name="recipeProcess" placeholder="Enter Recipe Process.." onChange={this.handleChange}value={this.state.recipeProcess} />
      </FormInputColumnStyled>
    </FormRowStyled>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="Picture">Recipe Picture :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="file" id="picture" name="recipePicture" placeholder="Enter Picture.." onChange={this.handleChange} value={this.state.recipePicture}/>
      </FormInputColumnStyled>

    </FormRowStyled>
    <FormRowStyled>
      <FormLableColumnStyled>
        <FormLableStyled htmlFor="cookName">Cook Name :</FormLableStyled>
      </FormLableColumnStyled>
      <FormInputColumnStyled>
        <input type="text" id="cook" name="cookName" placeholder="Enter Cook Name" onChange={this.handleChange}value={this.state.cookName} />
      </FormInputColumnStyled>
    </FormRowStyled>
   <FormRowStyled>
     <FormInputColumnStyled>
   <input type="submit" value="Submit" disabled={!this.state.recipeTitle,!this.state.recipeIngredients,!this.state.recipePicture,!this.state.cookName}/>
   </FormInputColumnStyled>
   </FormRowStyled>

    {/* <div className="row">

    </div> */}
  </form>
</FormContainerStyled>
            <Footer />
            </>
        )
    }
}