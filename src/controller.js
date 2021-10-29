import Model from './model';
import View from './view';

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    this.view.restartEvent.addListener(() => {
      document.querySelector('.board').remove();
      document.querySelector('.message').remove();

      const app = new Controller();
      app.run();
    });
    this.view.playEvent.addListener(move => {
      this.model.play(move);
    });

    this.model.updateCellEvent.addListener(data => {
      this.view.updateCell(data);
    });
    this.model.victoryEvent.addListener(winner => {
      this.view.victory(winner);
    });
    this.model.drawEvent.addListener(() => {
      this.view.draw();
    });
  }

  run() {
    this.view.render();
  }
}

export default Controller;
