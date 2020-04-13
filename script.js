function serve(){

    var x1 = parseInt(document.forms['frm']['h1'].value);
    var x2 = parseInt(document.forms['frm']['h2'].value);
    var x3 = parseInt(document.forms['frm']['h3'].value);
    var x4 = parseInt(document.forms['frm']['h4'].value);
    var x5 = parseInt(document.forms['frm']['h5'].value);
    var x6 = parseInt(document.forms['frm']['h6'].value);
    var x7 = parseInt(document.forms['frm']['h7'].value);
    var x8 = parseInt(document.forms['frm']['h8'].value);
    var x9 = parseInt(document.forms['frm']['h9'].value);
    var counter = parseInt(document.getElementById('counter').value);
    var hop = [x1, x2, x3, x4, x6, x6, x7, x8, x9];
    var i, minvalue, minhop, food, foodbool, rest,j;
    
    console.log(hop);

    if( (x1==0 || x1==null || isNaN(x1)==true) &&
        (x2==0 || x2==null || isNaN(x2)==true) &&
        (x3==0 || x3==null || isNaN(x3)==true) &&
        (x4==0 || x4==null || isNaN(x4)==true) &&
        (x5==0 || x5==null || isNaN(x5)==true) &&
        (x6==0 || x6==null || isNaN(x6)==true) &&
        (x7==0 || x7==null || isNaN(x7)==true) &&
        (x8==0 || x8==null || isNaN(x8)==true) &&
        (x9==0 || x9==null || isNaN(x9)==true) ){
            console.log('Can not serve nutrient paste; all hoppers are empty.');
    }else if(   (x1>75 || x1<0) ||
                (x2>75 || x2<0) ||
                (x3>75 || x3<0) ||
                (x4>75 || x4<0) ||
                (x5>75 || x5<0) ||
                (x6>75 || x6<0) ||
                (x7>75 || x7<0) ||
                (x8>75 || x8<0) ||
                (x9>75 || x9<0)     ){
            console.log('There are more than 75 food or less than 0 food in some hopper.');
    }else{
        do{
            minvalue = 76;
            food=0;

            for( i=0; i<9; i++ ){           //Check which hopper has the least amount of food units.
                if( (hop[i] < minvalue) && (hop[i] != 0) ){ 
                    minvalue = hop[i];  //Amount of food units that the hopper has.
                    minhop = i;         //Hopper position (starting from 0) which has the least amount of food units.
                }
            }

            console.log('Hopper',minhop+1,'has', minvalue,'food');

            rest = 6 - food;    //Compare how many food units needs to serve a plate of nutrient paste.

            console.log('· Rest:',rest);

            do{
                if( minvalue > 0 ){
                    minvalue--;
                    console.log('· Now has:',minvalue, 'food');
                    switch(minhop){
                        case 0:
                            document.getElementById('h1').value = minvalue;
                        break;
                        case 1:
                            document.getElementById('h2').value = minvalue;
                        break;
                        case 2:
                            document.getElementById('h3').value = minvalue;
                        break;
                        case 3:
                            document.getElementById('h4').value = minvalue;
                        break;
                        case 4:
                            document.getElementById('h5').value = minvalue;
                        break;
                        case 5:
                            document.getElementById('h6').value = minvalue;
                        break;
                        case 6:
                            document.getElementById('h7').value = minvalue;
                        break;
                        case 7:
                            document.getElementById('h8').value = minvalue;
                        break;
                        case 8:
                            document.getElementById('h9').value = minvalue;
                        break;

                        default:
                            console.log('switch default');
                        break;
                    }
                    food++;
                    console.log('· Food:', food);
                }
            }while(rest>0 && minvalue>0 && food <6);

            if( food == 6 ){
                rest = 0;
                console.log('Nutrient paste served.');
                document.getElementById('counter').value = counter+1;
            }
            console.log('');
        }while( food == 6 );
        
    }
    console.log(' ');
}