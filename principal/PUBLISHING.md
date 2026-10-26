# Publish at `somsubhra-mondal.github.io/principal/`

These steps add only the `/principal/` subfolder. They do not replace or reconfigure the existing root homepage.

## Upload through the GitHub website

1. Sign in to GitHub and open the repository named `somsubhra-mondal.github.io`.
2. Confirm the repository homepage currently contains the files for the existing root site. Do not delete, rename, or replace them.
3. Select **Add file** → **Create new file**.
4. In the filename box, enter `principal/.gitkeep`. GitHub will create the `principal` folder in the form.
5. Select **Commit changes…**, enter `Create principal portfolio folder`, choose **Commit directly to the default branch**, and confirm.
6. Open the new `principal` folder.
7. Select **Add file** → **Upload files**.
8. Drag the contents of this package's `principal` folder into the upload area: `index.html`, `styles.css`, `script.js`, `README.md`, `PUBLISHING.md`, and the `assets` folder. If the browser does not accept a folder, upload the four root files first, then create `principal/assets/favicon.svg` with **Add file** → **Create new file** and paste the SVG content.
9. Remove the temporary `.gitkeep` file: open it, choose the trash icon, and commit the deletion.
10. Commit the uploaded files directly to the same branch that currently publishes the root site (usually `main`).

## Confirm Pages settings without changing the root site

1. In the repository, open **Settings** → **Pages**.
2. Under **Build and deployment**, confirm the existing source remains unchanged. A common setup is **Deploy from a branch**, branch `main`, folder `/(root)`.
3. Do not switch the Pages source to `/docs`, do not select a different branch, and do not replace the root `index.html`.
4. Wait for the Pages deployment shown in **Actions** to finish.
5. Visit `https://somsubhra-mondal.github.io/principal/` in a private browser window.
6. Also visit `https://somsubhra-mondal.github.io/` and confirm the existing homepage is unchanged.

## Updating later

Open the repository's `principal` folder, select the file to update, use the pencil icon, and commit the change to the publishing branch. GitHub Pages will redeploy automatically.
