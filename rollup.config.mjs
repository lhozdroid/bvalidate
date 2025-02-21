import terser from "@rollup/plugin-terser";

export default [
    {
        input: "src/bvalidate.js",
        output: [
            {
                file: "dist/bvalidate.min.js",
                format: "es"
            }
        ],
        plugins: [terser()]
    },
    {
        input: "src/bvalidate.js",
        output: [
            {
                file: "dist/bvalidate.js",
                format: "es"
            }
        ]
    }
]