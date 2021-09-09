import Document, {
	Html,
	Main,
	Head,
	NextScript,
	DocumentContext,
} from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.png" />
					<meta
						name="description"
						content="A website about daimond113, made by daimond113."
					/>
					<meta name="robots" content="noindex" />
					<meta name="googlebot" content="noindex" />
				</Head>
				<body className="bg-gray-300 dark:bg-gray-900 h-screen">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
