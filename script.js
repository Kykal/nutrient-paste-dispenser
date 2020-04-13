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
    sum = 0
    hop.forEach(element => {
        sum += element;
    });
    if(sum < 6) return;
    console.log(`Initial array: [${hop}]`);
    let min = getMin(hop);
    let serve = 6;
    while(serve  > 0) {
        if(hop[min] > 0) {
            hop[min] = hop[min] - 1;
            serve = serve - 1;
        } else {
            min = getMin(hop);
        }
    }
    console.log(`Final array:   [${hop}]`);
    
    for(var i=0; i<hop.length; i++) {
        document.getElementById(`h${i+1}`).value = hop[i];
    }
    plates = parseInt(document.getElementById("counter").value);
    document.getElementById("counter").value = plates + 1;
}

function getMin(array) {
    var comp_min = 75;
    var min = null;
    for(var i=0; i<array.length; i++) {
        if(array[i] < comp_min && array[i] != 0) {
            min = i;
            comp_min = array[i];
        }
    }
    return min;
}
