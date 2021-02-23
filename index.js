const csv=require('csv-parser');
const fs=require('fs');
let objArr=[];
// Reading Csv from File
    fs.createReadStream('sampleData.csv').pipe(csv({})).on('data',(data)=>{
        objArr.push(data)
       
    }).on('end',()=>{
    
  
     let newObj;
    
      newObj=objArr;
 
newObj.map((merge,index)=>{
    for(let i=index+1;i<newObj.length;i++){
       
        if(merge.Name===newObj[i].Name){
             newObj[i].Phone=[merge.Phone,newObj[i].Phone];
             newObj[i].Address=[merge.Address,newObj[i].Address]
            newObj.splice(0,1)
        }
      
    }
})


  ///convert JavaScript Object to CSV

      function convertToCSV(arr) {
        const array = [Object.keys(arr[1])].concat(arr)
      
        return array.map(it => {
          return Object.values(it).toString()
        }).join('\n')
      }

      console.log(convertToCSV(newObj))


    })
    
    
