# Welcome to Remix-Firebase template (with Tailwind)

- [Remix Docs](https://remix.run/docs)

## Development

Since the app is deployed to firebase, we need to first connect the application with firebase.

### 1. Setup Firebase project

Setup firebase project with functions from [Firebase Console](https://console.firebase.google.com).

> The usage of `functions` requires the "Blaze" plan (which requires a payment method). The expense depends on the usage, so please be careful.

### 2. Connect project to app

The only thing required to connect your firebase project to this remix app is the **Firebase Project ID**. Copy the Project ID and paste it in `.firebaserc` file in the root.

> The "Project ID" can be found in the project settings of your Firebase project.

### 3. Setup `firebase-tools`

To install them, from your terminal:

```sh
npm install -g firebase-tools
```

Then login to firebase with your CLI

```sh
firebase login
```

### 4. Install dependencies

Dependencies must be installed for both `root` package and `functions` package.

From your terminal

```sh
npm install
```

```sh
cd functions
npm install
```

### 5. Ready to develop

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

The app is can be accessed at [http://localhost:3000](http://localhost:3000).

## Deployment

Depending on method of deployment, their are different steps.

### Deploy from local

If you want to deploy directly from your local machine, run following command in your terminal.

```sh
npm run deploy
```

This is a manual process and may cause you to upload old files from previous builds which are no longer necessary. You may clear up all the cache and previous builds before deploying with following command:

```sh
npm run clear
```

### Deploy from CI

Most likely, you would want to auto-deploy your app when you push to GitHub or other git hosts.

This starter-template comes with a configured GitHub Actions workflow to deploy the app when changes are pushed to `main` branch.

Workflow file: `.github/workflows/firebase-deploy.yml`

First, you need a **FIREBASE_TOKEN** that can be used in the CI. From your terminal, run:

```sh
firebase login:ci
```

This will provide you a TOKEN that can be used for deploying the app through CI. Copy that TOKEN.

Since in this example we are using GitHub Actions, we have add this TOKEN as a repository secret in GitHub. [Learn more here](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository).

The name of the secret must be `FIREBASE_TOKEN` and value should be the TOKEN that you copied from the output of `firebase login:ci` command.

> Similar configuration can be created for deploying to other CI.

## Remove Tailwind

Tailwind is a great tool but maybe not for everyone. Removing it is easy.

- Delete `tailwind.config.js` file from the root of the directory.
- In `package.json`,

  - remove `tailwindcss` from devDependencies.
  - remove script `build:css`, `dev:css` and `prebuild`
  - replace `dev` script with:

    ```json
    "dev": "concurrently \"npm run dev:remix\" \"npm run start\""
    ```

- In `app/root.tsx`,
  - remove import statement for `tailwindStyles`
  - remove stylesheet object from `links` function (where `tailwindStyles` is used).

## Contact

For any clarification and assistant, contact me:

Siddhant Gupta <me@guptasiddhant.com> /
[GitHub](https://github.com/guptasiddhant)

> I hope you create something amazing
