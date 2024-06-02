import terser from "@rollup/plugin-terser";

export default {
    input: "src/bvalidate.js",
    output: [
        {
            file: "dist/bvalidate.esm.js",
            format: "es"
        },
        {
            file: "dist/bvalidate.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [terser()]
};