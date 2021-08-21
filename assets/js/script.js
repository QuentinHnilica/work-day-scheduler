var currDay = document.querySelector("#currentDay")
var todaysDate = moment().format("MM/DD/YYYY");
var startTime = new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
var localData = window.localStorage


currDay.innerHTML = "Current time & Date: " + todaysDate + "  " + startTime

var timeUpdate = setInterval(() => {
    
    var dt = new Date();
    var times = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    currDay.innerHTML = "Current time & Date: " + todaysDate + "  " + times
}, 1000);


function taskSubmitted(button){
    if (button.parentNode.children[1].value != ""){
        localData.setItem(button.parentNode.children[0].innerText.replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", ""), button.parentNode.children[1].value)
        //Because of the styling, it was adding extra Enters in the innertext of children[0],
        //When I replace them it turned it into spacing, So i replaceAll of the spacing as well.
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
           var allP = document.getElementsByClassName("form-control col-9 textBox")
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
}


getData()