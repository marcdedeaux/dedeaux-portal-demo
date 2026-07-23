# Dedeaux Properties Portal — GitHub Pages Demo

This package is a script-free static demo built with HTML and CSS only. It is designed to work on GitHub Pages and on corporate computers that block local JavaScript.

## Publish on GitHub Pages

1. Create a GitHub repository named `dedeaux-portal-demo`.
2. Upload every file and folder from this package to the repository root.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Click **Save**.
8. GitHub will provide a public web address after deployment completes.

## Demo behavior

- Open `index.html` or the GitHub Pages URL.
- The Sign In button opens the portal without checking a password.
- Navigation works through normal HTML links.
- Search, filters, editing, permissions and data changes are visual only.
- Do not add confidential company information because GitHub Pages may be publicly accessible.

## Production version

The future production portal should use secure authentication, a database, role-based permissions, file storage, audit logs and backups. Keep that project in a separate private repository.
