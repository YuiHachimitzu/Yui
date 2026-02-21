# 💕 Our Love Story - Website for Your GF

A beautiful, romantic website created with love for you and your girlfriend!

## ✨ Features

### 1. **Hero Section**
- Stunning romantic background with animated hearts
- Your names displayed beautifully
- "Together since" date badge
- Smooth scroll indicator

### 2. **Love Story Timeline**
- 4 milestone moments of your relationship
- Interactive timeline with beautiful images
- Animated transitions on scroll
- Customizable dates and stories

### 3. **Digital Love Letter**
- Click-to-open envelope design
- Beautiful love letter with romantic quotes
- Fully customizable message
- Elegant typography

### 4. **Memory Gallery**
- 6 romantic photo cards
- Lightbox viewer with navigation
- Hover effects and animations
- Easy to add your own photos

### 5. **Our World Dashboard**
- Anniversary countdown timer
- Days together counter
- Daily love quote
- Memory of the moment
- Love stats

### 6. **Reasons Why I Love You**
- Carousel of 10 reasons
- Beautiful card design
- Navigation controls
- Easy to customize

### 7. **Bucket List**
- Interactive checklist
- Progress tracking
- Add new dreams
- Toggle completion

### 8. **Romantic Footer**
- Beautiful closing message
- Floating hearts animation
- Your signature

### Bonus Features:
- 🎵 Music player (add your song!)
- 💖 Floating hearts background
- 📍 Navigation dots
- 📊 Scroll progress bar
- 🎨 Beautiful pink/purple/rose color scheme
- ✨ Smooth animations throughout

---

## 🚀 How to Deploy on GitHub Pages

### Option 1: Deploy the Built Files (Easiest)

1. **Extract the `our-love-story-website.tar.gz` file**
   ```bash
   tar -xzf our-love-story-website.tar.gz
   cd app/dist
   ```

2. **Create a new GitHub repository**
   - Go to github.com and create a new repository
   - Name it something like `our-love-story`

3. **Upload the files**
   - Upload all files from the `dist` folder to your repository
   - Or use Git commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/our-love-story.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Click Save
   - Wait a few minutes for the site to be live!

### Option 2: Deploy with Custom Domain

Follow the same steps as above, then:
- Add a `CNAME` file with your custom domain
- Configure DNS settings with your domain provider

---

## 🎨 How to Customize

### 1. **Change Names & Dates**

Edit these files in the `src/sections/` folder:

**Hero Section** (`src/sections/Hero.tsx`):
```tsx
// Line ~70: Change the names
<span>You</span>
<span>Your Love</span>

// Line ~78: Change the date
<span>Together since [Your Date]</span>
```

**Dashboard** (`src/sections/Dashboard.tsx`):
```tsx
// Line ~7-8: Change the anniversary dates
const ANNIVERSARY_DATE = new Date('2024-02-14'); // Your start date
const NEXT_ANNIVERSARY = new Date('2025-02-14'); // Next anniversary
```

**Footer** (`src/sections/Footer.tsx`):
```tsx
// Line ~95: Change your name
<p>[Your Name]</p>
```

### 2. **Update Timeline Events**

Edit `src/sections/Timeline.tsx`:
```tsx
const timelineEvents = [
  {
    date: 'The Day We Met',     // Change this
    title: 'First Encounter',    // Change this
    description: 'Your story...', // Change this
    image: '/timeline-1.jpg',    // Change image if needed
    side: 'left',
  },
  // Add more events or edit existing ones
];
```

### 3. **Customize the Love Letter**

Edit `src/sections/LoveLetter.tsx`:
- Find the letter content (around line ~45)
- Replace the text with your own message
- Keep the formatting for best results

### 4. **Add Your Own Photos**

1. Replace images in the `public/` folder:
   - `hero-bg.jpg` - Hero background
   - `love-letter-bg.jpg` - Love letter background
   - `timeline-1.jpg` to `timeline-4.jpg` - Timeline images
   - `gallery-1.jpg` to `gallery-6.jpg` - Gallery images

2. Use the same filenames or update the references in the code

### 5. **Update Reasons Why I Love You**

Edit `src/sections/Reasons.tsx`:
```tsx
const reasons = [
  {
    number: '01',
    title: 'Your Beautiful Smile',  // Change this
    description: 'Your reason...',   // Change this
  },
  // Add more reasons!
];
```

### 6. **Customize Bucket List**

Edit `src/sections/BucketList.tsx`:
```tsx
const initialItems = [
  { id: 1, text: 'Your dream here', completed: false, icon: Heart },
  // Add your dreams!
];
```

### 7. **Add Your Song**

1. Add your music file to the `public/` folder as `your-song.mp3`
2. The music player will automatically detect it!

---

## 🛠️ Development (If You Want to Modify)

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup
```bash
# Extract the source code
tar -xzf our-love-story-source.tar.gz
cd app

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` folder.

---

## 📁 File Structure

```
app/
├── public/              # Static assets (images, music)
│   ├── hero-bg.jpg
│   ├── timeline-*.jpg
│   ├── gallery-*.jpg
│   └── your-song.mp3    # Add your music here
├── src/
│   ├── components/      # Reusable components
│   │   ├── FloatingHearts.tsx
│   │   └── MusicPlayer.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── Timeline.tsx
│   │   ├── LoveLetter.tsx
│   │   ├── Gallery.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Reasons.tsx
│   │   ├── BucketList.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html
├── package.json
└── ...config files
```

---

## 🎨 Color Scheme

The website uses a romantic color palette:
- **Primary**: Rose/Pink (`#ec4899`)
- **Secondary**: Purple (`#a855f7`)
- **Background**: Gradient from rose-50 to purple-50
- **Accents**: Gold/Yellow for sparkles

You can customize colors in `src/index.css` in the `:root` section.

---

## 💝 Tips for Making It Extra Special

1. **Add Inside Jokes** - Include references only you two understand
2. **Use Real Photos** - Replace the AI images with your actual photos
3. **Write From the Heart** - Customize the love letter with your real feelings
4. **Add Your Song** - Include "your song" in the music player
5. **Include Dates** - Add specific dates that are meaningful to you
6. **Add More Sections** - Create new sections for special memories

---

## 📱 Responsive Design

The website is fully responsive and looks great on:
- 💻 Desktop computers
- 📱 Mobile phones
- 📲 Tablets

---

## 🎯 SEO & Social Sharing

To improve sharing on social media:
1. Update the meta tags in `index.html`
2. Add an Open Graph image
3. Customize the title and description

---

## ❤️ Made with Love

This website was created to help you express your love in a beautiful, memorable way. Your girlfriend is going to love it! 

**Good luck, and may your love story continue to be beautiful!** 💕

---

## 🆘 Need Help?

If you run into any issues:
1. Check that all images are in the correct folder
2. Make sure file names match exactly (case-sensitive)
3. Verify Node.js version is 18+
4. Try clearing browser cache if changes don't appear

---

**Enjoy sharing your love!** 🥰
