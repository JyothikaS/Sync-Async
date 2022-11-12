function readFileSync(filename){
    var p = new Promise((res, rej)=>{
        if(filename == ""){
            rej("invalid filename ")
        }
        var content = "this is the content"
        res(content)
    });
    return p;
}
readFileSync("asd").then((r)=>{
    console.log(r)
})
.catch((err)=>{console.log(err)})