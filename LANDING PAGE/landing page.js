function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openImage(src) {
  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
      <html>
          <head><title>Image</title></head>
          <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: rgba(0, 0, 0, 0.8);">
              <img src="${src}" style="max-width: 100%; max-height: 100%;">
          </body>
      </html>
  `);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent successfully!');
});
