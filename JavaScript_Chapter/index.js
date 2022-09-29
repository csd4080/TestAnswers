


//Exercise 1 

function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
   
    if(isbn.toString().length == 10){       //if the number has 10 digits go and check if its valid
        sNumber = isbn.toString();
        var result = 0;
        var i = 0;

       while( i < isbn.toString().length){

        if( sNumber.charAt(i) === 'X'){
            result += 10 * (i+1) ;
        }else{
            result += sNumber.charAt(i) * (i+1) ;
        }
        i++;
       }

       if(result % 11 == 0)             //if mod is 0 then return true
        return true;
       else 
        return false;                   //else return false
    }   
    else
        return false;
   } 
  
//    console.log("1112223339 -->  " + validISBN10('1112223339'))
//    console.log("111222333 --> " +validISBN10('111222333'))
//    console.log("1112223339X --> " +validISBN10('1112223339X'))
//    console.log("1234554321 --> " +validISBN10('1234554321'))
//    console.log("1234512345 --> " +validISBN10('1234512345'))
//    console.log("048665088X --> " +validISBN10('048665088X'))
//    console.log("X123456788 --> " +validISBN10('X123456788'))

 
 

//Exercise 2

   function allSquaredPairs(num) {
    const sqr1 = [];
    const sqr2 = [];
    var i = 0;
    if(num < 0)  // make integer a non-negative
        num = num * (-1);

    if(num >= 2147483647)  // max(num) === 2147483647
      return output;
    
    while (Math.pow(i, 2) <= num){ //adding values to two different arrays to find the  pairs whose values - when squared - sum to the given integer
        sqr1.push(i);
        sqr2.push(i);
        i++;
    }
    let output = [];
    i = 0;
    while (i < sqr1.length ){
        var j=0;
       while ( j < sqr2.length){
        
        if(Math.pow(sqr1[i],2) + Math.pow(sqr2[j],2) === num){

            if(output.toString().includes(i)){          // Return every unique pair of numbers [a,b] where (a * a) + (b * b) = num;
              break;
            }
             output.push([sqr1[i],sqr2[j]]) 
        }
        j++;
       }
     
        i++;
    }
    return output ;     // return value will be a two-dimensional array [[]]
   }  

   console.log(allSquaredPairs(0));
   console.log(allSquaredPairs(1));
   console.log(allSquaredPairs(2));
   console.log(allSquaredPairs(3)); 
   console.log(allSquaredPairs(4));
   console.log(allSquaredPairs(5));
   console.log(allSquaredPairs(25));
   console.log(allSquaredPairs(325));
   console.log(allSquaredPairs(1000));



