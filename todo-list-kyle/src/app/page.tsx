import { TodoItem } from '@/components/TodoItem'
import { prisma } from '@/db'
import Link from 'next/link'

function getTodos() {
	return prisma.todo.findMany()
}

export default async function Home() {
	const todos = await getTodos()

	// Code to create a todo
	// await prisma.todo.create({data: {id: '1', title: 'First Todo', complete: false}})

	return (
		<>
			<header className="mb-4 flex items-center justify-between">
				<h1 className="text-2xl">Todos</h1>
				<Link
					href="/new"
					className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
				>
					New
				</Link>
			</header>
			<ul className="pl-4">
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	)
}
