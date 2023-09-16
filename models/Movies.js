const mongoose=require("mongoose");

const movieSchema=new mongoose.Schema({
    name:{type:String,required:true, trim:true},
    ratings:{type:Number,required:true,min:1,max:5},
    money:{
        type: mongoose.Decimal128,
        required:true,
        validate:(v) => v >=10,
    },
    genre:{type:Array},
    isActive:{type:Boolean},
    comments:[{value:{type:String},published:{type:Date,default:Date.now}}],
})

const Movie=mongoose.model("Movie",movieSchema)

const createDoc= async ()=>{
try{
    const m= new Movie({
        name:"Extraction 2",
        ratings:4,
        money: 60000,
        genre:['action','adventure'],
        isActive:true,
        comments:[{value:"That was an amzing Movie"}],
    })
    // const result=await m.save()
    // console.log(result);
    console.log("Saved")

}catch(error){
    console.log(error)
}    
    
}


const createMany= async ()=>{
    try{
        const m1= new Movie({
            name:"John Wick 1",
            ratings:4,
            money: 80000,
            genre:['action','adventure'],
            isActive:true,
            comments:[{value:"That was an amzing Movie :O"}],
        })
        const m2= new Movie({
            name:"John Wick  2",
            ratings:4.8,
            money: 50000,
            genre:['action','adventure'],
            isActive:true,
            comments:[{value:"That was such a Movie :X"}],
        })
        
        const m3= new Movie({
            name:"John Wick 3",
            ratings:4.7,
            money: 100000,
            genre:['action','adventure'],
            isActive:true,
            comments:[{value:"That was an awesoe waiting for John wick 4 :D"}],
        })
        
        const m4= new Movie({
            name:"John Wick 4",
            ratings:5,
            money: 140000,
            genre:['action','adventure'],
            isActive:true,
            comments:[{value:"That was amazing but its the end :("}],
        })
        
        const result=await Movie.insertMany([m1,m2,m3,m4])
        console.log(result);
        console.log("Saved")
    
    }catch(error){
        console.log(error)
    }    
        
    }
    
const allDocs=async()=>{
    try{
        const result=await Movie.find().countDocuments()
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
    
const docByName=async(name)=>{
    try{
        const result=await Movie.find({"name":name})
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
    
const updateById=async(id)=>{
    try{
        const result=await Movie.updateOne({_id:id}, {"name":"John Wick 2"})
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

const deleteById=async(id)=>{
    try{
        const result=await Movie.findByIdAndDelete({_id:id})
        console.log(result)
        console.log("Deleted Successfully")
    }catch(error){
        console.log(error)
    }
}



module.exports={deleteById};