var gameStart = new Phaser.Scene('start');

gameStart.init = function () {
    console.log('iniciando cena  gameStart');
};

gameStart.preload = function () {

};

gameStart.create = function () {
    this.add.text(16, 16, 'game start scene', { fontSize: '32px', fill: '#fff' });

    this.add.text(16, 430, 'O jogo saiu da tela inicial e está na tela ação', { fontSize: '18px', fill: '#fff' });
    this.add.text(16, 450, 'Pressione a barra de espaço para continuar', { fontSize: '18px', fill: '#fff' });

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};

gameStart.update = function () {
    if (this.spacebar.isDown) {
        this.scene.start('gameOver');
    }
};