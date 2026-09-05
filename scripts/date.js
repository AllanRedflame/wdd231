const year = new Date().getFullYear();
const modified = document.lastModified;

let copyright = document.getElementById("current-year");

document.getElementById("lastModified").innerHTML = "Last updated: " + modified;
copyright.innerHTML = `David Poulsen | Utah | Copyright ${year}`;
