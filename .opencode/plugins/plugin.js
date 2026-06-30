import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AGENT_NAME = 'code-audit';
const AGENT_FILE = path.resolve(__dirname, `../../agents/${AGENT_NAME}.md`);

export const CodeAuditPlugin = async () => {
  let prompt;
  try {
    prompt = fs.readFileSync(AGENT_FILE, 'utf8');
  } catch {
    console.error(`[code-audit-agent] Failed to read agent prompt: ${AGENT_FILE}`);
    return {};
  }

  return {
    config: async (config) => {
      config.agent = config.agent || {};
      if (!config.agent[AGENT_NAME]) {
        config.agent[AGENT_NAME] = {
          description: 'Code quality audit for clean code, readability, and best practices',
          hidden: true,
          mode: 'subagent',
          prompt,
          tools: { bash: true, edit: true, read: true, write: true },
        };
      }
    },
  };
};
