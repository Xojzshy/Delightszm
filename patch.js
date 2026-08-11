const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
const startMatch = '{/* Main video background */}';
const endMatch = '                </div>\n              </div>\n\n              <div className="pt-4">';
const startIndex = code.indexOf(startMatch);
const endIndex = code.indexOf(endMatch);
if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* TikTok Embedded Video */}
                  <iframe 
                    src="https://www.tiktok.com/embed/v2/7567429144506567947" 
                    className="w-full h-full border-0 absolute inset-0 z-10" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
`;
  code = code.slice(0, startIndex) + replacement + code.slice(endIndex);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Replaced successfully!");
} else {
  console.log("Could not find boundaries.");
}
