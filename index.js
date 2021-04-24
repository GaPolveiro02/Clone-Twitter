let tweetButton = document.querySelector(".tweetButton");
let outrosTweets = document.querySelector(".outros-tweets")


tweetButton.addEventListener("click", ()=>{
    
    let inputString = document.querySelector("#inputTweet").nodeValue

    console.log(inputTweet.value)

    addNewTweet(inputString)
}) 
    


function addNewTweet(x) {
    
    let outrosTweets = document.querySelector(".outros-tweets")

    outrosTweets.innerHTML = `
    <div class="outro-tweet">
                    <div class="msg-perfil">
                        <div class="outro-perfil">
                            <img src="http://www.colegiodepadua.com.br/img/user.png" alt="">
                        </div>
                        <div class="msg-nome">
                            <span><p><b>Gabriel usuario</b><i class="circulo-checado"></i>@qualquerusuario,<small>yesterday</small></p></span>
                            <div class="mensagem">
                                <p>${x}</p>
                            </div>
                        </div> 
                    </div>
                    <div class="mais-opcoes">
                        <i class="elipse"></i>
                    </div>

                    <div class="imagem-resposta">
                        <img src="https://i.pinimg.com/474x/d2/90/e7/d290e76993c580887261c03d050459bc.jpg" alt="">
                    </div>

                    <div class="sua-reacao">
                        <div class="comment"><i class="icone-comentario"></i><p>comentario</p></div>
                        <div class="retweet"><i class="icone-retweet"></i><p>retweet</p></div>
                        <div class="like"><i class="icone-like"></i><p>like</p></div>
                        <div class="save"><i class="icone-upload"></i>salvar<p></p></div>
                    </div>
                </div>
    `

    console.log("funfou")
}