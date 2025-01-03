import adapter from '@sveltejs/adapter-static';
import { preprocess } from 'svelte-preprocess';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: dev ? '' : '/project-gift' // Reemplaza 'mi-proyecto-svelte' con el nombre de tu repositorio
    }
  },
  preprocess: preprocess()
};