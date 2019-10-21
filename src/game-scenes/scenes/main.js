
var mainScene = new Phaser.Scene('main');

mainScene.init = function () {
    console.log('iniciando cena  main');
};

mainScene.preload = function () {

};

mainScene.create = function () {
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.add.text(16, 16, 'main scene', { fontSize: '32px', fill: '#fff' });
    this.add.text(16, 450, 'Pressione a barra de espaço para continuar', { fontSize: '18px', fill: '#fff' });
};

mainScene.update = function () {
    if (this.spacebar.isDown) {
        this.scene.start('start');
    }
};
