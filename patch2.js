const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const importStr = "import { WorkspaceFeatures } from './components/WorkspaceFeatures';\n";
code = code.replace(importStr, importStr + "import { motion, AnimatePresence } from 'motion/react';\n");

fs.writeFileSync('src/App.tsx', code);
