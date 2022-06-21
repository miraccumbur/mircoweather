function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  
  async function  showPosition(position) {
    langlong=position.coords.latitude+","+position.coords.longitude;
    const response = await fetch('http://api.positionstack.com/v1/reverse?access_key=ef78cc2b92eccff8c19061e7118fcb30&query='+langlong);
    const data = await response.json()
    city=(data["data"][0]["region"])
    document.getElementById("location-display-label").value =city;
  }