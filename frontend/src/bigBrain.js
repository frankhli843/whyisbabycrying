// creating a network
const context = require('brain');


class BigBrian {
    constructor(){
        const brain = new brain.NeuralNetwork();
    }

    defaultErrorHandler = (e) => {
        console.error(e);
    }

    async train(callback, data, options = {}, errorHandler = defaultErrorHandler){
        return brain.trainAsync(data, options).then(callback).catch(errorHandler);
    }

    // brain.run('something') => output
    brain() {
        return this.brain;
    }
}