import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/createCourse';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course });
  }

  onClickSave() {
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course); // with -> function mapDispatchToProps(dispatch) {
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render () {
    return (
      <div className="jumbotron">
      <h1>Courses 123</h1>
      {this.props.courses.map(this.courseRow)}
      <h2>Add Course</h2>
      <input
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title} />

      <input
        type="submit"
        value="save"
        onClick={this.onClickSave} />
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
