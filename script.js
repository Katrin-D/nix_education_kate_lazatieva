import { DOM } from "./DOM.js"

const dom = new DOM(window);

dom.printDOM()

class Circle extends DOM{
    constructor(height, width) {
        super(window.document);
        this.spawnCircle(height, width);

    }

    spawnCircle(height, width) {
        const circle = this.document.createElement('div')
        circle.classList.add("circle")
        circle.style = `width:${width}; height:${height};`
        circle.style.background = 'green'

        this.document.appendChild(circle)
    }
}

new Circle(30, 30)