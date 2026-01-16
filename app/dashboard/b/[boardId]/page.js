import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";

const getBoard = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);

  return board;
};

export default async function FeedbackBoard({ params }) {
  const boardId = params.boardId;

  const board = await getBoard(boardId);

  return <div>{boardId}</div>;
}
