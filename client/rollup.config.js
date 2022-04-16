import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';



const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'index.js',
	output: {
		file: '../server/public/index.js',		
		sourcemap: true
	},
	plugins: [
        replace({
            values: {
                'API_BASE_URL': JSON.stringify('/')
            },
            preventAssignment: true
            
        }),
		resolve(), 
		commonjs(),
        copy({
            targets: [
              { src: 'index.html', dest: '../server/public' }
            ]
          })
	]
};