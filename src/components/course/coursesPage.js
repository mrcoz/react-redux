import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/createCourse';
import CourseList from './courseList.js';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render () {
    const {courses} = this.props;
    return (
      <div className="jumbotron">
      <h1>Courses:</h1>
      <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)) without bindActionCreators
    actions: bindActionCreators(courseActions, dispatch)
  };
}
//const connectStateAndProps = connect(mapStateToProps,mapDispatchToProps);
//export default connectStateAndProps(CoursePage);
// Same as Above...
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);

//export default connect(mapStateToProps)(CoursePage);
