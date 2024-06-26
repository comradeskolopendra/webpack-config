import { buildDevServer } from "./build-dev-server";
import { buildLoaders } from "./build-loaders";
import { buildOutput } from "./build-output";
import { buildResolve } from "./build-resolve";
import { buildPlugins } from "./build-plugins";
import { BuildOptions } from "config-types";
import { Configuration } from "webpack";

export function buildWebpack(options: BuildOptions): Configuration {
    const { paths, mode } = options;
    const isDev = mode === "development";

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output: buildOutput(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        devtool: isDev && "inline-source-map",
        resolve: buildResolve(options),
        devServer: isDev ? buildDevServer(options) : undefined
    }
}