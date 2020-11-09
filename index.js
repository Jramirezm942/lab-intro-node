class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(items) {
    this.items.push(items);
    this.length = this.items.length;
    this.items.sort((a,b)=> a-b);

  }

  get(pos) {
    return this.length.pos();
    // if(this.items.length !! this.length ){
    //   throw new Error('OutOfBounds');
    // }
    
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }else {
      return this.items[Math.max];
    }
  }

  min() {
   
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  
  }

  sum() {
    returm suma = suma + this.items;
    if (suma == 0 ){
      return this.items = [0]
    }
  }

  avg() {}
}

module.exports = SortedList;
