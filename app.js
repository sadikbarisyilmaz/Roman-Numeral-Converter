function convertToRoman() {
    let inputDOM = document.querySelector("#input")
    let num = Number(inputDOM.value)    
    let resultDOM = document.querySelector("#result")

    console.log(num)
    if (num > 3999 || num <= 0) {
        resultDOM.innerHTML ="Please Enter a Valid Number!"
    }else{
        let stringNum = num.toString().split("")
        let reversed = []
        let arr = []
       
       for(let i = 0; i < stringNum.length; i++ ){
         reversed.unshift(stringNum[i])
       }
       
        switch(reversed[0]){
          case "1":
          arr.unshift("I")
          break;
          case "2":
          arr.unshift("II")
          break;
          case "3":
          arr.unshift("III")
          break;
          case "4":
          arr.unshift("IV")
          break;
          case "5":
          arr.unshift("V")
          break;
          case "6":
          arr.unshift("VI")
          break;
          case "7":
          arr.unshift("VII")
          break;
          case "8":
          arr.unshift("VIII")
          break;
          case "9":
          arr.unshift("IX")
          break;
        }
        
        switch(reversed[1]){
          case "1":
          arr.unshift("X")
          break;
          case "2":
          arr.unshift("XX")
          break;
          case "3":
          arr.unshift("XXX")
          break;
          case "4":
          arr.unshift("XL")
          break;
          case "5":
          arr.unshift("L")
          break;
          case "6":
          arr.unshift("LX")
          break;
          case "7":
          arr.unshift("LXX")
          break;
          case "8":
          arr.unshift("LXXX")
          break;
          case "9":
          arr.unshift("XC")
          break;
        }
        
        switch(reversed[2]){
          case "1":
          arr.unshift("C")
          break;
          case "2":
          arr.unshift("CC")
          break;
          case "3":
          arr.unshift("CCC")
          break;
          case "4":
          arr.unshift("CD")
          break;
          case "5":
          arr.unshift("D")
          break;
          case "6":
          arr.unshift("DC")
          break;
          case "7":
          arr.unshift("DCC")
          break;
          case "8":
          arr.unshift("DCCC")
          break;
          case "9":
          arr.unshift("CM")
          break;
        }
        
       switch(reversed[3]){
          case "1":
          arr.unshift("M")
          break;
          case "2":
          arr.unshift("MM")
          break;
          case "3":
          arr.unshift("MMM")
          break;
          case "4":
          arr.unshift("MMMM")
          break;
        }
        
        resultDOM.innerHTML = `${arr.join("")}`
        

    }
    
   }
   