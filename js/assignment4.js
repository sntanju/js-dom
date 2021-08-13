//PROBLEM 4 (Perfect Friend)
function perfectFriend(friendList){
    if(friendList.length == 0){
    let error = "Can't Procced,The Inputed String Array Is Empty";
    return error;
    }
    for(let i = 0; i < friendList.length; i++){
    if(friendList[i].length == 5){
    return friendList[i];
        }
    }
    let ansNotFound = "Answer Did Not Find For The Given Input";
    return ansNotFound;
    }
    let p = perfectFriend(["abcdef", "abcde", "abcdf", "abc"]);
    console.log(p);