const codeToPage = {
  '11': '/galerie/anfahrt.html',
  '12': '/galerie/schulsystem.html',
  '21': '/galerie/unterricht/sportplatz.html',
  '22': '/galerie/unterricht/sporthallen.html',
  '23': '/galerie/unterricht/sprachenraum.html',
  '24': '/galerie/unterricht/kunstsäle.html',
  '31': '/galerie/nw/informatik.html',
  '32': '/galerie/nw/chemie.html',
  '33': '/galerie/nw/physik.html',
  '34': '/galerie/nw/biologie.html',
  '41': '/galerie/orga/sekretariat.html',
  '42': '/galerie/orga/bibliothek.html',
  '43': '/galerie/orga/lehrerzimmer.html',
  '51': '/galerie/pausen/mensa.html',
  '52': '/galerie/pausen/gPausenhalle.html',
  '53': '/galerie/pausen/kPausenhalle.html',
  '61': '/galerie/archiv.html',
};

const codeInput = document.getElementById('code-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const enteredCode = codeInput.value;
  
  if (codeToPage.hasOwnProperty(enteredCode)) {
    window.location.href = codeToPage[enteredCode];
  } else {
    alert('Code existiert nicht!');
  }
});
