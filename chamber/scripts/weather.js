let url = "https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=imperial&appid=f39973082ab5286d5c823eb243fa4a43";
let anotherUrl = "https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={-111.9}&appid=f39973082ab5286d5c823eb243fa4a43"
  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();