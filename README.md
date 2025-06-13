📦 Barrel File Performance Test
This repository contains a sample React/Next.js project used to measure the bundle size and build time impact of using barrel files (index.ts) versus direct imports.

🧪 Project Structure
The test setup includes:

components/ folder with 10 dummy component files

Two variations:

Direct Import: Only one component is imported directly

Barrel Import: All 10 components are re-exported via index.ts, but only one is imported

📊 Metrics Collected
Bundle Size (using @next/bundle-analyzer)

Build Time (100 build runs using Node script)

📷 Visual Results
Visualizations of the results can be found in the /post_images/barrel-files directory:

direct_import.png and barrel_import.png: Bundle size comparisons

build_time.png: Probability density function comparing build times

circular_direct.png and circular_barrel.png: Impact of circular imports on bundle size

dependency_diagram.png: Diagram illustrating circular import risks

📈 Key Findings
Barrel files increase bundle size when unused exports are bundled

Minor but measurable increase in build time (~80ms on average)

Circular imports significantly bloat bundle size (~53% increase)

Next.js’s optimizePackageImports can help mitigate barrel drawbacks

🔧 How to Run
Install dependencies:

bash
Copy
Edit
npm install
Analyze bundle:

bash
Copy
Edit
ANALYZE=true npm run build
Run build time test:

bash
Copy
Edit
node measureBuildTime.js
Ensure no other major processes are running to avoid skewing build time results.

📁 File Overview
File / Folder	Description
/components	Dummy components and optional index.ts
/scripts/measureBuildTime.js	Node script for benchmarking build times
/next.config.js	Next.js config with optional analyzer setup
/post_images/	Screenshots of build and bundle results

✅ Conclusion
Barrel files can clean up your imports and simplify large projects, but they come with performance tradeoffs. This repo serves as a reproducible testbed for measuring those tradeoffs in a real Next.js environment.
