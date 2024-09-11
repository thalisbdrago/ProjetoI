function ShowLoading(ev) {
    ev.preventDefault();  // Prevent default form submission or event behavior

    const divLoading = document.createElement("div");
    const span = document.createElement("span");
    const spinnerLoading = document.getElementById("spinnerLoading");

    // Add necessary classes
    divLoading.classList.add("spinner-border","spinnerLoading2");
    
    // Correct way to set the ID
    divLoading.id = "spinner";
    
    span.classList.add("visually-hidden");

    // Append the span to the div and then append the div to spinnerLoading
    divLoading.appendChild(span);
    
    if (spinnerLoading) {  // Check if spinnerLoading exists to avoid null reference error
        spinnerLoading.appendChild(divLoading);
    } else {
        console.error("spinnerLoading element not found");
    }

    console.log("teste");

    // Set a timeout to hide the loading spinner after 2 seconds
    setTimeout(() => HideLoading(), 2000);
}


function HideLoading() {
    const spinerHide = document.getElementsByClassName("spinner-border")
    if(spinerHide.length) {
        spinerHide[0].remove();
    }

}