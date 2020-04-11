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
    var hop = [x1, x2, x3, x4, x6, x6, x7, x8, x9];
    
    console.log(hop);

    if( (x1==0 || x1==null || isNaN(x1)==true) &&
        (x2==0 || x2==null || isNaN(x2)==true) &&
        (x3==0 || x3==null || isNaN(x3)==true) &&
        (x4==0 || x4==null || isNaN(x4)==true) &&
        (x5==0 || x5==null || isNaN(x5)==true) &&
        (x6==0 || x6==null || isNaN(x6)==true) &&
        (x7==0 || x7==null || isNaN(x7)==true) &&
        (x8==0 || x8==null || isNaN(x8)==true) &&
        (x9==0 || x9==null || isNaN(x9)==true)){
        console.log('Can not serve nutrient paste; all hoppers are empty.');
    }else{
        
    }

    return true;
}