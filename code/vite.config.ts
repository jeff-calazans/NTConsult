import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    Layouts({}),
    Components({
      dirs: ['src/@core/components', 'src/views/demos'],
      dts: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n', 'pinia'],
      dirs: [
        'src/store',
        'src/plugins/casl',
        'src/plugins/utils',
        'src/enums',
        'src/composables'
      ],
      vueTemplate: true,
    }),
    VueI18nPlugin({
      include: [fileURLToPath(new URL('./src/plugins/i18n/locales/**', import.meta.url))],
    }),
    DefineOptions(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
      '@validators': fileURLToPath(new URL('./src/@core/utils/validators', import.meta.url)),
      'apexcharts': fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@enums': fileURLToPath(new URL('./src/enums', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@locales': fileURLToPath(new URL('./src/locales', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@mixins': fileURLToPath(new URL('./src/mixins', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@navigation': fileURLToPath(new URL('./src/navigation', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
      '@interfaces': fileURLToPath(new URL('./src/interfaces', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@configurations': fileURLToPath(new URL('./src/configurations', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
    minify: false,
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },
})
