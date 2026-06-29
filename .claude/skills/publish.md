# Publish @stencil-kit packages

Run the full publish workflow: build → version bump → commit → publish npm → push GitHub.

## Steps

### 1. Build everything
```bash
npm run build
```

### 2. Rebuild Angular with correct version (always required)
```bash
cd packages/angular-workspace && npm run build:lib && cd ../..
```

### 3. Bump version (default: patch)
Ask the user: patch / minor / major? Default to patch if not specified.

```bash
npx lerna version patch --no-push --no-git-tag-version --yes
```

### 4. Manually bump Angular source version
Edit `packages/angular-workspace/projects/component-library/package.json` — change the `"version"` field to match the new version from step 3. Lerna does NOT do this automatically.

### 5. Rebuild Angular with new version
```bash
cd packages/angular-workspace && npm run build:lib && cd ../..
```

### 6. Commit everything
```bash
git add -A
git commit -m "chore: bump version to X.X.X"
```

### 7. Publish core, react, vue, tailwind via Lerna
```bash
npx lerna publish from-package --yes
```

### 8. Publish Angular manually (from repo root)
```bash
npm publish packages/angular-workspace/dist/component-library
```

### 9. Push to GitHub (triggers Pages redeploy)
```bash
git push origin main
```

### 10. Verify all versions live
```bash
npm view @stencil-kit/core version
npm view @stencil-kit/react version
npm view @stencil-kit/vue version
npm view @stencil-kit/angular version
npm view @stencil-kit/tailwind-plugin version
```

## Common errors

| Error | Fix |
|---|---|
| `EUNCOMMIT` | `git add -A && git commit -m "..."` |
| `E403 Two-factor` | Regenerate npm token with "Bypass 2FA" checked |
| `E409 cannot publish over existing` | Version already live — bump version first |
| Angular still shows old version | Manually edit `projects/component-library/package.json` and rebuild |
| Angular E403 wrong directory | Run `npm publish packages/angular-workspace/dist/component-library` from repo root |
