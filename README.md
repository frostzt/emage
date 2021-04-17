# Emage

<div align="center">
  <h3>
    <a href="https://emageical.herokuapp.com/">
      Demo
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://i.imgur.com/I6D0nQI.png)

This project uses two APIs both of Imgur and Emage (API is included). The original application that you find here is hosted on Heroku, therefore the data is lost after every server restart or recompile. (I'll talk about this in more detail at last)

- Check it here: [Emageical](https://emageical.herokuapp.com/)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Expressjs](https://expressjs.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application helps you host your images and modify them in few properties.

- Uses Imgur API for hosting images (No account or signup required)
- Also has built-in API but the storage on heroku is ephemeral therefore the data is lost after a recompile or restart.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/frostzt/emage.git

# Install dependencies (do in both client and main folder)
$ npm install

# Run the app
$ npm run dev
```

## Deployed Application

The Application shown in the demo is hosted on [Heroku](https://www.heroku.com/) in a free dyno, in a nutshell any image you host using Emage API will not be kept as permanent and will be deleted as soon as the app restarts or recompiles.
However images uploaded on Imgur are permanent however you won't be able to access them without the link which is yielded once you upload it. This does not mean the application won't work on production. If you want to use this app just clone it and deploy it on your server or something like AWS and then it will work just normal and the images uploaded using Emage API won't be lost!

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- GitHub [@frostzt](https://{github.com/frostzt})
- Twitter [@souravsrawat](https://{twitter.com/souravsrawat})
