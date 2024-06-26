export interface BuildPaths {
    entry: string;
    html: string;
    public: string;
    output: string;
    src: string;
}

export interface BuildOptions {
    port: number;
    paths: BuildPaths,
    mode: "production" | "development";
    analyzer: boolean;
}