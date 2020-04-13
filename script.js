function serve(){
    var hop = [];
    var nan;
    for(var i=0; i<9;i++) {
        let x = parseInt(document.forms['frm'][`h${i+1}`].value);
        if(isNaN(x)){ 
            nan = true;
            break;
        };
        hop.push(x);
    }
    if(nan) return;
    sum = 0
    hop.forEach(element => {
        sum += element;
    });
    if(sum < 6) return;
    if(sum > 75) return;
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
    var comp_min = 76;
    var min = null;
    for(var i=0; i<array.length; i++) {
        if(array[i] < comp_min && array[i] != 0) {
            min = i;
            comp_min = array[i];
        }
    }
    return min;
}
