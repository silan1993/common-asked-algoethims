function intersection (...args){
    // write your code here
    let objectMap={}
    for(let i=0;i<args.length;i++){
        let obj = getKeyMap(args[i])
        objectMap[i+''] = obj
    }
    let matchElement =[]
    let maxElementMatch = 0
    for(let key in objectMap){
      
      for (let key1 in objectMap) {
        let tempmaxmatch = 0
        let tempElement = []
        if(key1 != key){
          for(let keyElement in objectMap[key]){
            if(objectMap[key1][keyElement]){
              tempElement.push(keyElement)
              tempmaxmatch++
            }
          }
          if(tempmaxmatch > maxElementMatch){
            matchElement = tempElement
            maxElementMatch= tempmaxmatch
          }
        }
      }
      
    }
    return matchElement
  }
  
  let getKeyMap = arr =>{
    let map = {}
    for(let element of arr){
      if(map[element]){
        map[element]++
      }else{
        map[element] =1
      }
    }
    return map
    
  }
  
  console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]))