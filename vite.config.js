import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      https: false,
      host: '0.0.0.0',
      port: 3000,
      // 프록시 설정
      proxy: {
        '/v1/api': {
          target: 'http://dev-pick-backend-env-17.eba-mt3fby3b.ap-northeast-2.elasticbeanstalk.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/v1\/api/, ''),
          secure: false,
          ws: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
