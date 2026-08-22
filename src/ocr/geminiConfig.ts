/**
 * Cloudflare Worker endpoint that proxies card-photo recognition to the
 * Gemini API (see worker/gemini-proxy.js). Both of these are visible in the
 * public JS bundle — that's expected. WORKER_URL is not sensitive, and
 * APP_SHARED_SECRET is only a light deterrent against random strangers
 * hammering the Worker and burning through its free quota, not a real
 * secret (the actual Gemini API key stays server-side in the Worker).
 */
export const GEMINI_WORKER_URL = 'https://agricola-gemini-proxy.ttaki19052.workers.dev';
export const APP_SHARED_SECRET = 'inf3gk5mrmk57tnwnkh2k8ebkj9gbe8e';
