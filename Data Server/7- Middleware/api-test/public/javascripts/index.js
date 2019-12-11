fetch('http://localhost:5001/api/members')
  .then(response => response.json())
  .then(json => console.log(json))
