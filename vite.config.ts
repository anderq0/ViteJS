import { resolve } from 'path'
export default {
    base: '/ViteJS',
    build: {
        rollupOptions: {
            input: {
                // @ts-ignore
                main: resolve(__dirname, 'index.html'),
                // @ts-ignore
                movie: resolve(__dirname, 'movie.html'),
            }
        }
    }
}