require("dotenv").config();
const { PrismaPg } = require("@prisma/adapter-pg");

module.exports = {
  earlyAccess: true,
  migrate: {
    async adapter() {
      return new PrismaPg({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
      });
    },
  },
};