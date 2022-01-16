module.exports = function toReadable (number) {
        const units=['zero','one','two','three','four','five','six','seven','eight','nine',]
        const units_teen=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
        const dozens=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
        const hundreds='hundred'
        const thousand='thousand'
         let n="";
       let num = number+"";
      if(num.length===1){
      return units[num];
      }
        //up to a hundred 
      if(num.length===2&&num[0]==1)
        {
            return units_teen[num[1]];
      }
      if(num.length===2&&num[0]!=1&&num[1]!=0)
        {
         n=dozens[num[0]-2]+' '+units[num[1]] 
         return n;
      }else  if(num.length===2&&num[0]!=1&&num[1]==0){
        return dozens[num[0]-2]
      }
        //up to a thousand
        if(num.length===3&&num[1]==0&&num[2]==0){
            n=units[num[0]]+' '+hundreds;
            return n
          } else if(num.length===3&&num[1]==1){
            n= units[num[0]]+ ' '+hundreds+' '+units_teen[num[2]]
             return n;
         }
          
          else
      if(num.length===3&&num[1]!=0&&num[2]!=0)
      {
        n= units[num[0]]+' '+hundreds+' '+dozens[num[1]-2]+' '+units[num[2]]
        return n;
      } 
      if(num.length===3&&num[1]==0&&num[2]!=0){
      n=units[num[0]]+' '+hundreds+' '+units[num[2]]
      return n;
      }else
      if(num.length===3&&num[1]!=0&&num[2]==0){
        n= units[num[0]]+' '+hundreds+' '+dozens[num[1]-2]
        return n;
      }
}
