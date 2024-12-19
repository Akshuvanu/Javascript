
class Field {
    constructor(field) {
      this.field = field;
      this.playerPos = [0, 0];
    }
    print() {
        if (typeof console.clear === 'function') {
          console.clear(); // Only clear the console if it's a valid function
        }
        this.field.forEach(row => {
          console.log(row.join(' '));
        });
      }
      
  
    checkWin() {
      const [x, y] = this.playerPos;
      return this.field[x][y] === '^';
    }
  
    checkLoss() {
      const [x, y] = this.playerPos;
      return (
        this.field[x][y] === 'O' || x < 0 || x >= this.field.length || y < 0 || y >= this.field[0].length
      );
    }
  
    move(direction) {
      const [x, y] = this.playerPos;
      switch (direction) {
        case 'up':
          if (x > 0) this.playerPos = [x - 1, y];
          break;
        case 'down':
          if (x < this.field.length - 1) this.playerPos = [x + 1, y];
          break;
        case 'left':
          if (y > 0) this.playerPos = [x, y - 1];
          break;
        case 'right':
          if (y < this.field[0].length - 1) this.playerPos = [x, y + 1];
          break;
        default:
          break;
      }
    }
  
    static generateField(height, width, holePercentage = 0.2) {
      const field = Array.from({ length: height }, () => Array(width).fill('░'));
  
      let hatPlaced = false;
      while (!hatPlaced) {
        const x = Math.floor(Math.random() * height);
        const y = Math.floor(Math.random() * width);
        if (x !== 0 || y !== 0) {
          field[x][y] = '^';
          hatPlaced = true;
        }
      }
  
      const totalCells = height * width;
      const holeCount = Math.floor(totalCells * holePercentage);
      let holesPlaced = 0;
      while (holesPlaced < holeCount) {
        const x = Math.floor(Math.random() * height);
        const y = Math.floor(Math.random() * width);
        if (field[x][y] === '░' && !(x === 0 && y === 0)) {
          field[x][y] = 'O';
          holesPlaced++;
        }
      }
  
      return field;
    }
  }
  
  module.exports = Field;
  