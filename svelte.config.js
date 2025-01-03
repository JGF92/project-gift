import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Configura el fallback
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '/project-gift' // Reemplaza 'mi-proyecto-svelte' con el nombre de tu repositorio
    }
  },
  preprocess: sveltePreprocess()
};