import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/homepage/homePage';
import AboutPage from './components/about/aboutPage.js';
import CoursePage from './components/course/coursesPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
