export default function Header() {
	return (
		<nav className="bg-gray-800 fixed top-0 w-full z-50 shadow-md">
			<div className="max-w-8.5xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-1 flex items-center justify-center sm:items-stretch lg:justify-start">
						<div className="flex-shrink-0 flex items-center text-white">
							<img
								className="block lg:hidden rounded"
								src="/logo.svg"
								alt="daimond113"
								height="48"
								width="48"
							/>
							<img
								className="hidden lg:block"
								src="/logoText.svg"
								alt="daimond113"
								height="24"
								width="167"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
