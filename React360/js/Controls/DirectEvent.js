const observers = {};

export default DirectEvent = {
  addEventListener: (event, func) => {
    if(!observers[event]){
      observers[event] = [];
    }
    observers[event].push(func);
  },
  removeEventListener: (event, func) => {
    if(observers[event]){
      observers[event] = observers[event].filter( (f) => {
        return f !== func;
      });
    }
  },
  fire: (event, params) => {
    if(observers[event]){
      observers[event].forEach( (observer) => {
        observer(params);
      });
    }
  }
};
