/**
 * Centralized environment labels for client-side usage.
 * Store non-sensitive values here and import where needed.
 *
 * Note: YOUR_PRIVATE_API_KEY should only be used server-side.
 */
export const ENV = {
  YOUR_PUBLIC_API_KEY: "0cee330c-cb3a-4e47-95fe-4a1a068c35ab",
  YOUR_PRIVATE_API_KEY: "cf022073-8795-431b-9aa1-8acef8ee9d50",
  YOUR_ASSISTANT_ID: "899066b1-1e06-4e00-acf8-722cf59c9ae1",
  YOUR_VAPI_AGENT_NUMBER: "+14069918621",
} as const;

export type Env = typeof ENV;