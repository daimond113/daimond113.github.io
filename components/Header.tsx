export function Header() {
	return <header className={"w-full h-12 items-center bg-header shadow-sm static top-0 z-50 flex-grow-0 flex-shrink-0"}>
		<div className="md:ml-20 h-full flex items-center justify-center md:justify-start">
			<a href="/" className="h-2/3 hidden md:block">
				<img src="https://www.daimond113.com/logoText.svg" className="h-full" />
			</a>
			<div className="h-full p-1">
				<a href="/" className="h-full w-full block md:hidden">
					<img src="https://www.daimond113.com/logo.svg" className="rounded-md h-full w-full" />
				</a>
			</div>
		</div>
	</header>
}