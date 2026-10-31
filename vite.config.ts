import react from '@vitejs/plugin-react';
import { defineConfig, Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Vite plugin that scans public/images/logos at build/dev time and exposes
 * available logo filenames via virtual:logo-manifest so year-range logos
 * like `navi2010-2020.svg` or `furia2019.webp` are resolved instantly without 404 requests.
 */
function logoManifestPlugin(): Plugin {
  const virtualModuleId = 'virtual:logo-manifest';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  const logosDir = path.resolve(import.meta.dirname, 'public/images/logos');

  const getLogoFiles = (): string[] => {
    try {
      if (!fs.existsSync(logosDir)) return [];
      return fs
        .readdirSync(logosDir)
        .filter(f => /\.(svg|webp|png|jpg|jpeg)$/i.test(f));
    } catch {
      return [];
    }
  };

  return {
    name: 'vite-plugin-logo-manifest',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const files = getLogoFiles();
        return `export const AVAILABLE_LOGO_FILES = ${JSON.stringify(files)};`;
      }
    },
    configureServer(server) {
      server.watcher.add(logosDir);
      const reloadVirtual = (filePath: string) => {
        if (filePath.includes(path.normalize('public/images/logos'))) {
          const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
            server.ws.send({ type: 'full-reload' });
          }
        }
      };
      server.watcher.on('add', reloadVirtual);
      server.watcher.on('unlink', reloadVirtual);
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), logoManifestPlugin()],
});
