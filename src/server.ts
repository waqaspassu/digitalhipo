import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";

import { inferAsyncReturnType } from "@trpc/server";
import bodyParser from "body-parser";
import { IncomingMessage } from "http";
import { StripeWebhookHandler } from "./webhooks";
import nextBuild from 'next/dist/build'
import path from "path";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

export type WebhooksRequest = IncomingMessage & { rawBody: Buffer };
export type ExpressContext = inferAsyncReturnType<typeof createContext>;
const start = async () => {
  const webhookMiddleware = bodyParser.json({
    verify: (req: WebhooksRequest, _, buffer) => {
      req.rawBody = buffer;
    },
  });

  app.post("/api/webhooks/stripe", webhookMiddleware, StripeWebhookHandler);
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      secret: process.env.PAYLOAD_SECRET || "",
      onInit: async (cms) => {
        cms.logger.info(`Admin url ${cms.getAdminURL()}`);
      },
    },
  });
  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(
        'Next.js is building for production'
      )

      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))

      process.exit()
    })

    return
  }
  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    // payload.logger.info(`Next js started`)
  });
  app.listen(PORT, () => {
    // payload.logger.info(`Next js URK started on port ${process.env.NEXT_PUBLIC_SERVER_URL || 3000}`)
  });
};

start();
