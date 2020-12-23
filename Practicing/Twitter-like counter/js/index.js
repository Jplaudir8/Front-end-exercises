
let textArea = document.getElementById("string");
textArea.addEventListener("keyup", function() {
    
    // var maxLength = parseInt($this.getAttribute('maxlength'));
    var maxLength = 140;
    var currentInputLength = textArea.value.length;
    var currentCount = maxLength - currentInputLength;
    
    
    var counterElement = document.getElementById("counterFooter");
    // Styling up before printing
    if (maxLength <= currentInputLength) {
        counterElement.style.color = "red";
    } else if (maxLength > currentInputLength){
        counterElement.style.color = "black";
    }
    
    counterElement.textContent = currentCount + "/" + maxLength;
    
});
