const { COMMAND } = require('../src/utils/constants');
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    while (size--) {
      const randomNumber = generateRandomNumber();
      if (randomNumber === 0) {
        bridge.push(COMMAND.DOWN);
        continue;
      }
      bridge.push(COMMAND.UP);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
