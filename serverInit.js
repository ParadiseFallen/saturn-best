import fileMap from './filemap.js'
import browserSync from 'browser-sync'
//* https://browsersync.io/docs/options
export default () =>
    browserSync.init({
        server : {
            baseDir : `${fileMap.build.folder}`,
            index : "pages/index.html"
        }
    })