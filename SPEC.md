# SareeShop - Elegant Saree E-Commerce Site

## Project Overview
- **Project Name**: SareeShop
- **Type**: Single-page e-commerce website
- **Core Functionality**: Luxury Indian saree shopping with Google Sheets product loading and WhatsApp checkout
- **Target Users**: Indian fashion enthusiasts seeking premium sarees

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo, nav links, cart icon with badge
- **Hero**: Full-width banner with headline, tagline, CTA button
- **Filters**: Category filter bar (All, Silk, Cotton, Chiffon, Georgette)
- **Products**: Responsive grid (4 cols desktop, 2 cols tablet, 1 col mobile)
- **Cart Sidebar**: Slide-in cart panel from right
- **Checkout Modal**: WhatsApp order form
- **Footer**: Brand info, quick links

### Responsive Breakpoints
- Mobile: < 640px (1 column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (4 columns)

### Visual Design

#### Color Palette
- **Primary**: Deep Burgundy `#5D1B2C`
- **Primary Dark**: `#3D0F1C`
- **Secondary**: Gold `#C9A227`
- **Gold Light**: `#E8D5A3`
- **Background**: Warm Cream `#FDF8F0`
- **Card Background**: `#FFFFFF`
- **Text Primary**: `#2D1810`
- **Text Secondary**: `#6B5344`
- **Accent Success**: `#4A7C59`

#### Typography
- **Headings**: Playfair Display (Google Fonts)
- **Body**: Lato (Google Fonts)
- **Heading Sizes**:
  - H1: 3.5rem (hero)
  - H2: 2.5rem (section titles)
  - H3: 1.5rem (product titles)
- **Body**: 1rem

#### Spacing System
- Base unit: 4px
- Section padding: 80px vertical
- Card padding: 16px
- Grid gap: 24px

#### Visual Effects
- Card hover: translateY(-8px), box-shadow expansion
- Button hover: brightness increase, scale(1.02)
- Gold shimmer animation on hero CTA
- Smooth cart slide-in transition (300ms ease)
- Product image zoom on hover

### Components

#### Header
- Logo (text-based with gold accent)
- Navigation: Home, Collection, About
- Cart icon with item count badge
- Mobile: hamburger menu

#### Hero Section
- Background: burgundy with subtle pattern overlay
- Headline: "Timeless Elegance, Woven in Tradition"
- Subheadline: "Discover our exquisite collection of handpicked sarees"
- CTA: "Explore Collection" button with gold gradient
- Floating decorative elements

#### Filter Bar
- Horizontal scrollable on mobile
- Pills with active state (burgundy filled)
- Categories: All, Silk, Cotton, Chiffon, Georgette

#### Product Card
- Image container with hover zoom
- Category badge (top-left)
- Title, price (in gold)
- "Add to Cart" button
- Quick view on hover

#### Cart Sidebar
- Close button
- Cart items list with quantity controls
- Remove item button
- Subtotal calculation
- "Proceed to Checkout" button
- Empty cart state

#### Checkout Modal
- Customer name, phone, address inputs
- Order summary
- "Send via WhatsApp" button
- Format: "Hello SareeShop! I'd like to order: [items] Total: ₹[amount]"

#### Footer
- Brand description
- Quick links
- Social icons placeholder
- Copyright

## Functionality Specification

### Core Features

1. **Product Loading**
   - Load from Google Sheets CSV (public URL)
   - Fallback to sample data if fetch fails
   - Display loading state during fetch

2. **Category Filtering**
   - Filter products by category
   - "All" shows complete collection
   - Smooth transition between filters

3. **Cart Management**
   - Add products to cart
   - Update quantities (1-10 range)
   - Remove items
   - Persist cart in localStorage
   - Calculate subtotal

4. **WhatsApp Checkout**
   - Collect customer details
   - Format order message
   - Open WhatsApp with pre-filled message
   - Phone number: configurable

### Data Structure (Google Sheets CSV)
```
id,name,category,price,image,description
1,Banarasi Silk Dream,Silk,₹4,500,https://...,Handwoven banarasi silk
2,... continue
```

### User Interactions
- Click filter → products filter with fade animation
- Click "Add to Cart" → item added, cart badge updates, toast notification
- Click cart icon → cart sidebar slides in
- Click +/- in cart → quantity updates
- Click remove → item removed with animation
- Click checkout → modal opens with form
- Submit form → WhatsApp opens with message

### Edge Cases
- Empty cart: show empty state message
- Invalid Google Sheet: use fallback sample data
- Network error: show error toast, use cached/fallback data
- Zero quantity: remove item from cart

## Acceptance Criteria

1. ✅ Page loads with hero, filters, and product grid
2. ✅ Products display correctly with images, titles, prices
3. ✅ Category filters work correctly
4. ✅ Cart add/remove functionality works
5. ✅ Cart persists across page refresh
6. ✅ WhatsApp checkout opens with formatted order
7. ✅ Responsive on all screen sizes
8. ✅ Colors match burgundy/gold/cream palette
9. ✅ Fonts load correctly (Playfair Display, Lato)
10. ✅ Smooth animations and transitions