# LinkLeaf

A similar project to Linktree that can be hosted on Github Pages

# How to

- Fork the repository
- Edit the `src/data.json` file with your data
  - The icons are from [Font Awesome](https://fontawesome.com/icons?d=gallery). You can use whatever icon you want.
- Run `npm install`
- Edit homepage in `package.json`. It must be as follows: `https://{GITHUB_USERNAME}.github.io/{linkleaf}`
- Run `npm run deploy`

# Customization

## Change avatar

- Change `public/avatar.jpg` to your own avatar with .jpg extension

## Change background

There are two options: Use a color or use an image.

### Color

Just change the backgroundColor variable in `src/data.json` to your desired color.

### Image

- Remove the backgroundColor variable in `src/data.json`
- Change `public/background.jpg` to your own background with .jpg extension
