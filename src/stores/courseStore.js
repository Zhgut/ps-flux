import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionsTypes from '../actions/actionsTypes';
const CHANGE_EVENT = 'change';
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionsTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    default:
  }
});

export default store;
