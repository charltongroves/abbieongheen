import { EventEmitter } from "events"

class ColorStore extends EventEmitter {
    constructor() {
        super()
        this.bg = {
            backgroundColor: "#65BBDD"
        }
        this.cards = {
            one: "#FAD54F",
            two: "#D4A4CB",
            three: "#8DCD9A",
            four: "#F47951",
            five: "#80CFCE",
        }
    }
}

const codeStore = new CodeStore();

export default codeStore;