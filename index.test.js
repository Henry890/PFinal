const fs = require('fs');
const path = require('path');

test('La página debe contener un encabezado H1 con "Hola Mundo"', () => {
    const filePath = path.join(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    expect(htmlContent).toMatch(/<h1>Hola Mundo<\/h1>/);
});
