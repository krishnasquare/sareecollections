# Google Sheets Setup Guide for SareeLux

This guide explains how to connect your website to Google Sheets to manage products.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click on **Blank** to create a new sheet
3. Rename the sheet to "Products"

## Step 2: Set Up Column Headers

Create the following columns in row 1:

| Column | Header Name | Example |
|--------|-------------|---------|
| A | id | 1 |
| B | name | Banarasi Silk Royal |
| C | category | Silk |
| D | price | 8500 |
| E | image | https://images.unsplash.com/... |
| F | images | https://img1.jpg\|https://img2.jpg |
| G | description | Exquisite handwoven Banarasi silk... |
| H | details | Pure silk with gold zari\|Handwoven in Varanasi\|Blouse piece included |
| I | available | true |
| J | stock | 5 |

## Step 3: Add Your Products

Add your products starting from row 2. Here's an example:

```
1,Banarasi Silk Royal,Silk,8500,https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800,https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800|https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800,Exquisite handwoven Banarasi silk with intricate golden zari work,Pure silk with gold zari|Handwoven in Varanasi|Blouse piece included,true,5
2,Mysore Silk Classic,Silk,6800,https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800,https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800,Pure mulberry silk with traditional South Indian motifs,100% Mulberry silk|Traditional motifs|With blouse piece,true,8
3,Cotton Summer Breeze,Cotton,2200,https://images.unsplash.com/photo-1618932260643-ee32b53e2f45?w=800,https://images.unsplash.com/photo-1618932260643-ee32b53e2f45?w=800,Lightweight breathable cotton perfect for daily wear,Pure cotton fabric|Block print design|Machine washable,true,15
```

## Step 4: Publish to Web

1. Click **File** in the menu
2. Hover over **Share**
3. Click **Publish to web**
4. Select **Comma separated values (.csv)** from the dropdown
5. Click **Publish**
6. Copy the URL provided

## Step 5: Update Your Website

1. Open `index.html` in a text editor
2. Find this line (around line 280):
```javascript
const GOOGLE_SHEET_CSV_URL = 'YOUR_GOOGLE_SHEET_CSV_URL_HERE';
```
3. Replace `'YOUR_GOOGLE_SHEET_CSV_URL_HERE'` with your published CSV URL

Example:
```javascript
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vABC123XYZ/pub?output=csv';
```

## Step 6: Test

1. Refresh your website
2. Products should now load from your Google Sheet
3. Any changes you make in the sheet will appear on the website

## Category Values

Use these exact values for category:
- Silk
- Cotton
- Chiffon
- Georgette

## Tips

- Use high-quality images (at least 800px wide)
- Separate multiple image URLs with `|` (pipe) character
- Separate multiple details with `|` (pipe) character
- Set `available` to `false` for sold out items
- The website will automatically use sample products if the sheet can't be loaded