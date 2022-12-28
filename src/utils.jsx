import { Buffer } from 'buffer';

class utils {
  static getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  static bufferImage = (image) => {
    if (image) {
      return new Buffer(image, 'base64').toString('binary');
    } else return '';
  };

  static topPage = () => {
    document.body.scrollTop = 0;
  };
}

export default utils;
