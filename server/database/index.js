const { DB_OPTIONS } = require("../config");
const mongoose = require('mongoose');

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  // family: 4 // Use IPv4, skip trying IPv6
};

async function initDatabase() {
  const  {  
    host,
    port,
    user,
    password,
    name
  } = DB_OPTIONS;
  let userPasswordStr = ''
  if (user && password) {
    userPasswordStr = `${user}:${password}@`
  }
  let hostUrl = `${host}`;
  if (port) {
    hostUrl += `${hostUrl}:${port}`
  }
  const uri =  `mongodb+srv://${userPasswordStr}${hostUrl}/${name}`;
  await mongoose.connect(uri, options);
}

module.exports = {
  initDatabase
}