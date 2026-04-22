import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["src/components/calculator/__tests__/setup.ts"],
    globals: true,
    coverage: {
      provider: "v8",
      include: [
        "src/features/zap/**/*.ts",
        "src/utils/errorDecoder.ts",
      ],
      exclude: [
        "src/**/*.test.ts",
        "src/features/zap/types.ts",
        "src/features/zap/index.ts",
        "src/features/zap/ZapDepositPanel.tsx",
        // vestingService contains Soroban RPC + Freighter integration code that
        // requires a live node — covered by integration tests, not unit coverage.
        "src/pages/vesting/vestingService.ts",
      ],
      thresholds: {
        lines: 90,
        functions: 80,
        branches: 75,
        statements: 90,
      },
    },
  },
});
