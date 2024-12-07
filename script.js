
const canvas = document.getElementById('signature');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => (drawing = true));
canvas.addEventListener('mouseup', () => {
  drawing = false;
  ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);

function draw(event) {
  if (!drawing) return;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

document.getElementById('claim-button').addEventListener('click', () => {
  const signatureData = canvas.toDataURL();
  document.getElementById("content").classList.add('fade-out');
  document.getElementById("content2").classList.add('fade-out');
  
  const signatureImg = document.createElement('img');
  signatureImg.src = signatureData;

  const signatureBox = document.querySelector('.signature-box');
  signatureBox.innerHTML = '';
  signatureBox.appendChild(signatureImg);

  setTimeout(() => {
    const info = document.getElementById("content");
    info.innerHTML = `
    <h2>I sign this document to prove that I will:</h2>
    <p>Vote for this project</p>
    `
    info.classList.remove('fade-out')
    info.classList.remove('hiden')

  }, 800);
});