async function loadLocalData() {
  try {
    // 1. Fetch the relative path to your local JSON file
    const response = await fetch('../data/members.json');
    
    // 2. Check if the response is successful (e.g., file exists)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 3. Parse the data from JSON into a regular JavaScript object
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error("Could not fetch the local JSON file:", error);
  }
}

loadLocalData();
