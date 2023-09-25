const dateCondition = (req,res,next)=>{

    const date = new Date()
    const hour = date.getHours();
   
    if (hour > 9 && hour< 21) {
        next()
    }else{
        return res.status(403).send("Alja3 ghodwa Sbeh sahby 😂")
    }
    
}

module.exports = dateCondition
