let userChoice = prompt("enter 1 to see bucket list, enter 2 to add to bucket list")
let bucketList = []
let newItem = ''
if (userChoice === 1) {
    for (i = 0; i < bucketList.length; i ++) {
        console.log(bucketList[0])
        }
    } else if (userChoice === 2) {
        newItem = prompt("Enter the item you would like to add")
        bucketList.push(newItem)
        }