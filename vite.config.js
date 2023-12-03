import { defineConfig } from 'vite'
import * as glob from 'glob';
import path, { resolve } from 'node:path';
import { ViteMinifyPlugin} from 'vite-plugin-minify'
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';
import handlerBarsContext from './variables.js';
export default defineConfig({
    base: "/WebAHPRA/",
    appType: 'mpa',
    build: {
        rollupOptions: {
            input: Object.fromEntries(
                [...glob.sync('./!(dist)/*.html').map(file => [
                    file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                ]),
                ...glob.sync('./*.html').map(file => [
                    file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                ])]
            ),
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context: handlerBarsContext,
        }),
        htmlPurge({}),
        ViteMinifyPlugin({}),
    ]
})