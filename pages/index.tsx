import React from 'react'
import Header from '../components/Header'
import Link from '../components/Link'
import Section from '../components/Section'
import Head from 'next/head'

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<Head>
				<title>daimond113's site</title>
				<meta content="daimond113's site" property="og:title" />
				<meta
					content="A website about daimond113, by daimond113"
					property="og:description"
				/>
				<meta content="https://www.daimond113.com" property="og:url" />
				<meta
					content="https://avatars.githubusercontent.com/u/72147841?v=4"
					property="og:image"
				/>
				<meta content="#5da2fa" data-react-helmet="true" name="theme-color" />
			</Head>
			<style global jsx>{`
				html,
				body,
				body > div:first-child,
				div#__next,
				div#__next > div {
					height: 100%;
				}
			`}</style>
			<Header />
			<div className="max-w-8.5xl mx-auto">
				<div className="relative z-10 lg:max-w-2xl lg:w-full">
					<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h1 className="tracking-tight font-bold text-blue-700 dark:text-blue-500 text-4xl sm:text-5xl md:text-6xl">
								There isn't a site here!
							</h1>
							<p className="mt-3 text-base text-indigo-700 dark:text-indigo-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								The only site is{' '}
								<a
									href="https://www.daimond113.com"
									className="hover:underline hover:text-blue-600 text-indigo-700 dark:text-blue-300 cursor-pointer"
								>
									daimond113.com
								</a>
							</p>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}
