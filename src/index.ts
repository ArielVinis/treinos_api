import "dotenv/config";

import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async function handler() {
  return { hello: "world" };
});

try {
  await fastify.listen({ port: Number(process.env.PORT), host: "0.0.0.0" });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
