const fs = require('fs');
const path = require('path');

test('should contain an <h1> tag', () => {
  const filePath = path.join(__dirname, 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  
  // Verificar que exista una etiqueta <h1> en el contenido
  expect(htmlContent).toMatch(/<h1>.*<\/h1>/);
});
