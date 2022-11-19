const InputView = require('./InputView');
const { Console } = require('@woowacourse/mission-utils');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #user;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#user = [];
  }

  move(move) {
    this.#user.push(move);
  }

  getUserStatus() {
    return this.#user;
  }

  isEnd(move) {
    const current = this.#user.length - 1;
    if (this.#bridge[current] !== move) return true;
    return false;
  }

  retry() {
    this.#user = [];
  }
}

module.exports = BridgeGame;
