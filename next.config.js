const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
  },
}
// module.exports = useSCSS({
//     sassOptions: {
//         cssModules: true,
//         includePaths: [path.join(__dirname, 'src/styles')]
//     }
// });