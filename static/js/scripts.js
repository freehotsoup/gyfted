
function showDonationForm() {
    document.getElementById("formTitle").innerHTML="Add A Donation";
    document.getElementById("deliveryInput").style.display = "block";
    document.getElementById("itemLabel").textContent="Item to donate* (required)";
    document.getElementById("pickupInput").style.display = "none";
    document.getElementById("displayForm").style.display = "block";
    document.getElementById("formtype").value = "donate";
    //document.getElementById("datelabel").textContent="Drop Off Date";
    document.getElementById("location").placeholder = "Enter your address or location of pickup";
    document.getElementById("item").placeholder= "Enter the item to donate";
    
}

function showRequestForm() {
    document.getElementById("formTitle").innerHTML="Add A Request";
    document.getElementById("itemLabel").textContent="Item requested* (required)";
    document.getElementById("pickupInput").style.display = "block";
    document.getElementById("deliveryInput").style.display = "none";
    document.getElementById("formtype").value = "request";
    document.getElementById("displayForm").style.display = "block";
    //document.getElementById("datelabel").textContent="Pickup Date";
    document.getElementById("location").placeholder = "Enter your address or location of dropoff";
    document.getElementById("item").placeholder = "Enter the item to request";
}
