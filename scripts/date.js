const year = new Date().getFullYear();
const modified = document.lastModified;

let copyright = document.getElementById("current-year");

document.getElementById("lastModified").innerHTML = "Last updated: " + modified;
copyright.append(` ${year} Murray Chamber of Commerce`);

