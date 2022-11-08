/* global Phaser */

// Created by Mikey Gloriani
// Created on November 8 2022
// This is the Phaser3 game configuration file

/**
 * Start Phaser game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  //set background color
  backgroundColor: 0x5f6e7a,
};

const game = new Phaser.Game(config);
console.log(game);
