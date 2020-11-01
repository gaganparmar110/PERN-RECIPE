import React from 'react'
import Header from '../../widget/Header'
import Footer from '../../widget/Footer'
import styled from 'styled-components'
import axios from 'axios'
import Pic1 from '../../assets/download5.jpg'
import Pic2 from '../../assets/download6.jpg'
import Pic3 from '../../assets/download4.jpg'

const Heading1Styled=styled.h1`
      text-align:center;
      margin-top:60px;
`;
const ListDivisionStyled=styled.div`

`;
const ContentStyled=styled.div`
background-color:yellow;
`;
const Heading3Styled=styled.h3`
margin-left:30px;
`;
const ContainerStyled=styled.div`

`;
const RowStyled=styled.div`

`;
const ColumnStyled=styled.div`
margin-top:30px;
`;
const CardStyled=styled.div`

`;
const ImageStyled=styled.img`

`;
const CardBodyStyled=styled.div`

`;
const HeadingStyled=styled.h5`

`;
const ParagraphStyled=styled.p`

`;
const ButtonStyled=styled.button`

`;
const CardImageStyled=styled.div`

`;
export default class ViewRecipePage extends React.PureComponent{
       constructor(props){
           super(props);
           this.state={
            dataList:[]
            // recipeTitle:'',
            //  recipeIngredients:'',
            //  recipePicture:'',
            //  cookName:''
           }
        //    this.Data=recipeList

       }

componentDidMount(){
    axios.get('/ViewRecipe').then(res => {
        console.log("res: ",res);
        const listData = res.data;
        console.log(listData);
        this.setState({dataList: listData
                //    recipeTitle:listData.RecipeTitle,
                //    recipeIngredients:listData.RecipeIngredients,
                //    recipePicture:listData.RecipePicture,
                //    cookName:listData.CookName,
        });
        // for (let index = 0; index < this.state.dataList.length; index++) {

        //     let element = this.state.dataList[index].recipe_picture.split("\\");
        //     console.log(element);
        //     this.state.dataList[index].recipe_picture="../../assets/"+element[2];

        //     let picturePath= this.state.dataList[index].recipe_picture;
        //     console.log(picturePath);

        //     this.setState({

        //     })
        //     this.state.dataList[index].recipe_picture=picturePath
        //     this.forceUpdate()
        // }
      })

    // let url="http://localhost:3001/recipes"
    // fetch(url)
    // .then(resp=>resp.json())

    // .then(data=>{
    //     let posts = data.map((post)=>{
    //         return (
    //             <div>
    //                 <h3>{post.RecipeTitle}</h3>
    //             </div>
    //         )
    //     })
    //     this.setState({recipes : posts});

    // })
}



    render(props){
        // console.log(this.state);
        // console.log(this.state.dataList);

       // console.log(this.state)

        // console.log(this.Data)

                return(
            <>

            <Header />
            <Heading1Styled>RecipeList</Heading1Styled>
            {/* <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="http://localhost:8000/uploads\1593154545452-cook1.webp" alt="blog" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

         <ContainerStyled className="container mt-4">
            <RowStyled className="row justify-content-center">
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                <HeadingStyled className="card-title">MalaieKofte</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerMasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
            </RowStyled>

            <RowStyled className="row justify-content-center" style={{marginTop:'50px'}}>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">MasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,chilli,tomato.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">oil,gheee.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">Recipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">wheet,salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
            </RowStyled>

            <RowStyled className="row justify-content-center" style={{marginTop:'50px'}}>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic1} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">MasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic3} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerMasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">chilli,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
                  <ColumnStyled className="col-md-4 col-12">
                      <CardStyled className="card">
                          <CardImageStyled className="img-animation">
                              <ImageStyled src={Pic2} className="card-img-top" />
                          </CardImageStyled>
                          <CardBodyStyled className="card-body text-center">
                              <HeadingStyled className="card-title">PannerMasalaRecipe</HeadingStyled>
                              <ParagraphStyled className="card-text text-justify">salt,onion.....</ParagraphStyled>
                              <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                          </CardBodyStyled>
                      </CardStyled>
                  </ColumnStyled>
            </RowStyled>
         </ContainerStyled>

         <ContainerStyled className="container mt-4">
            <RowStyled className="row justify-content-center">
                {this.state.dataList.map((data1)=>
                             <ColumnStyled className="col-md-4 col-12" key={data1.id}>
                             <CardStyled className="card">
                                 <CardImageStyled className="img-animation">
                                     <ImageStyled src="../../assets/download5.jpg" className="card-img-top" />
                                 </CardImageStyled>
                                 <CardBodyStyled className="card-body text-center">
                                     <HeadingStyled className="card-title" >{data1.recipe_title}</HeadingStyled>
                                     <ParagraphStyled className="card-text text-justify">{data1.recipe_ingredients}</ParagraphStyled>
                                     <ButtonStyled className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">View Process</ButtonStyled>
                                 </CardBodyStyled>
                             </CardStyled>
                         </ColumnStyled>
                )}
          </RowStyled>
          </ContainerStyled>









<div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">PannerMasalaRecipe</h2>
                    <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                </div>
                <div className="modal-body">
                    <p>1-Onion,chilli,salt</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" type="button" data-dismiss="modal">Done</button>
                </div>
            </div>
        </div>
    </div>
            <Footer />
            </>
        )
    }
}



  {/* <ContentStyled>
            <li key={lists.id}>{lists.RecipeTitle}</li>
                <Heading3Styled>{this.Data.map((lists)=>{

                })}</Heading3Styled>
            </ContentStyled> */}




//     const RenderedData=this.Data.map((lists)=>{
    //     <h4>{lists.RecipeIngredients}</h4>
    // <h2>{lists.RecipeTitle}</h2>

    //     )







            //        element=localStorage.getItem('Token');
//        if (element){
//            this.setState({
//                recipeTitle: element.recipeTitle,
//                recipeIngredients: element.recipeIngredients,
//                recipePicture: this.element.recipePicture
//        })
//    } else {
//        this.setState({
//            recipeTitle:'',
//            recipeIngredients:'',
//            recipePicture:''
//        })
//    }








   {/* <div class="container">
            <div class="row">
                <div class="col-4">
            <button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">PannerMasala</button>
            </div>
            <div class="col-4">
            <button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">KadaiePanner</button>
            </div>
            <div class="col-4">
            <button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">Pavbhaji</button>
            </div>
        </div>
            </div> */}