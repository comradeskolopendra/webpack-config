import { BuildOptions } from "config-types";
import { Configuration } from "webpack";

export function buildOutput(options: BuildOptions): Configuration["output"] {
    return {
        path: options.paths.output,
        filename: "[name].[contenthash].js",
        clean: true
    }
}