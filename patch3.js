const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const searchStr = `          ) : filteredMenuItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMenuItems.map(item => (
                <div 
                  key={item.id}
                  className="bg-vanilla rounded-3xl border border-cream overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                  id={\`product-card-\${item.id}\`}
                >`;

const replaceStr = `          ) : filteredMenuItems.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filteredMenuItems.map(item => (
                  <motion.div 
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { type: 'spring', stiffness: 300, damping: 24 }
                      }
                    }}
                    className="bg-vanilla rounded-3xl border border-cream overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                    id={\`product-card-\${item.id}\`}
                  >`;

const endSearchStr = `                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (`;

const endReplaceStr = `                    </button>
                  </div>
                </motion.div>
              ))}
              </motion.div>
            </AnimatePresence>
          ) : (`;

if (code.includes(searchStr) && code.includes(endSearchStr)) {
  code = code.replace(searchStr, replaceStr);
  code = code.replace(endSearchStr, endReplaceStr);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Success");
} else {
  console.log("Not found.");
}
