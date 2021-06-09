var audioHoover = new Audio('./docs/btnHover.mp3');
var audioClick = new Audio('./docs/btnClick.mp3');
var btn = document.getElementById('btn');

function serve() {
    let hopper = [];
    let minValue = 76;
    let x;
    let isReady = false;
    let dish = 0;

    for(var i=0; i<9; i++){     //Get all hopper values.
        hopper[i] = parseInt( document.getElementById(`H${i}`).value );
    }
    console.log(hopper)

    if( (hopper.reduce((a,b) => a+b, 0)) == 0 ){    //Check if all hoppers are empty.
        return console.log("All hoppers are empty.");
    }

    while(isReady==false){
        
        for(i=0; i<9; i++){         //Obtain the hopper with the lesser amount of food.
            if(hopper[i] < minValue && hopper[i] != 0){
                minValue = hopper[i];
                x = i;
            }
        }
        console.log(`Hopper with the lesser amount of food: H${x+1}`);

        


        isReady=true
    }
}

btn.addEventListener("mouseover", function( event ) {
    audioHoover.play();
}, false);

btn.addEventListener("click", function(event){
    audioClick.play()

}, false)