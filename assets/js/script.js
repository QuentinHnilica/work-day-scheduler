var currDay = document.querySelector("#currentDay")
var todaysDate = moment().format("MM/DD/YYYY");
var startTime = new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
var localData = window.localStorage
var allP = document.getElementsByClassName("form-control col-9 textBox")
var currHour = new Date().getHours()


currDay.innerHTML = "Current time & Date: " + todaysDate + "  " + startTime

var timeUpdate = setInterval(() => {
    
    var dt = new Date();
    var times = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    currHour = dt.getHours()
    colorCode()
    currDay.innerHTML = "Current time & Date: " + todaysDate + "  " + times
}, 1000);

function taskSubmitted(button){
    if (button.parentNode.children[1].value != ""){
        localData.setItem(button.parentNode.children[0].innerText.replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", ""), button.parentNode.children[1].value)
        //Because of the styling, it was adding extra Enters in the innertext of children[0],
        //When I replace them it turned it into spacing, So i replaceAll of the spacing as well.
    }
}

function colorCode(){
    switch (currHour){
        case 9:
            allP[0].style.backgroundColor = "red"
            for (i = 1; i < 9; i++){
                allP[i].style.backgroundColor = 'green'
            }
            break
        case 10:
            allP[0].style.backgroundColor = "grey"
            allP[1].style.backgroundColor = "red"
            for (i = 2; i < 9; i++){
                allP[i].style.backgroundColor = 'green'
            }
            break
        case 11:
            allP[2].style.backgroundColor = "red"
            for (i = 0; i < 2; i++){
                allP[i].style.backgroundColor = 'grey'
            }
            for (i = 3; i < 9; i++){
                allP[i].style.backgroundColor = 'green'
            }
            break
        case 12:
            allP[3].style.backgroundColor = "red"
            for (i = 0; i < 3; i++){
                allP[i].style.backgroundColor = 'grey'
            }
            for (i = 4; i < 9; i++){
                allP[i].style.backgroundColor = 'green'
            }
            break
        case 13:
            allP[4].style.backgroundColor = "red"
            for (i = 0; i < 4; i++){
                allP[i].style.backgroundColor = 'grey'
            }
            for (i = 5; i < 9; i++){
                allP[i].style.backgroundColor = 'green'
            }
            break
        case 14:
            allP[5].style.backgroundColor = "red"
            for (i = 0; i < 5; i++){
                allP[i].style.backgroundColor = 'grey'
            }
            for (i = 6; i < 9; i++){
                allP[i].style.backgroundColor = 'green'
            }
            break
        case 15:
            allP[6].style.backgroundColor = "red"
            for (i = 0; i < 6; i++){
                allP[i].style.backgroundColor = 'grey'
            }
            for (i = 7; i < 9; i++){
                allP[i].style.backgroundColor = 'green'
            }
            break
        case 16:
            allP[7].style.backgroundColor = "red"
            for (i = 0; i < 7; i++){
                allP[i].style.backgroundColor = 'grey'
            }
            allP[8].style.backgroundColor = "green"
            break
        case 17:
            allP[8].style.backgroundColor = "red"
            for (i = 0; i < 8; i++){
                allP[i].style.backgroundColor = 'grey'
            }
        break
        case 18:
            for (i = 0; i < 9; i++){
                allP[i].style.backgroundColor = 'grey'
            }
    }
}

function getData(){
    var c = 8 //for getting the key in local storage
    for (var i = 0; i < 9; i++){
        if (c === 12){
            c = 0
        }
        c++

        if (localData.getItem(c +"am") != null || localData.getItem(c + "pm") != null){
           
           var pTag = localData.getItem(c +"am")
           if (pTag == null){
               
               pTag = localData.getItem(c + "pm")
           }
           switch (c){
               case 1:
                   allP[4].value = pTag
                   break
                case 2:
                    allP[5].value = pTag
                    break
                case 3:
                    allP[6].value = pTag
                    break
                case 4:
                    allP[7].value = pTag
                    break
                case 5:
                    allP[8].value = pTag 
                    break
                case 9:
                    allP[0].value = pTag
                    break
                case 10:
                    allP[1].value = pTag
                    break
                case 11:
                    allP[2].value = pTag 
                    break
                case 12:
                    allP[3].value = pTag 
                    break
            }         
        }
        if(c == 5){
            break
        }
    }
    colorCode()
}

getData()