import { startApolloServer } from "./apollo/apollo.server";
import app from "./app";
import { dbConnect } from "./database/connect";
import { env } from "./env";

async function main() {
  try {
    await dbConnect();
    await startApolloServer(app);
    console.log("Apollo Server started successfully");
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
}

main().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing server");
  process.exit(0);
});
