var audioHoover = new Audio('./docs/btnHover.mp3');
var audioClick = new Audio('./docs/btnClick.mp3');
var btn = document.getElementById('btn');

function serve() {
    let hopper = [];
    let minValue = 76;
    let x;
    let isReady = false;
    let dish = 0;

    for(var i=0; i<9; i++){     //Get all hopper values and save them in an array.
        hopper[i] = parseInt( document.getElementById(`H${i}`).value );
    }
    let totalFood = hopper.reduce((a,b) => a+b, 0); //Sum every hopper.

    if( (totalFood == 0) ){    
        return;
    }else if( (totalFood < 6) ){
        return;
    }

    while(isReady==false){
        minValue=76;
        for(i=0; i<9; i++){         //Obtain the hopper with the lesser amount of food.
            if(hopper[i] < minValue && hopper[i] != 0){
                minValue = hopper[i];
                x = i;
            }
        }
        console.log(`Hopper with the lesser amount of food: H${x+1}`);

        for(i=0; i < 9; i++){
            if(hopper[x] != 0 && dish < 6 ){
                hopper[x]--;
                dish++;
            }else if(dish==6){
                for(i=0; i< 9; i++){
                    document.getElementById(`H${i}`).value = hopper[i];
                }
                document.getElementById('serv').value++;
                return;
            }else if( hopper[x] == 0 ){
                break;
            }
        }
    }
}

btn.addEventListener("mouseover", function( event ) {
    audioHoover.play();
}, false);

btn.addEventListener("click", function(event){
    audioClick.play();
}, false)