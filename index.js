/**
 * @class Model
 * Manages the data of the application.
 */
class Model {
  constructor() {}
}

/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
  constructor() {}
}

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class Controller {
  #model;
  #view;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }
}
