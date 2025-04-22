// fix-imports.js
const fs = require('fs');
const path = require('path');

// Point to your src folder
const ROOT_DIR = path.resolve(__dirname, 'src');
const TARGET_IMPORT = '@/shared/components';

function findJsxFiles(dir) {
  let files = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(findJsxFiles(fullPath));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      files.push(fullPath);
    }
  });

  return files;
}

function getRelativeImport(filePath) {
  const from = path.dirname(filePath);
  const to = path.join(ROOT_DIR, 'shared', 'components');
  return path.relative(from, to).replace(/\\/g, '/');
}

function rewriteImports() {
  const files = findJsxFiles(ROOT_DIR);

  files.forEach((filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes(TARGET_IMPORT)) {
      const newImportPath = getRelativeImport(filePath);

      const updated = content.replace(
        new RegExp(`(['"])${TARGET_IMPORT}`, 'g'),
        `$1${newImportPath}`
      );

      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✅ Updated imports in: ${path.relative(ROOT_DIR, filePath)}`);
    }
  });
}

rewriteImports();
