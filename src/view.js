import Event from './event';

class View {
  constructor() {
    this.playEvent = new Event();
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
    this.message.className = 'message';

    document.body.appendChild(board);
    document.body.appendChild(this.message);
  }

  updateCell(data) {
    this.cells[data.move].style.backgroundColor = data.player;
  }

  victory(winner) {
    this.message.innerHTML = `${winner} wins!`;
  }

  draw() {
    this.message.innerHTML = "It's a draw!";
  }
}

export default View;
