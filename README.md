Desenvolvimento de jogos com Phaser.
Para adicionar gameover ao final da partida
```javascript
gameOverText = this.add.text(90, 170, 'Game Over!', { fontSize: '80px', fill: '#000' });
```
Para adicionar o Nick dos jogadores
```javascript
var nick = prompt("Insira seu nickname"); //pede o nome do jogador
```
Salvando o jogador e sua pontuação 
```javascript
function collectStar(player, star) {
            ...
            localStorage.setItem(nick , score);
        }
```
Mostrando o ranking
```javascript
 function hitBomb(player, bomb) {
            ...
            if (localStorage.length > 0) {
                var localStorageArray = new Array();
                for (i = 0; i < localStorage.length; i++) {
                    localStorageArray[i] = {key: localStorage.key(i),value: localStorage.getItem(localStorage.key(i))} //Transforma os dados salvos em local storage em um array de objetos
                }
            }
            
            var sortedArray = localStorageArray.sort(function(a,b){
                return b.value - a.value //ordena o array de objeitos para mostrar o ranking por ondem de maior para menor 
            })
            gameOverText = this.add.text(90, 300, Object.keys(sortedArray).map(function(key, value){
                return sortedArray[key].key+"--------------"+sortedArray[key].value //escreve o ranking na tela
            }), { fontSize: '40px', fill: '#001' });
            gameOverText = this.add.text(createButton());


        }
```

Botão de reiniciar partida
```javascript
  function createButton() {
            var btn = document.createElement('BUTTON'); //cria o botão na tela 
            var lbl = document.createTextNode("Reinciar");//adiciona o nome do botão
            btn.appendChild(lbl);
            btn.onclick = function () {
                location.reload();//quando clicado reinicia a partida
            }
            document.body.appendChild(btn);
        }
```
