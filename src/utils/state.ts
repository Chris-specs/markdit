class MDContentSingleton {

    content: string = '# Title'
    
    getMDContent() {
        return this.content
    }

    setMDContent(newContent: string) {
        this.content = newContent
    }

}

// const MDContent = Object.freeze(new MDContentSingleton())
const MDContent = new MDContentSingleton()

export default MDContent
