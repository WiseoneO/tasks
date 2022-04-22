const Fs = require("fs");

const note = "He who loves to walk will love the journey more than he who loves the destination. So love the to walk."
    

const HandeFiles = ()=>{
    try{
        // check if the folder already exist
        if(!Fs.existsSync("SecretNote")){
            Fs.mkdirSync("SecretNote")
            console.log("Folder create successfully")
        }else{
            console.log("Folder name already exist");
        };


        // Writing to a file
        Fs.writeFile("./SecretNote/text.txt", note, err=>{
            if(err){
                console.log(err)
            }else{
                console.log("new file created")
            }
        });


        // Reading the data inside a file
        Fs.readFile("./SecretNote/text.txt","utf-8", (err, result)=>{
            if(err){
                console.log("cant read the file")
            }else{
                console.log(result);
            }
        });
    }catch(err){
        console.log(err)
    }

    

}

console.log(HandeFiles());
   

        
    