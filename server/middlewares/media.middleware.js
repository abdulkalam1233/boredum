const path = require('path');
const multer = require('multer');
const fs = require('fs');
const compose = require('composable-middleware');

const uploadLocalStorage = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const destinationPath = path.join('uploads', req.folder);

      fs.mkdir(
        destinationPath,
        {
          recursive: true
        },
        error => {
          cb(error, destinationPath);
        }
      );
    },
    filename: (req, file, cb) => {
      const filename =
        file.originalname.split('.').slice(0, -1).join('.') +
        '_' +
        Date.now().toString() +
        '.' +
        file.originalname.split('.').pop();
      cb(null, filename);
    }
  }),
  preservePath: true
}).any();

function saveProfileImagesLocally() {
  return compose().use(async (req, res, next) => {
    req.folder = `profileImages${req.user ? `/${req.user.email}` : req.body.email ? `/${req.body.email}` : ''}`;
    uploadLocalStorage(req, res, error => {
      if (error) {
        return res.status(400).send({ message: error.message || 'failed to save image!' });
      } else {
        next();
      }
    });
  });
}

module.exports = {
    saveProfileImagesLocally
}