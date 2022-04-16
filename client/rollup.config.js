import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
	input: 'index.js',
	output: {
		file: '../server/public/index.js',		
		sourcemap: true
	},
	plugins: [
		resolve(), 
		commonjs(),
        copy({
            targets: [
              { src: 'index.html', dest: '../server/public' }
            ]
          })
	]
};