# ts-library-quickstart

Quickstart for esbuild library projects.

[Example API documentation](https://gyng.github.io/ts-library-quickstart/)

- Typescript
- Testing with jest
- Linting with prettier, eslint
- CI and skeleton CD with GitHub Actions
- Dockerfiles for build and test
- Publish to NPM and GitHub Packages by creating releases

## Usage

See `scripts` in `package.json` for more scripts.

- `npm run d` watch and build
- `npm run t:watch` watch and test
- `npm run lint`
- `npm run build`

Build targets are set in `esbuild.js`.

## Publish

### Setup

1. Get an automation token from npm under settings

   ```
   https://www.npmjs.com/settings/$YOUR_USERNAME/tokens/
   ```

2. Add the token to your repository secrets.

   ```
   https://github.com/$YOUR_USERNAME/$YOUR_REPO_NAME/settings/secrets/actions/new
   ```

   - Name: `NPM_TOKEN`
   - Value: The automation token you got from the previous step

3. Update the `scope` key in `./github/workflows/publish.yml` to your GitHub (organisation) name

4. Configure GitHub Pages

   ```
   https://github.com/gyng/esbuild-quickstart/settings/pages
   ```

   - Source: `gh-pages` branch
   - Directory: `/ (root)`

### Run

1. Bump your version number in `package.json` before this. Run `npm i` to update `package-lock.json`. Publishing will fail if the version already exists.

2. Create a new release.

   ```
   https://github.com/$YOUR_USERNAME/$YOUR_REPO_NAME/releases
   ```

   The workflow at `./github/workflows/publish.yml` should run and publish your packages to both NPM and GitHub Packages.

   Also, API documentation will be published to your GitHub pages via the `gh-pages` branch. It will be viewable at `https://$YOUR_NAME.github.io/$YOUR_REPO/`.
