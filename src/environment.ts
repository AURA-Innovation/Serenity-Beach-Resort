/**
 * Centralized environment labels for client-side usage.
 * Store non-sensitive values here and import where needed.
 */
export const ENV = {
  VAPI_API_KEY: "cf022073-8795-431b-9aa1-8acef8ee9d50",
  VAPI_ASSISTANT_ID: "899066b1-1e06-4e00-acf8-722cf59c9ae1",
} as const;

export type Env = typeof ENV;