Web Technologies (CSC336) - Lab Mid Term

Name: Rameen Faisal
Roll Number: FA24-BCS-094

 My numbers
- N = 94
- BP = 600 + 94 = 694px
- H = (94 x 7) mod 360 = 298 (accent colour: hsl(298, 70%, 45%))
- K = (94 mod 3) + 3 = 4

Files changed
- index.html
- product.html
- style.css
- script.js (new file)

Task 1 - CSS-only category filter
I gave each of the 10 product cards a data-category (tops, bottoms, outerwear or footwear) and added 5 radio buttons above the grid: All plus the 4 categories. "All" is checked when the page loads. A CSS rule using :checked and the ~ sibling selector hides every card that is not in the chosen category with display: none, so the grid closes up with no gaps. The selected filter is filled with the accent colour hsl(298, 70%, 45%). I did this in index.html and style.css with no JavaScript.

Task 2 - Product page layout with a sticky details box
I rebuilt the layout of product.html as a CSS Grid with named grid-template-areas: image, details and description. Below 694px they stack in one column. From 694px and wider, the image and details sit side by side and the description runs full width underneath. From 694px the details box has position: sticky with top: 84px, which comes from (94 mod 40) + 70. I also made the description longer so the sticky effect can be seen while scrolling.

Task 3 - JavaScript live search and price sort
I added script.js and linked it to index.html. The search box filters the existing cards by product name as the user types, ignoring case, and it works together with the category filter. If no card matches, the grid is hidden and "No products found" is shown. The "Sort by price" button reads each price from the card and reorders the existing cards with appendChild, lowest to highest on the first click and highest to lowest on the next. On page load, the script adds a "Premium" label to any product priced above Rs. 9,400 (94 x 100).

AI tools used
Claude 