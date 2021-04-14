function go() {
    var tvNumOfMatrices = document.getElementById("numOfMatrices")
    var oneMatInputs = document.getElementById("oneMatInputs")
    var twoMatInputs = document.getElementById("twoMatInputs")
    
    var numOfRows = document.getElementById("numOfRows1")
    var numOfColumns = document.getElementById("numOfColumns1")

    if (tvNumOfMatrices.value == 1) {
        oneMatInputs.style.visibility = "visible"
        twoMatInputs.style.visibility = "hidden"

        generateMatrix(numOfRows.value , numOfColumns.value)
    }
    else if (tvNumOfMatrices.value == 2) {
        var numOfRows2 = document.getElementById("numOfRows2")
        var numOfColumns2 = document.getElementById("numOfColumns2")
        
        oneMatInputs.style.visibility = "visible"
        twoMatInputs.style.visibility = "visible"

        generateMatrix(numOfRows.value, numOfColumns.value)
        generateMatrix(numOfRows2.value, numOfColumns2.value)
    }

    else{
        alert("Wrong Input")
        return
    }

    

    
    console.log(tvNumOfMatrices.value)
}

function generateMatrix(numOfRows, numOfColumns) {
    for (i = 1; i <= numOfRows; i++){
        for(j = 1; j<= numOfColumns; j++){
            document.getElementById("elementInput").innerHTML += "<input type='number' id='12'>"
        }
        
    }
}
// if (document.getElementById(""))
//     document.getElementById("").style.visibility = "hidden"
