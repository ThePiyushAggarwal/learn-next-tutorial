type TodoItemProps = {
	id?: string
	title: string
	complete: boolean
}

function TodoItem({ complete, title, id }: TodoItemProps) {
	return (
		<li className="flex items-center gap-1">
			<input id={id} type="checkbox" className="peer cursor-pointer" />
			<label
				htmlFor={id}
				className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through"
			>
				{title}
			</label>
		</li>
	)
}

export { TodoItem }
