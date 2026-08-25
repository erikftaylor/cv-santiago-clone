import FALLBACK from '../../chatbot-prompt.txt'
import { resolveIdentityTokens } from './identity.js'

export async function getSystemPrompt(langfuse) {
  try {
    if (langfuse) {
      const prompt = await langfuse.getPrompt('chatbot-system', undefined, {
        type: 'text', label: 'production', cacheTtlSeconds: 300,
      })
      // Resolve identity tokens on the Langfuse copy too, so the prompt stored
      // remotely stays identity-free and portable.
      return { text: resolveIdentityTokens(prompt.prompt), version: prompt.version }
    }
  } catch { /* fallback to file */ }
  return { text: resolveIdentityTokens(FALLBACK), version: 'file' }
}
