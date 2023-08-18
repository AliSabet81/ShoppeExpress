import express from "express";
import { EnvConfig } from "./configs/index.mjs";
import { DbConfig } from "./configs/db/index.mjs";
import { AuthRoutes } from "./routes/index.mjs";
import { ProductRoutes } from "./routes/index.mjs";
import fileUpload from "express-fileupload";

import cors from "cors";
import appRootPath from "app-root-path";
import { UserRoutes } from "./routes/user/index.mjs";
import { BlogRoutes } from "./routes/blog/index.mjs";
const app = express();

EnvConfig();
DbConfig();

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(appRootPath + "/uploads"));
app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fieldSize: 2 * 1024 * 1024 * 1024,
    },
  })
);
app.use("/api/auth/", AuthRoutes);
app.use("/api/products/", ProductRoutes);
app.use("/api/blogs/", BlogRoutes);
app.use('/api/user/',UserRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running at ${PORT} `);
});
