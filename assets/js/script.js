const app = new Vue({


el: '#app',
data:{

    contatoreImg:0,

    immagini:[
        'assets/img/download1.jpg' ,
        'assets/img/download2.jpg' ,
        'assets/img/download3.jpg' ,
        'assets/img/download4.jpg' 
    ]



},
methods:{
nextImg(){
    this.contatoreImg++
    if(this.contatoreImg === this.immagini.length){
        this.contatoreImg = 0
    }
},
prevImg(){
    this.contatoreImg--
    if(this.contatoreImg < 0){
        this.contatoreImg = this.immagini.length -1
    }
}

}




});