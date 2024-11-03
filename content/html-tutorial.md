---
title: HTML
slug: html-tutorial
description: All You Need This Tutorial.
date: 10/10/2024
author: Mark
image: /blogimg/html-logo.png

---

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Tutorial</title>
    <meta name="description" content="All You Need This Tutorial.">
    <meta name="author" content="Mark">
    <link rel="icon" href="/html-logo.png" type="image/png">
</head>
<body>
    <h1>Chapter 1: Introduction to HTML</h1>
    <h2>What is HTML?</h2>
    <p>HTML (Hyper Text Markup Language) is the standard language used to create webpages. It structures content on the web, enabling browsers to display text, images, and interactive elements. HTML is composed of elements represented by tags. Tags usually come in pairs: an opening tag &lt;tag&gt; and a closing tag &lt;/tag&gt;. The content goes between the tags.</p>
    <h3>Basic HTML Document Structure</h3>
    <p>An HTML document follows a specific structure. Here’s the most basic form:</p>
    <pre>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Document&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;h1&gt;Hello, World!&lt;/h1&gt;
            &lt;p&gt;This is a basic HTML document.&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </pre>
    <h2>HTML Tags</h2>
    <ul>
        <li>&lt;html&gt;: The root element that contains the entire webpage.</li>
        <li>&lt;head&gt;: Contains meta-information like the title and links to stylesheets.</li>
        <li>&lt;title&gt;: The title of the webpage (visible in the browser tab).</li>
        <li>&lt;body&gt;: Contains the content of the webpage.</li>
    </ul>
    <h1>Chapter 2: Formatting Text and Lists</h1>
    <h2>Headings</h2>
    <p>HTML supports six levels of headings from &lt;h1&gt; to &lt;h6&gt;, where &lt;h1&gt; is the most important.</p>
    <pre>
        &lt;h1&gt;This is an H1 heading&lt;/h1&gt;
        &lt;h2&gt;This is an H2 heading&lt;/h2&gt;
    </pre>
    <h2>Paragraphs and Breaks</h2>
    <p>Paragraphs are defined with the &lt;p&gt; tag. To create a line break, use &lt;br&gt;.</p>
    <pre>
        &lt;p&gt;This is a paragraph&lt;/p&gt;
        &lt;p&gt;This is another paragraph&lt;/p&gt;
    </pre>
    <h2>Bold, Italic, and Underline</h2>
    <ul>
        <li>Bold: &lt;b&gt; or &lt;strong&gt;</li>
        <li>Italic: &lt;i&gt; or &lt;em&gt;</li>
        <li>Underline: &lt;u&gt;</li>
    </ul>
    <p>This is <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.</p>
    <h2>Lists</h2>
    <p>HTML provides ordered and unordered lists:</p>
    <ul>
        <li>Unordered lists: &lt;ul&gt; and &lt;li&gt;</li>
        <li>Ordered lists: &lt;ol&gt; and &lt;li&gt;</li>
    </ul>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <ol>
        <li>First</li>
        <li>Second</li>
    </ol>
    <h1>Chapter 3: Working with Links</h1>
    <h2>Creating Hyperlinks</h2>
    <p>To create a link, use the &lt;a&gt; tag with the href attribute. The content between &lt;a&gt; and &lt;/a&gt; is clickable.</p>
    <a href="https://www.google.com">Google</a>
    <h2>Open Links in a New Tab</h2>
    <p>To open a link in a new tab, add the target="_blank" attribute.</p>
    <a href="https://www.google.com" target="_blank">Open in new tab Google</a>
    <h1>Chapter 4: Adding Images</h1>
    <h2>The &lt;img&gt; Tag</h2>
    <p>Images are embedded using the &lt;img&gt; tag, which requires the src attribute to define the image source, and alt for accessibility.</p>
    <img src="image.jpg" alt="Description of image">
    <h2>Image Attributes</h2>
    <ul>
        <li>width and height: Define the size of the image.</li>
        <li>alt: Provides alternative text for users who can't view the image.</li>
    </ul>
    <img src="photo.jpg" alt="A Photo" width="300" height="200">
    <h1>Chapter 5: Tables</h1>
    <h2>Basic Table Structure</h2>
    <p>Tables are created using the &lt;table&gt; element, and they consist of rows (&lt;tr&gt;) and cells (&lt;td&gt;).</p>
    <table border="1">
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
        </tr>
    </table>
    <h2>Table Elements</h2>
    <ul>
        <li>&lt;table&gt;: Defines the table.</li>
        <li>&lt;tr&gt;: Table row.</li>
        <li>&lt;th&gt;: Table header.</li>
        <li>&lt;td&gt;: Table cell.</li>
    </ul>
    <h1>Chapter 6: Forms</h1>
    <h2>Creating Forms</h2>
    <p>Forms allow user input and data submission using elements like text fields, checkboxes, radio buttons, and buttons.</p>
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Submit">
    </form>
    <h2>Form Elements</h2>
    <ul>
        <li>Text Input: &lt;input type="text"&gt;</li>
        <li>Submit Button: &lt;input type="submit"&gt;</li>
        <li>Checkboxes: &lt;input type="checkbox"&gt;</li>
        <li>Radio Buttons: &lt;input type="radio"&gt;</li>
        <li>Dropdown: &lt;select&gt;</li>
    </ul>
    <select name="options">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </select>
    <h1>Chapter 7: HTML5 Features</h1>
    <h2>Semantic Elements</h2>
    <p>HTML5 introduced new semantic tags to define sections of a webpage, such as:</p>
    <ul>
        <li>&lt;header&gt;: Represents the header of a document or section.</li>
        <li>&lt;nav&gt;: Defines navigation links.</li>
        <li>&lt;section&gt;: Groups related content.</li>
        <li>&lt;article&gt;: Self-contained content like blog posts.</li>
        <li>&lt;footer&gt;: Represents the footer of a document.</li>
    </ul>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <section>
        <article>
            <h2>Article Title</h2>
            <p>This is an article section.</p>
        </article>
    </section>
    <footer>
        <p>Contact info and links here</p>
    </footer>
    <h2>Audio and Video</h2>
    <p>HTML5 makes it easy to embed multimedia.</p>
    <h3>Audio:</h3>
    <audio controls>
        <source src="audiofile.mp3" type="audio/mpeg">
    </audio>
    <h3>Video:</h3>
    <video controls>
        <source src="videofile.mp4" type="video/mp4">
    </video>
</body>
</html>