import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionsTypes from './actionsTypes';

export function saveCourse(course) {
  courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionsTypes.CREATE_COURSE,
      cource: savedCourse,
    });
  });
}
