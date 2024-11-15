/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Benchmark%20summarized_owner:SQstgEv2Z5ua@ep-cool-pond-a5t6mz7d.us-east-2.aws.neon.tech/Benchmark%20summarized?sslmode=require',
    }
  };