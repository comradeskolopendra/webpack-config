import path from "path";
import webpack from "webpack";

import { BuildOptions, BuildPaths } from "config-types";
import { buildWebpack } from "./config/build-webpack";

interface EnvVars {
    mode?: "production" | "development";
    port?: number;
    analyzer?: boolean;
}

export default (env: EnvVars): webpack.Configuration => {
    const { mode, port, analyzer } = env;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src/index.tsx"),
        html: path.resolve(__dirname, "public/index.html"),
        public: path.resolve(__dirname, "public"),
        output: path.resolve(__dirname, "build"),
        src: path.resolve(__dirname, "src")
    }

    const options: BuildOptions = {
        mode: mode ?? "development",
        analyzer: analyzer,
        paths: paths,
        port: port ?? 8080
    }

    const config: webpack.Configuration = buildWebpack(options)

    return config;
}