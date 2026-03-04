import path from "node:path";
import type { PrismaConfig } from "prisma";
import { PrismaPg } from "@prisma/adapter-pg";

export default {
  earlyAccess: true,
  schema: path.join("prisma", "schema.prisma"),
  migrate: {
    async adapter() {
      return new PrismaPg({
        connectionString: process.env.DATABASE_URL,
      });
    },
  },
} satisfies PrismaConfig;