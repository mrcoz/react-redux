import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow.js';

const CourseList = ({courses}) => {
  return (
    <table className="table">

      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
    
      <tbody>
        {courses.map(course =>
          <CourseListRow key={course.id} course={course}/>
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
