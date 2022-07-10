require('esbuild').serve({
  servedir: './public',
  port: 3000,
}, {
  entryPoints: ['./src/index.js'],
  outdir: './public/js',
  bundle: true,
}).then(server => {
  console.log(server)
})
