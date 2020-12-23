
let textArea = document.getElementById("string");
textArea.addEventListener("keyup", function() {
    
    // var maxLength = parseInt($this.getAttribute('maxlength'));
    var maxLength = 140;
    var currentInputLength = textArea.value.length;
    var currentInputContent = textArea.value;
    var currentCount = maxLength - currentInputLength;
    
    var counterElement = document.getElementById("counterFooter");
    let tweetBtn = document.getElementById("btn");
    // Styling up before printing
    if (maxLength < currentInputLength) {
        // Turn red
        counterElement.style.color = "red";

        // Disable tweet button
        tweetBtn.setAttribute("disabled", "");

        // add .buttonDisabled class. Remember classList.add() already 
        // has a built-in check so if the class we intend to add 
        // is already included, then it ignores it. same with classList.remove()
        tweetBtn.classList.add("buttonDisabled");
    } else if (maxLength >= currentInputLength){
        // Turn/keep white
        counterElement.style.color = "white";
        
        // Re-enable by removing disabled attribute
        tweetBtn.removeAttribute("disabled");

        // Remove .buttonDisabled class.
        tweetBtn.classList.remove("buttonDisabled");

        // Update onclick link
        tweetBtn.setAttribute("onclick", "window.location.href='https://twitter.com/intent/tweet?text="+ currentInputContent +"';");
    }
    
    counterElement.textContent = currentCount + "/" + maxLength;
    
});
