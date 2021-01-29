import fileMap from './filemap.js'
import browserSync from 'browser-sync'
import fs from 'fs'

function autoRoutes() 
{
    let data = {}
    fs.readdirSync(fileMap.build.pages)
    .filter(file => file.includes('.html'))
    .forEach(file=>{
        let routeName = file.replace('.html', '')
        let pathToFile = `${fileMap.build.pages}/${file}`
        console.log(`Automated created routes "${routeName}" : "${pathToFile}"`)
        data[`/${routeName}`] = `${pathToFile}`
    })
    return data
}


//* https://browsersync.io/docs/options
export default () =>
    browserSync.init({
        server : {
            baseDir : `${fileMap.build.folder}`,
            index : "pages/index.html",
            routes: autoRoutes()
        },
    })