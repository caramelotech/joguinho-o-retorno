/**
 * Setup para resolver path aliases no ts-node
 * Registra os caminhos antes de carregar o servidor
 */

import { addAliases } from 'module-alias';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

addAliases({
  '@': path.join(__dirname, 'src'),
  '@shared': path.join(__dirname, 'src/shared'),
  '@server': path.join(__dirname, 'src/server'),
  '@client': path.join(__dirname, 'src/client'),
});
