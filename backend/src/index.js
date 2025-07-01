const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/forms', require('./routes/forms'));
app.use('/api/submissions', require('./routes/submissions'));

const PORT = process.env.PORT || 4000;
sequelize.sync().then(()=>{
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
});