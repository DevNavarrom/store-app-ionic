import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.storeapp',
  appName: 'storeapp',
  webDir: 'dist',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    Http: {
      enabled: true,
    },
  },
};

export default config;
