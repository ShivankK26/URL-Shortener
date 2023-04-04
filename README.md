<!-- ABOUT THE PROJECT -->
# About The Project




In this Project, I've built a WebApp using which you can create a shorter form of any URL which you want to. It can be used by Social Media Influencers in order to appropriately design their posts so that the URL occupies minimum space and has many other practical applications too. So, just have fun!!!



Use the `README.md` to get started.




# Built With

The Tech Stacks use are:

<div align="center">
<a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=mongodb,expressjs,nodejs,js,bootstrap,ejs" />
</a>
</div>




<!-- GETTING STARTED -->
# Getting Started

To get started, create a file called server.js and import all the required modules in it. After that create a folder called views and place the index.ejs file in it. Also, create another folder called models in which add the mongoDB connecting file. To shorten our links we'll use the shortId module from mongoDB.


* modules

  ```sh
  const express = require('express')
  const mongoose = require('mongoose')
  const ShortUrl = require('./models/shortUrl')
  const app = express()
  ```

* ejs connectivity

  ```sh
  app.set("view engine","ejs")
  ```
  
* shortId module

  ```sh
  const mongoose = require('mongoose')
  const shortId  = require('shortid')
  ```

## Prerequisites

To begin with our Project, we'll need to install some npm packages like node, express, mongoose, mongo, ejs using the command given below. We'll also need to install the shortId module.


* npm

  ```sh
  npm install node express mongo mongoose ejs
  ```


* Some other modules

  ```sh
  const mongoose = require('mongoose')
  const shortId  = require('shortid')
  ```
  
  
* To ease the process of development, we'll install nodemon (Make sure you already have nodemon installed in your system, if not then [visit here](https://nodemon.io/)).

  ```sh
  npm i nodemon
  ```

## Installation

In this Project, we'll use the schema method from mongoDB in order to create an object wherein we can perform all the operations.
In order to create a URL Shortener we'll shortId.generate command to generate a shortID automatically.


```sh
  // This is an object inside the mongoDB schema object.
  short: {
        type: String,
        required: true,
        default: shortId.generate
        },
  ```









<!-- CONTACT -->
# Contact

Your Name - Shivank Kapur - shivankkapur2004@gmail.com

Project Link: 
