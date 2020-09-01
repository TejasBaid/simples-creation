import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { List } from './components/list/List';
import {DataContextProvider} from './context/dataContext'
import { Sidebar } from './components/sidebar/Sidebar';
import { SidebarContextProvider } from './context/sideBarContext';
import {FormContextProvider} from './context/formContext'
import { LoadingContextProvider } from './context/LoadingContext';


const App = () => {
	return (
		<div className="App">
			<LoadingContextProvider>
				<DataContextProvider>
					<SidebarContextProvider >
						<FormContextProvider >
							<div className="body">
								<Header />
								<List />
							</div>
							<div className="sb">
								<Sidebar />
							</div>
						</FormContextProvider>
					</SidebarContextProvider>
				</DataContextProvider>
			</LoadingContextProvider>
		</div>
	);
};

export default App;
