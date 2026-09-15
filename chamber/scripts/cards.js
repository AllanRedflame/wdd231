
async function loadLocalData() {
  try {
    // 1. Fetch the relative path to your local JSON file
    const response = await fetch('./data/members.json');
    
    // 2. Check if the response is successful (e.g., file exists)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 3. Parse the data from JSON into a regular JavaScript object
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Could not fetch the local JSON file:", error);
  }
}

loadLocalData().then(data => {
  const main = document.querySelector("main");
  for (i = 0; i < data.length; i++ ) {
    const div = document.createElement("div");
    const header = document.createElement("h3");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("p");
    const image = document.createElement("img");
    const bottomDiv = document.createElement("div");
    const topDiv = document.createElement("div");

    image.src = data[i].imageFile;
    image.alt = String(data[i].imageFile);
    address.textContent = `Address: ${data[i].address}`;
    header.textContent = data[i].companyName;
    phone.textContent = `Phone: ${data[i].phone}`;
    website.textContent = data[i].website;


    div.classList.add("card");
    topDiv.classList.add("topDiv");
    bottomDiv.classList.add("bottomDiv");
    


    topDiv.appendChild(header);
    bottomDiv.appendChild(image);
    bottomDiv.appendChild(address);
    bottomDiv.appendChild(phone);
    bottomDiv.append(website);
    div.appendChild(topDiv);
    div.appendChild(bottomDiv);
    



    main.appendChild(div);
  };

});

loadLocalData();


