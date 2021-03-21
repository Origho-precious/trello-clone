import Board from "./components/Board/Board";
import Tile from "./components/Tile/Tile";

const App = () => {
	return (
		<div
			style={{ background: "#0079bf" }}
			className="relative pt-4 max-h-screen h-screen"
		>
			<div className="w-11/12 mx-auto relative z-50">
				<h1 className="text-4xl text-blue-300 mb-6 font-bold text-center ">
					Trello Clone
				</h1>
				<div className="flex lg:justify-between justify-center flex-wrap lg:flex-nowrap">
					<Board title="Backlog">
						<Tile />
						<Tile />
						<Tile />
					</Board>
					<Board title="TO DOs">
						<Tile />
						<Tile />
						<Tile />
					</Board>
					<Board title="DOING">
						<Tile />
						<Tile />
						<Tile />
					</Board>
					<Board title="DONE">
						<Tile />
						<Tile />
						<Tile />
					</Board>
				</div>
			</div>
		</div>
	);
};

export default App;
