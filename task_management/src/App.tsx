import { useState, useEffect } from 'react';
import { Task } from './components/Models/Tasks';
import { AppContext } from './context/AppContext';
import { getTasks } from './services/tasks';
import { Card } from './components/Card/Card';
import { CreateTask } from './components/CreateTask/CreateTask';
import { CardList } from './components/CardList/CardList';

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const populateTaskList = (task: [Task]) => {
		setTasks(task);
	};
	useEffect(() => {
		requestTasks();
	}, []);

	const requestTasks = () => {
		getTasks()
			.then((res) => {
				populateTaskList(res.data);
			})
			.catch((e) => console.log('error', { e }));
	};

	// const renderTask = () => {
	// 	return tasks
	// 		.map((task: Task, id: number) => (
	// 			<Card task={{ note: task.note, id: task.id }} tasks={tasks} key={id} />
	// 		))
	// 		.reverse();
	// };

	return (
		<AppContext.Provider
			value={{
				tasks,
				setTasks,
				requestTasks,
			}}
		>
			<div className='md:flex flex-row-reverse justify-center'>
				<CreateTask />
      </div>
				<CardList>
					{tasks
						.map((task: Task, id: number) => (
							<Card
								task={{ note: task.note, id: task.id }}
								tasks={tasks}
								key={id}
							/>
						))
						.reverse()}
				</CardList>
        {/* <div>{renderTask()}</div> */}
		</AppContext.Provider>
	);
}

export default App;
