import { BuildOptions } from "config-types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ModuleOptions } from "webpack";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
    const isDev = options.mode === "development";

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: ["url-loader"]
    };

    const fontsLoader = {
        test: /\.(ttf|woff|woff2)$/i,
        type: "asset/resource"
    };

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                mode: "local",
                namedExport: false,
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
            },
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader"
        ]
    };

    const tsLoader = {
        test: /\.tsx$/i,
        use: ["ts-loader"],
        exclude: /node_modules/
    };

    return [
        assetsLoader,
        fontsLoader,
        tsLoader,
        scssLoader
    ]
}