import React from 'react'
import { Header } from '../components/Header'
import Head from 'next/head'

export default function Home() {
	return (
		<div className="flex flex-col h-screen">
			<Head>
				<title>daimond113's site</title>
			</Head>
			<Header />
			<main className='flex-grow flex flex-col items-center justify-center'>
				<h1 className="text-[#C6A3FF] font-medium text-4xl">This site does not exist</h1>
				<p className="text-violet-200">
					Please go to <a
						href="https://www.daimond113.com"
						className='text-violet-300 underline'
					>
						daimond113.com
					</a>{' '}
					instead.
				</p>
			</main>
		</div>
	)
}
