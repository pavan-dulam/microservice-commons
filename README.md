# Code Utilities

This module provides a set of utility functions to simplify common tasks in your Node.js projects. Below are the key features and examples of how to use each module:

## Logger (`logger`)

### Usage:
```javascript
const logger = require('your-module-name').logger;

logger.debug('Debug message');
logger.info('Information message');
logger.warn('Warning message');
logger.error('Error message');
```

## Date and Time (`dateAndTime`)

### Usage:
```javascript
const dateAndTime = require('your-module-name').dateAndTime;

const currentDateTime = dateAndTime.getCurrentDateTime();
console.log('Current Date and Time:', currentDateTime);

const isoDateString = '2022-01-28T12:34:56Z';
const parsedDate = dateAndTime.parseIsoDate(isoDateString);
console.log('Parsed Date:', parsedDate);
```

## Object Utilities (`objectUtils`)

### Usage:
```javascript
const objectUtils = require('your-module-name').objectUtils;

const sortedArray = objectUtils.sort([3, 1, 2]);
console.log('Sorted Array:', sortedArray);

const deepCopy = objectUtils.deepCopy({ key: 'value' });
console.log('Deep Copy:', deepCopy);

const jsonString = '{"key": "value"}';
console.log('Is JSON:', objectUtils.isJson(jsonString));
```

## API Caller (`apiCaller`)

### Usage:
```javascript
const apiCaller = require('your-module-name').apiCaller;

const apiUrl = 'https://api.example.com/data';
const responseData = await apiCaller.get(apiUrl);
console.log('API Response:', responseData);
```

## Encryption (`encryption`)

### Usage:
```javascript
const encryption = require('your-module-name').encryption;

const secretKey = 'your-secret-key';
const encryptedText = encryption.encrypt('your-text-to-encrypt', secretKey);
console.log('Encrypted Text:', encryptedText);

const decryptedText = encryption.decrypt(encryptedText, secretKey);
console.log('Decrypted Text:', decryptedText);
```

## Filenames (`filenames`)

### Usage:
```javascript
const filenames = require('your-module-name').filenames;

const filename = filenames.getFilenameWithDatetime('prefix', 'yyyyMMdd-HHmmss', '.txt');
console.log('Generated Filename:', filename);

const supportedFormats = filenames.getSupportedFormats();
console.log('Supported Date Formats:', supportedFormats);
```

Feel free to integrate these modules into your projects and customize them according to your needs. If you encounter any issues or have suggestions for improvement, please don't hesitate to reach out. Happy coding!