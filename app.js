function findUniq(arr) {
    for(i = 0; i<arr.length; i++){
      if(arr[0] !== arr[i]){
        return arr[i]
      }
    }
  }
  
  findUniq([ 1, 1, 1, 0, 1 ])
  