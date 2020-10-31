import React from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import NotFoundPage from '../components/NotFoundPage';
import UsersPage from '../components/UsersPage';
import EditUserPage from '../components/EditUserPage';
import AddUserPage from '../components/AddUserPage';
import Header from '../components/Header';
import TasksPage from '../components/TasksPage';
import AddTaskPage from '../components/AddTaskPage';
import EditTaskPage from '../components/EditTaskPage';

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Header />
			<Switch>
                <Route path="/" component={UsersPage} exact={true} />
				<Route path="/createUser" component={AddUserPage} />
				<Route path="/editUser/:id" component={EditUserPage} />
				<Route path="/userTasks/:id" component={TasksPage} />
				<Route path="/createTask/:id" component={AddTaskPage} />
				<Route path="/editTask/:id" component={EditTaskPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
