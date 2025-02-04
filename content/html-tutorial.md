---
title: HTML
slug: html-tutorial
description: All You Need This Tutorial.
date: 10/10/2024
author: Mark
image: /blogimg/html-logo.png


---

## What is HTML?

HTML (HyperText Markup Language) is the standard language for creating web pages. It structures content using elements such as headings, paragraphs, images, and links.

## Basic HTML Structure

```bash
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

Explanation:

    <!DOCTYPE html> → Declares the document type as HTML5.
    <html> → The root element that wraps the entire page.
    <head> → Contains metadata (title, character set, etc.).
    <title> → Defines the page title shown on the browser tab.
    <body> → Contains the visible content.

## Basic HTML Elements

Headings (h1 to h6)

```bash
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
```

## Paragraphs(p)

```bash
<p>This is a paragraph of text.</p>
```

## Links
```bash
<a href="https://www.google.com" target="_blank">Visit Google</a>
```

## Images 
```bash
<img src="image.jpg" alt="A beautiful scenery" width="300">
```

## Lists in HTML

Ordered List

```bash
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

Unordered List

```bash

<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>

```

##  Forms in HTML

```bash

<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Submit</button>
</form>
```


## Tables in HTML

```bash

<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>30</td>
    </tr>
</table>
```
<th> → Table header.
<td> → Table data cell.

## Semantic HTML

```bash

<header>
    <h1>My Website</h1>
</header>
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>
</main>
<footer>
    <p>Copyright © 2024</p>
</footer>
```

Common semantic tags:

    <header> → Website header.
    <nav> → Navigation links.
    <main> → Main content area.
    <article> → A self-contained article.
    <footer> → Footer section.

## Embedding Videos
```bash

<video controls width="400">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

##  Embedding Audio
```bash

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

## Adding CSS to HTML
```bash

<p style="color: blue;">This is blue text.</p>
```
### Internal CSS
```
<style>
    body {
        background-color: lightgray;
    }
</style>
```

#### External CSS

Create a file styles.css:

```bash

body {
    background-color: lightgray;
}
```
#### Then link it in HTML:
```bash

<link rel="stylesheet" href="styles.css">
```

# HTML5 
#### HTML5 introduced new input types and attributes like required, placeholder, and email.

### Forms
```bash
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required placeholder="Enter your name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="Enter your email">

    <button type="submit">Submit</button>
</form>
```

#### HTML5 introduced semantic tags like <thead>, <tbody>, and <tfoot> for better table structure.

## Table
```bash
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```

#### HTML5 introduced semantic elements like <header>, <nav>, <main>, <article>, and <footer>.

## Semantic Elements
```bash
<header>
    <h1>My Website</h1>
</header>
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>
</main>
<footer>
    <p>Copyright © 2024</p>
</footer>
```

#### HTML5 introduced native support for audio and video.
## Video and Audio

```bash
<video controls width="400">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

## Local Storage and Session Storage
```bash
<script>
    // Storing data in Local Storage
    localStorage.setItem("username", "JohnDoe");

    // Retrieving data from Local Storage
    const username = localStorage.getItem("username");
    console.log(username); // Output: JohnDoe

    // Removing data from Local Storage
    localStorage.removeItem("username");

    // Clearing all data
    localStorage.clear();
</script>
```

## GeoLocation Api

```bash
<button onclick="getLocation()">Get My Location</button>
<p id="demo"></p>

<script>
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        document.getElementById("demo").innerHTML =
            "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
</script>
```

## Canvas
```bash
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;">
    Your browser does not support the canvas element.
</canvas>

<script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw a rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 80);

    // Draw text
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Hello, Canvas!", 20, 60);
</script>
```

## Vector
```bash
<svg width="200" height="200">
    <circle cx="100" cy="100" r="50" fill="blue" />
    <rect x="50" y="50" width="100" height="100" fill="red" />
    <text x="60" y="120" fill="white">SVG</text>
</svg>
```