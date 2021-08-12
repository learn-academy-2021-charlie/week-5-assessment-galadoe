// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe('codedMessage', () => {

    test('should convert to coded message', () => {
      var secretCodeWord1 = "Lackadaisical"
      // Expected output: "L4ck4d41s1c4l"
      var secretCodeWord2 = "Gobbledygook"
      // Expected output: "G0bbl3dyg00k"
      var secretCodeWord3 = "Eccentric"
      // Expected output: "3cc3ntr1c"
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})


// b) Create the function that makes the test pass.

//create a function - str
// split str and assign to var
//iterate using for loop or higher order function
//condition, if a,e,i,o, replace with 4,3,1,0
// return new arr and join the str

// const codedMessage = (str) => {
//   let newStr = []
//   let strSplit = str.split("")
//   for(let i = 0; i < strSplit.length; i++){
//     if(strSplit[i] === "a"){
//       newStr.push("4")
//     }else if(strSplit[i] === "e"){
//       newStr.push("3")
//     }else if(strSplit[i] === 'i'){
//       newStr.push("1")
//     }else if(strSplit[i] === "o"){
//       newStr.push("0")
//     }else{
//       newStr.push(strSplit[i])
//     }
//   }
// }


const codedMessage = (string) =>{
  let letterA = string.replace(/[aA]/g, "4")
  let letterE = letterA.replace(/[eE]/g, "3")
  let letterI = letterE.replace(/[iI]/g, "1")
  let letterO = letterI.replace(/[oO]/g, "0")
  return letterO
}



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

describe('letterA', () => {
    test('should contain the letter a', () => {
      var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
      // Expected output: ["Apple", "Banana", "Orange"]
      var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
      // Expected output: ["Mango", "Apricot", "Peach"]
      expect(letterA(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
      expect(letterA(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })

})



// b) Create the function that makes the test pass.
//declare a function- onlyA
//parameter- array
//use .filter or .map to iterate through the array 
//return value that includes a
//inputs and outputs- arrayOfWords1 --> ["Apple", "Banana", "Orange"], arrayOfWords2 --> ["Mango", "Apricot", "Peach"]

const letterA = (arr) => {
  return arr.filter(value => value.toLowerCase().includes("a"))
}
  // return newArr

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe('fullHouse', () => {
    test('should return if its a full house or not', () => {
      var hand1 = [5, 5, 5, 3, 3]
      // Expected output: true
      var hand2 = [5, 5, 3, 3, 4]
      // Expected output: false
      var hand3 = [5, 5, 5, 5, 4]
      // Expected output: false
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })

})



// b) Create the function that makes the test pass.
const fullHouse = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b)
    if (sortedArr[0] == sortedArr[2] && sortedArr[3] == sortedArr[4]||
        sortedArr[0] == sortedArr[1] && sortedArr[2] == sortedArr[4] ){
            return true
    } else {
        return false
    }
}
