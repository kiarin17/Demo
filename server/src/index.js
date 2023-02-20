const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors')
require('dotenv').config();
const router = require('./routes');
const server = express();

const PORT = process.env.PORT || 8765;

server.use(cors({origin: '*'}))
server.use(express.json());
server.use('/', router);

server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server is ready to rock&roll on http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
