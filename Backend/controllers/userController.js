exports.getUsers = (req,res) =>{
    res.send("get all users");
}
exports.getUserById = (req,res) =>{
    res.send("get user by id");
}
exports.createUser= (req,res) =>{
    res.json({
         message:"user Created successfully"
    })
   
}
exports.updateUser = (req,res)=>{
    res.json({
         message:"user updated successfully"
    })
}
exports.deleteUser = (req,res)=>{
    res.json({
         message:"user Deleted successfully"
    })
}
