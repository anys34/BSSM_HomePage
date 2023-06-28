fetch('templates/header.html')
  .then(response => response.text())
  .then(data => {
    const headerDiv = document.getElementById('header');
    headerDiv.innerHTML = data;
  });