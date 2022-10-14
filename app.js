Vue.createApp({
    data(){
        let perspective = 100;
        let rotateX = 0;
        let rotateY = 0;
        let rotateZ = 0;
        let backgroundColor = "#8d81f3";
        return {
            perspective,
            rotateX,
            rotateY,
            rotateZ,
            backgroundColor
        }
    },
    computed: {
        box() {
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `,
                backgroundColor: this.backgroundColor
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.backgroundColor = "#8d81f3";
        },
        async copy() {
            let str = `
                transform: 
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
            `;
            await navigator.clipboard.writeText(str);
            alert('Style copied to the clipboard.')
        }
    }
}).mount("#app")