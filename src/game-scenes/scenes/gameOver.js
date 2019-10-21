var gameOver = new Phaser.Scene('gameOver');

gameOver.init = function () {
    console.log('iniciando cena  game over');
};

gameOver.preload = function () {

};

gameOver.create = function () {
    this.add.text(16, 16, 'game over scene', { fontSize: '32px', fill: '#fff' });
    this.add.text(16, 430, 'O jogo terminou', { fontSize: '18px', fill: '#fff' });
    this.add.text(16, 450, 'Pressione a barra de espaço para reiniciar', { fontSize: '18px', fill: '#fff' });
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};

gameOver.update = function () {
    if (this.spacebar.isDown) {
        this.scene.start('main');
    }
};