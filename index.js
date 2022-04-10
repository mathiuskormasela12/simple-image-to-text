const T = require('tesseract.js')

T.recognize('image.png', 'ind').then(out => console.log(out.data.text)).catch(err => console.log(err))
