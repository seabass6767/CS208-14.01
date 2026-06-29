# Downtown Donuts Website Project ReadMe

## Project Overview

This is a prototype website for **Downtown Donuts**, a family-owned donut and coffee shop that has been open since 1992. The website is made to show the menu, share the shop’s story, include online ordering links, and let customers leave comments.

The design is meant to feel cozy, clean, modern, and easy to use.

## Pages

* **Home**: Introduces Downtown Donuts and gives quick links to the menu and ordering.
* **Menu**: Shows the donut, coffee, drink, and breakfast items from the menu PDF.
* **About**: Shares a short story about the business being family-owned since 1992.
* **Comments**: Gives customers a place to leave comments on the website.

## Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/seabass6767/CS208-14.01.git
```

2. Go into the project folder:

```bash
cd CS208-14.01
```

3. Install everything:

```bash
npm install
```

4. Start the project:

```bash
npm start
```

5. Open the site at:

```txt
http://localhost:3000
```

## Design Decisions

I used the Downtown Donuts brand colors from the style guide. The dark green is used for the header and darker sections, the yellow is used for buttons and accents, and the light background keeps the site clean.

I kept the navigation simple with Home, Menu, About, and Comments so customers can find everything quickly.

I made the menu into website cards instead of only using the PDF because it looks cleaner and is easier to read on a phone.

I also used rounded cards, spacing, and simple sections to make the website feel chill and modern without being too much.

## Edge Cases

* If the server or database is not working, the comments page should show a friendly error instead of crashing.
* If someone submits only spaces, the comment should not be saved.
* If someone types a super long comment, the site should limit it.
* If someone double-clicks submit, the button should stop duplicate comments from being posted.

## Challenges & Learnings

One challenge was working with the database because the app needs the server and database running at the same time.

Another challenge was taking the menu PDF and turning it into a clean website layout. I organized the items into sections like Signature Donuts, Coffee, Other Drinks, and Breakfast Bites.

## Accessibility

I added labels for form inputs, used clear navigation links, used semantic HTML sections, and made the layout responsive for smaller screens.

## Technologies Used

* Node.js
* Express
* Pug
* CSS
* JavaScript
* MySQL / MariaDB

## Citations

* Downtown Donuts Brand Guidelines PDF provided in class. Used for colors, typography, and branding.
* Downtown Donuts Menu PDF provided in class. Used for menu items, prices, hours, ordering options, and contact info.
* Google Fonts. Used for Montserrat and Italianno fonts.
  https://fonts.google.com/
* MDN Web Docs. Used for help with HTML, CSS, forms, and responsive design.
  https://developer.mozilla.org/
* Express Documentation. Used for Express routing help.
  https://expressjs.com/
* Pug Documentation. Used for Pug template syntax.
  https://pugjs.org/
* mysql2 Documentation. Used for database connection reference.
  https://www.npmjs.com/package/mysql2
* OpenAI ChatGPT. Used for help brainstorming the layout, organizing the README, debugging steps, and improving wording. Final choices were reviewed and edited by me.
  https://chatgpt.com/
