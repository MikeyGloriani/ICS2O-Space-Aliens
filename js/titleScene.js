/* global Phaser */

// Created by Mikey Gloriani
// Created on November 8 2022
// This is the title scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center'}
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Title Scene");
    this.load.image("titleSceneBackground", "assets/aliens_screen_image.jpg");
  }

  create(data) {    
    this.titleSceneBackgroundImage = this.add.sprite(
    0,
    0,
    "titleSceneBackground"
  ).setScale(2.75)
  this.titleSceneBackgroundImage.x = 1920 / 2
  this.titleSceneBackgroundImage.y = 1080 / 2

  this.titleSceneText = this.add.text(1920 / 2, (1080/2) + 350, 'Space Aliens', this.titleSceneTextStyle)
}

  update(time, delta) {}
}

export default TitleScene;
