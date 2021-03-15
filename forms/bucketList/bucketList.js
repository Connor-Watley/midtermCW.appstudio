let userChoice = prompt("enter view to see bucket list, enter add to add to bucket list")
let bucketList = ["skydiving", "visit europe"]
let newItem = ''
let moreData = "yes"

while (moreData === "yes"){

    if(userChoice = "view") {
        for (i = 0; i < bucketList.length; i ++) {
            console.log(bucketList[0])
            }
        } else {
            newItem = prompt("Enter the item you would like to add")
            bucketList.push(newItem)
            }
        
moreData = prompt("enter yes to continue")
}