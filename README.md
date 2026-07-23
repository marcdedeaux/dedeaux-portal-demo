# Dedeaux Properties Industrial Intelligence Portal

A simple GitHub Pages-ready portal designed so routine changes can be made by editing one file: `content.js`.

## Publish to GitHub

1. Create a new **private** GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.

## Make changes later

Open `content.js` in GitHub and click the pencil icon. Most tab names, descriptions, property lists, requirements, reports, and Development Intelligence variables are stored there. Commit the change and GitHub Pages will refresh automatically.

See `EDITING_GUIDE.md` for exact examples.

## Important security limitation

This package is a static GitHub Pages prototype. The login screen is a visual gate, not secure authentication. Do not publish confidential information to a public GitHub Pages repository. A production portal should use secure authentication, a private database, role-based permissions, file storage, and audit logs.
