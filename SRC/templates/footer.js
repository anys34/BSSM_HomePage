fetch('templates/footer.html')
  .then(response => response.text())
  .then(data => {
    const footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = data;
  });