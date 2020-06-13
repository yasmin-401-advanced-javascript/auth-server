'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  /**
     * get data from database
     * @param _id  
     * @return {object}
     */
    
  get(_id) {
    const queryObject = _id ?  _id  : {};
    return this.schema.find(queryObject);
  }
  /**
     * add data to database
     * @param record  
     * @return {object}
     */
    
  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }

}

module.exports = Model;