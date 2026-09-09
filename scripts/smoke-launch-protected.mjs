#!/usr/bin/env node

const secret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

if (!secret) {
  console.error("VERCEL_AUTOMATION_BYPASS_SECRET ausente. Gere o Protection Bypass for Automation no projeto Vercel antes de testar Preview protegido.");
  process.exit(2);
}

const originalFetch = globalThis.fetch.bind(globalThis);

globalThis.fetch = (input, init = {}) => {
  const headers = new Headers(init.headers || {});
  headers.set("x-vercel-protection-bypass", secret);

  return originalFetch(input, {
    ...init,
    headers,
  });
};

await import("./smoke-launch.mjs");
