# Portfolio Website Setup and Deployment Guide

## 1. Introduction
This guide will walk you through the process of setting up and deploying your portfolio website. It covers installation, customization, testing, optimization, and deployment to various platforms.

## 2. Prerequisites
- Node.js and npm installed.
- A code editor like VSCode.
- Git installed.

## 3. Complete Portfolio Setup
1. **Clone the Repository**  
   Run the following command in your terminal:  
   ```bash  
   git clone https://github.com/SirMarioWin/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies**  
   Run:  
   ```bash  
   npm install
   ```

## 4. Customization
- Open the project in your code editor.
- Modify the `config.js` file to set your personal details, including your name, bio, and social media links.
- To customize the theme, edit the `styles.css` file located in the `assets/css` directory.

## 5. CV Functionality
1. Create your CV in PDF format.
2. Place the CV file in the `assets/docs` folder.
3. Link to your CV in your portfolio by adding a download button in the HTML where appropriate.

## 6. Testing
- Run the following command to start the local server:  
  ```bash  
  npm start
  ```  
- Navigate to `http://localhost:3000` in your web browser to view your portfolio.
- Test all links and functionalities to ensure everything works correctly.

## 7. Optimization
- Optimize images using tools like [TinyPNG](https://tinypng.com) before uploading them.
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for performance audits and follow the recommendations.

## 8. Deployment to Multiple Platforms
### 8.1. GitHub Pages
1. Commit your changes:  
   ```bash  
   git add .  
   git commit -m 'Preparing for deployment'  
   ```  
2. Push to GitHub:  
   ```bash  
   git push origin main  
   ```  
3. Enable GitHub Pages in your repository settings.

### 8.2. Netlify
1. Go to [Netlify](https://www.netlify.com) and create an account.
2. Click on "New site from Git" and link your repository.
3. Choose the branch to deploy and set the build command as `npm run build`.

### 8.3. Vercel
1. Visit [Vercel](https://vercel.com) and sign up.
2. Import your GitHub repository.
3. Vercel automatically detects and sets up a serverless deployment for your React apps.

## 9. Conclusion
You are now ready to present your portfolio to the world! Make sure to keep it updated and optimized for the best performance.