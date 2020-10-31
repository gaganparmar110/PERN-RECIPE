const Express = require('express');
const Cors = require('cors');
const pool = require('./db');
const multer = require('multer');
//const upload =  multer({dest : 'uploads/'});

const app = Express();


//middleware
app.use(Cors());
app.use(Express.json());
app.use(Express.static('uploads'));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({
    storage
})
//routes//
//create recipe
app.post("/AddRecipe", upload.single('recipe_picture'),async (req,res)=>{
    console.log("first",req.body);
    try {
    //     if (req.file)
    //     res.json({
    //         imageUrl: `./uploads/${req.file.filename}`
    //     });
    // else{
    //     res.status("409").json("No Files to Upload.");
    // }
    // const recipe_picture = req.file.path;
           //const {recipe_picture } = imageUrl;
        //    console.log(recipe_picture);
           const { recipe_title,recipe_ingredients,recipe_process,recipe_picture,recipe_cook } = req.body;

        //    console.log(req.file.path);
        //    console.log(recipe_picture);
           const addRecipe = await pool.query("INSERT INTO public.recipe_lists(recipe_title, recipe_ingredients, recipe_process, recipe_picture, recipe_cook) VALUES ($1,$2,$3,$4,$5);",[recipe_title,recipe_ingredients,recipe_process,recipe_picture,recipe_cook]);
           console.log("recipe_title:",recipe_title);
           console.log("recipe_ingredients:",recipe_ingredients);
           console.log("recipe_process:",recipe_process);
           console.log("recipe_picture:",recipe_picture);
           console.log("recipe_cook:",recipe_cook);
           res.json(addRecipe.rows[0]);
           console.log("Result:",addRecipe);
    } catch (err) {
        console.log("error:");
        console.error(err.message);
    }
})
// get recipe
app.get("/ViewRecipe", async (req,res)=>{
       try {
        const allRecipe = await pool.query(
            "select * from public.recipe_lists"
           );
     res.json(allRecipe.rows);
       } catch (err) {
          console.error(err.message);
       }
});
// get by id recipe
app.get("/ViewRecipe/:id", async (req,res)=>{
    try {
         const { recipeId } = req.params;
         const getRecipe = await pool.query("select * from recipe_lists where recipe_id = $1",[recipeId]);
         res.json(getRecipe.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//put by id recipe
app.put("/ViewRecipe/:recipe_id",async (req,res)=>{

    try {
        const { recipe_id } = req.params;
        console.log(recipe_id);
        const { recipe_title,recipe_ingridients,recipe_process,recipe_picture,recipe_cook } = req.body;
        const edit = await pool.query("UPDATE public.recipe_lists SET recipe_title=$1, recipe_ingredients=$2, recipe_process=$3, recipe_picture=$4, recipe_cook=$5 WHERE recipe_id=$6;",[recipe_title,recipe_ingridients,recipe_process,recipe_picture,recipe_cook,recipe_id]);

        // const editRecipe =await pool.query("update recipe_lists set recipe_title = $1, recipe_ingredients = $2, recipe_process = $3, recipe_picture = $4, recipe_cook = $5 where recipe_id = $6",[recipe_title,recipe_ingridients,recipe_process,recipe_picture,recipe_cook,recipe_id]);
        res.json("updated!!");
    } catch (err) {
        console.error(err.message);
    }
});
app.listen(8000,()=>{
    console.log('server is running on port 8000');
});