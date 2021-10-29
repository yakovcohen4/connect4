import Event from './event';

class View {
  constructor() {
    this.playEvent = new Event();
    this.restartEvent = new Event();
  }

  render() {
    const board = document.createElement('div');
    board.className = 'board';

    this.cells = Array(49)
      .fill()
      .map((_, i) => {
        const cell = document.createElement('div');
        cell.className = 'cell';

        cell.addEventListener('click', () => {
          this.playEvent.trigger(i);
        });

        board.appendChild(cell);

        return cell;
      });

    this.message = document.createElement('div');

    document.body.appendChild(board);
    document.body.appendChild(this.message);
  }

  updateCell(data) {
    this.cells[data.move].style.backgroundColor = data.player;
  }

  victory(winner) {
    this.message.className = 'message';
    this.message.style.color = winner;
    this.message.textContent = `The ${winner} wins!`;

    this.restart();
  }

  draw() {
    this.message.textContent = "It's a draw!";
    this.restart();
  }

  restart() {
    const btn = document.createElement('button');
    btn.className = 'close-container';
    btn.textContent = 'Play Again';
    btn.addEventListener('click', () => {
      this.restartEvent.trigger();
    });

    this.message.appendChild(btn);
  }
}

export default View;
