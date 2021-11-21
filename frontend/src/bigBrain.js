import { brain } from 'brain.js';

class BigBrian {
    constructor(){
        this.brain = new brain.NeuralNetwork();
    }

    defaultErrorHandler = (e) => {
        console.error(e);
    }
    // data: []{inpuit: any, output: any}
    async train(data, callback, options = {}, errorHandler = this.defaultErrorHandler){
        return this.brain.trainAsync(data, options).then(callback).catch(errorHandler);
    }

    // brain.run('something') => output
    run(input) {
        return this.brain.run(input);
    }
}

export default BigBrian;