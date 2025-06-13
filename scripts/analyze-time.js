const { exec } = require('child_process');
const fs = require('fs');

const runs = 100;
const times = [];

const outputFile = process.argv[2];

if (!outputFile) {
  console.error('❌ Please provide an output file name as a command-line argument.');
  process.exit(1);
}

function runBuild(index = 0) {
  if (index >= runs) {
    const average = times.reduce((sum, time) => sum + time, 0) / times.length;
  
    let csv = 'Run,Time(ms)\n';
    times.forEach((t, i) => {
      csv += `${i + 1},${t.toFixed(2)}\n`;
    });
  
    fs.writeFileSync(outputFile, csv);
    console.log(`\n✅ CSV written to ${outputFile}`);
    return;
  }

  const label = `Run ${index + 1}`;
  const start = Date.now();

  exec('npx cross-env ANALYZE=true next build', (error, stdout, stderr) => {
    const end = Date.now();
    const duration = end - start;
    times.push(duration);

    //console.log(`${label} completed in ${duration.toFixed(2)} ms`);

    if (error) console.error(`Error in ${label}:\n`, error);
    if (stderr) console.error(`Stderr in ${label}:\n`, stderr);

    runBuild(index + 1);
  });
}

runBuild();
