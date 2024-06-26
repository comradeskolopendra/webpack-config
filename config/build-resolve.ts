import { BuildOptions } from "config-types";
import { Configuration } from "webpack";

export function buildResolve(options: BuildOptions): Configuration["resolve"] {
    return {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: {
            "@": options.paths.src,
        }
    }
} 