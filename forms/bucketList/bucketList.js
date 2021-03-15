
let bucketList = ["skydiving", "visit europe"]
let newItem = ''
let moreData = "yes"

while (moreData === "yes"){
    
    let userChoice = prompt("enter view to see bucket list, enter add to add to bucket list")
    
    if(userChoice = "view") {
        for (var i = 0; i < bucketList.length; i++) {
            console.log(bucketList[i])
            }
        } else {
            newItem = prompt("Enter the item you would like to add")
            bucketList.push(newItem)
            }
        
moreData = prompt("enter yes to continue")
}