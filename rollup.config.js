import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import jsx from 'rollup-plugin-jsx'
import flow from 'rollup-plugin-flow'

const nodeEnv = JSON.stringify(
  process.env.NODE_ENV || 'development'
)

/**
 * Possibly useful snippet below...
 */
// commonjs({
//   include: [
//     'node_modules/**'
//   ],
//   exclude: [
//     'node_modules/process-es6/**'
//   ],
//   namedExports: {
//     'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
//     'node_modules/react-dom/index.js': ['render']
//   }
// }),

export default {
  input: 'index.js',
  output: {
    file: 'public/js/bundle.js',
    dir: 'public/js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    flow(),
    jsx({
      factory: 'React.createElement'
    }),
    commonjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/**'
      ]
    }),
    replace({
      'process.env.NODE_ENV': nodeEnv
    }),
    globals(),
    nodeResolve({
      browser: true,
      jsnext: true,
      main: true
    })
  ]
}
