import Head from 'next/head'

export default function Demo() {
	return (
	<div className="h-auto w-auto align-center justify-center m-10">
		<Head>
			<title>Demo</title>
			<meta name="description" content="Our demo!" />
		</Head>

		<div>
				<form className="w-auto">
				<div className="flex flex-wrap mb-6">
					<div className="w-full px-3">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
						Let us know your thoughts!
					</label>
					<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Your feedback" />
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
						Submit
					</button>
					</div>
				</div>
				</form>
				
				<div className="w-auto align-center justify-center">
					<iframe
					src="https://appetize.io/embed/ztuxyt3mh0n8rqhw77d81w8kx8?device=iphone12pro"
					width="378px" height="800px" frameBorder="0" scrolling="no"></iframe>
				</div>
			</div>

		
	</div>)
}