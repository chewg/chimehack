import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import IntroPage from './components/home/IntroPage';
import ReadTextPage from './components/home/ReadTextPage';
import QuizPage from './components/home/QuizPage';
import RewardPage from './components/home/RewardPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="intro" component={IntroPage} />
    <Route path="readText" component={ReadTextPage} />
    <Route path="quizPage" component={QuizPage} />
    <Route path="rewards" component={RewardPage} />
  </Route>  
);
