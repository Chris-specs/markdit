class MDContentSingleton {
    content = '# Title'

    getMDContent () {
        return this.content
    }

    setMDContent (newContent: string) {
        this.content = newContent
    }
}

const MDContent = new MDContentSingleton()

export default MDContent
