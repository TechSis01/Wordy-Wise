
let definition1 = document.querySelector("#definition1")
let definition2 = document.querySelector("#definition2")
let example1 = document.querySelector("#example1")
let example2 = document.querySelector("#example2")
let word = document.querySelector("#word")


// chrome.runtime.onMessage.addListener(function(message,sender,response){
//     if(message.search){
//         console.log("message delivered")
//     }
// })
chrome.storage.sync.get("word",function(dictionary){
    word.textContent = dictionary.word
    const checkWord = async () => {
        definition1.textContent = "loading..."
        try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictionary.word}`);
      
          const data = await response.json();
            definition1.textContent = data[0].meanings[0].definitions[0].definition;
            definition2.textContent = data[0].meanings[0].definitions[1].definition;
            example1.textContent = data[0].meanings[0].definitions[0].example;
            example2.textContent = data[0].meanings[0].definitions[1].example;
            console.log(data)
        
        } catch (error) {
            definition1.textContent = "An error ocurred please try again later"
        }
      };
      checkWord()
})


  
// const checkWord = async()=>{
//     let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${limit}`)
//     totalElement.textContent = response.data[0].meanings[0].definitions[0].definition
// }

// spendClick.addEventListener("click",function(){
//     chrome.storage.sync.get(["total","limit"],function(budget){
//         let newTotal = 0
//         if(budget.total){
//             newTotal += parseInt(budget.total)
//         }

//         let amountSpent = spentInput.value  
//         if(amountSpent){
//             newTotal += parseInt(amountSpent)
//         }

//         chrome.storage.sync.set({"total":newTotal},function(){
//             if(amountSpent && newTotal >= budget.limit){
//                 alert("You don reach limit")
//                 spendClick.disabled = true
//                 let notif = {
//                     type:"basic",
//                     title:"Limit bridge",
//                     message:"Uh oh! looks like you have reached your spending limit"
//                 }
//                 chrome.notifications.create("limitNotif",notif)
//             }
//         })
//         totalElement.textContent = newTotal
//         spentInput.value = ""
//     })
// })

// limitClick.addEventListener("click",function(){
//     if(limitInput.value){
//         limit.textContent = parseInt(limitInput.value)
//         chrome.storage.sync.set({"limit" : limitInput.value})
//     }

// })

// resetBtn.addEventListener("click",function(){
//     chrome.storage.sync.set({"total":0,"limit" : 0})
//     totalElement.textContent = 0
//     limit.textContent = 0
// })

// // chrome.storage.sync.set("total", function (budget) {
// //     totalElement.textContent = budget.total
// //   });

// // spendClick.addEventListener("click", function () {


// //     let mySpending = parseInt(spentInput.value);
// //     count += mySpending;
// //     totalElement.textContent = count;
  
// //     // Update the value in chrome.storage.sync
// //     // chrome.storage.sync.get("total", function (budget) {
// //     //   let currentTotal = budget.total || 0;
//     // /   currentTotal += mySpending;
  
//     //   chrome.storage.sync.set({ total: currentTotal }, function () {
//     //     // Optional: Handle the result of the storage set operation if needed
//     //     if (chrome.runtime.lastError) {
//     //       console.error("Error setting total:", chrome.runtime.lastError);
//     //     } else {
//     //       console.log("Total saved successfully.");
//     //     }
// //       });
// //     });
// //   });
 
// // spendClick.addEventListener("click",function(){
// //     chrome.storage.sync.get("total",function(budget){
// //         const {total} = budget
// //         if(total){
// //            totalElement.textContent = total
// //         }
// //     })
// //     let mySpending = parseInt(spentInput.value)
// //      count += mySpending
// //      totalElement.textContent = count
     
// //      chrome.storage.sync.set({total: count})
