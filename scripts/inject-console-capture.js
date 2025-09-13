const fs = require('fs');
const path = require('path');

const SCRIPT_TAG = '<script src="/dashboard-console-capture.js"></script>';
const BUILD_DIR = '.next';

function injectConsoleScript() {
  try {
    const htmlFiles = findHtmlFiles(BUILD_DIR);
    
    htmlFiles.forEach(filePath => {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Only inject if not already present
      if (!content.includes('/dashboard-console-capture.js')) {
        // Try to inject in head first, then before closing body
        if (content.includes('</head>')) {
          content = content.replace('</head>', `${SCRIPT_TAG}</head>`);
        } else if (content.includes('</body>')) {
          content = content.replace('</body>', `${SCRIPT_TAG}</body>`);
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Injected console capture script into ${filePath}`);
      }
    });
    
    console.log(`🎉 Console capture script injection complete! Processed ${htmlFiles.length} files.`);
  } catch (error) {
    console.error('❌ Error injecting console capture script:', error);
    process.exit(1);
  }
}

function findHtmlFiles(dir) {
  const htmlFiles = [];
  
  function searchDirectory(directory) {
    try {
      const items = fs.readdirSync(directory);
      
      items.forEach(item => {
        const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          searchDirectory(fullPath);
        } else if (item.endsWith('.html')) {
          htmlFiles.push(fullPath);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  if (fs.existsSync(dir)) {
    searchDirectory(dir);
  }
  
  return htmlFiles;
}

// Run the injection
injectConsoleScript();