/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // For Tailwind CSS v4, the plugin is simply 'tailwindcss'.
    // Autoprefixer is included by default, so it can be removed.
    'tailwindcss': {},
  },
};

export default config;
