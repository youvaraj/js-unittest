# JS Functions Unit Testing with Jest

This is a test automation framework for testing JS functions with the testing framework Jest

## Description

This is a sample test automation framework to do the unit testing of JavaScript Function with the testing tool Jest.

## Getting Started

### Dependencies

- Ensure you have node js installed v16+ is preferred
- Project uses following npm packages.
  - jest - JavaScript testing framework

These are already added in package.json. Go directly to # Installing

### Installing

- Go to the root folder in command line and run the following command.
  ```
  npm install
  ```

### Setup / Folder structure

- All the functions to be tested are in the src and sub folders
- All the corresponding tests are inside the test folder within respective sub folders

* NOTE : You should have corresponding test file for each module you are testing. The way it works is if you have a module called the demo we are using reqres.in ( A hosted REST-API ready to respond) site for testing.

- You can go ahead and change the API end point and updated your base api url at config/config.js

```
module.exports = {
apiUrl: 'https://reqres.in/api/users',
}

```

### Executing program

- Go to the root folder in terminal and run the command

```
npm test
```

## Screenshot

Once the test execution done you shoudl see the following in your terminal.

![My_Image](test-results.png)

## Authors

Youva Acharya\
youvaraj@gmail.com
