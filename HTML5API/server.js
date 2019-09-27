let express = require('express');
let app = new express();
app.use(express.static('./page'));
app.listen(8888);