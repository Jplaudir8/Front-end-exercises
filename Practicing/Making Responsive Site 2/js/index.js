let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", event => {
    // Stop the default event behavior
    event.preventDefault();

    // Using an instance of FormData to retrieve the inputs.
    let ourFormData = new FormData(event.target);

    let userFirstName = ourFormData.get("firstName");
    let userEmailAddress = ourFormData.get("emailAddress");

    // OR... instead of using the FormData object we could have also used the value property that
    // these html elements have:
    // let userFirstName = document.getElementById("firstName").value;
    // let userEmailAddress = document.getElementById("email").value;

    console.log(userFirstName);
    console.log(userEmailAddress);

    let newHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>`;

    let updatedContentContainer = document.getElementById("Main-Content");
    updatedContentContainer.innerHTML = newHtmlContent; 
    
    // Remember that when want to insert text content inside an html element, rather than 
    // using .innerHTML (which can have security risks) or .innerText(expensive to load) we
    // can use .textContent.

})