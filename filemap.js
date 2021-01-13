const projectPath = './project'                                 //* path to project  
const srcFolder = `${projectPath}/src`                          //* src folder
const buildFolder = `${projectPath}/build`                                                

export default {
    "src": {
        "folder": srcFolder,
        "pages": `${srcFolder}/pages`,
        "styles": `${srcFolder}/styles`,
        "scripts": `${srcFolder}/scripts`,
        "img": `${srcFolder}/img`,
        "fonts": `${srcFolder}/fonts/*.ttf`
    },
    "build": {
        "folder": buildFolder,
        "pages": `${buildFolder}`,
        "styles": `${buildFolder}/styles`,
        "scripts": `${buildFolder}/scripts`,
        "img": `${buildFolder}/img`,
        "fonts": `${buildFolder}/fonts`
    },
    "clean": buildFolder
}