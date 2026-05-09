console.log("Fitness Zone Loaded");

function showContent(id) {

  let allContent = document.querySelectorAll(".info-content");

  allContent.forEach(content => {
    content.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}
