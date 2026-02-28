const {writeFileSync} =require("fs")

for(i=0;i<5000;i++){
    writeFileSync("./content/bigfile.txt", "heloo world\n" ,{flag:"a"})//flag:"a" mean new data add in file
}