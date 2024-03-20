function inflateFish(){
  $(".pufferfish").attr("src", "images/Comp-1-6.gif");
}
$(".pufferfish").hover(inflateFish);


document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'P' || key === 'p') {
    window.location.href = "1index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'C' || key === 'c') {
    window.location.href = "2index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  if (key === 'O' || key === 'o') {
    window.location.href = "3index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;

  if (key === 'A' || key === 'a') {
    window.location.href = "4index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  if (key === 'V' || key === 'v') {
    window.location.href = "5index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'M' || key === 'm') {
    window.location.href = "6index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'H' || key === 'h') {
    window.location.href = "7index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'G' || key === 'g') {
    window.location.href = "8index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'L' || key === 'l') {
    window.location.href = "9index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'S' || key === 's') {
    window.location.href = "10index.html";
  }
});

document.addEventListener('keypress', function(event) {
  const key = event.key;
  
  if (key === 'R' || key === 'r') {
    // Redirect to another page
    window.location.href = "index.html";
  }
});