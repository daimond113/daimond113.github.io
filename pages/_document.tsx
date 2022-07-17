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
					<meta name="robots" content="noindex" />
					<meta name="googlebot" content="noindex" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
					<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
					<meta content="daimond113's website" property="og:title" />
					<meta
						content="daimond113's personal website."
						property="og:description"
					/>
					<meta content="https://www.daimond113.com" property="og:url" />
					<link rel="icon" href="https://www.daimond113.com/favicon.ico" />
					<meta
						content="https://github.com/daimond113.png"
						property="og:image"
					/>
					<meta content="#1E0F40" data-react-helmet="true" name="theme-color" />
				</Head>
				<body className="bg-[#0F0F0F]">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
