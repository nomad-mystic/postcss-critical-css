module.exports = (opts = { }) =>

// Work with options here

  ({
    postcssPlugin: 'postcss-critical-css',

    Root (root, postcss) {
      // Transform CSS AST here

      console.log(opts);
      console.log(root);
      console.log(postcss);
    }
    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  })

module.exports.postcss = true
