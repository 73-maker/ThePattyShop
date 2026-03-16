# The Patty Shop Website

Simple static website for The Patty Shop.

## Publishing to GitHub Pages

This repository is configured to automatically publish to GitHub Pages whenever changes are pushed to the `main` branch.

### One-time setup

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, select **GitHub Actions**.
3. Save the setting.

After that, every push to `main` will trigger the [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow and update the live site automatically.

### Live site

Once enabled, your site will be available at:

https://73-maker.github.io/ThePattyShop/
