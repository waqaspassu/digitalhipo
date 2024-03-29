import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import { Users } from "./collections/Users";
import dotenv from "dotenv"
import { Products } from "./collections/products/products";

import { Media } from "./collections/products/Media";
import { ProductFiles } from "./collections/products/ProductsFiles";
import { Orders } from "./collections/Orders";


 dotenv.config({
  path:path.resolve(__dirname,"../.env")
 })

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Products, Media,ProductFiles,Orders],
  routes: {
    admin: "/sell",
  },
  admin: {
    user:"users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "--digitalHippo",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
    
  },
  
  rateLimit: {
    max: 2000,
  },

  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.join(__dirname, "payload-types.ts"),
  },
});
