import React from "react";

interface IBoardProps {
	title: string;
	children: React.ReactNode;
}

const Board: React.FC<IBoardProps> = ({ children, title }) => {
	return (
		<div className="bg-gray-200 w-80 h-full pb-4 rounded mr-6 mb-6">
			<h2 className="px-4 py-2 text-center text-black text-lg font-bold">{title}</h2>
			<article className="mx-2">{children}</article>
		</div>
	);
};

export default Board;
