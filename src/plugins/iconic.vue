<script >
    import icons from './icons'
    export default {
        name: 'iconic',
        props: {
            name: String, 
            color: { type: String, default: 'currentColor' },
            options: { type: Object },
            size: String
        },
        data() {
            return {
                icons: icons
            }
        },
        methods: {
            setSize(){
                if(this.size){
                    return `font-size:${this.size}`
                }
            },
            mapClass(){
                let $class = "";
                if(this.options?.original) {
                    $class += 'original'
                }
                return $class
            },
            evaluate(svg){
                if(!svg) return;
                let elsvg = document.createElement('div');
                elsvg.innerHTML = svg;
                const nodes = elsvg.querySelector("*");
                let color = this.color || "currentColor";
                nodes.forEach(node => {
                    const haveFill = node.hasAttribute('fill') && node.getAttribute('full') !== "none";
                    const isVarFill = node.hasAttribute('fill') && node.getAttribute('full').includes("var(");

                    if(haveFill && !isVarFill){
                        node.setAttribute('fill', this.color)
                    }

                    if(node.tagname === "path" && !node.hasAttribute("fill")){
                        node.setAttribute("fill", color)
                    }

                    if(node.hasAttribute("stroke")){
                        node.setAttribute("stroke", this.color);
                    }
                });

                const html = Array.prototype.reduce.call(
                    nodes, 
                    function(html, node, count){
                        count++;
                        if(count === 1){
                            html = node.outerHtml || node.nodeValue;
                        }
                        return html;
                    },
                    ""
                );
                return html
            }, 
            myIcon(name){
                const theicon = this.evaluate(icons(name));
                return theicon ?? "?"
            }
        },
    }

</script>

<template>
    <i :class="`iconic ${mapClass()}`" :style="`${setSize()}`" v-if="name" v-html="`${myIcon(name)}`">      
    </i>
</template>

<style>
.iconic{
    &:not(.original){
        font-size: normal;
        line-height: 1em;
    }
    svg{
        width: 1em;
        height: 1em;
        vertical-align: middle;
    }
}
</style>