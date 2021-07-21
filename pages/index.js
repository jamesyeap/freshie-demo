import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Team FitBob</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Freshie by{' '}
          <a className="text-blue-600">
            Team FitBob
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          A project made for{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            NUS Orbital 2021
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/demo"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Try it out! &rarr;</h3>
            <p className="mt-4 text-xl">
              Let us know your thoughts!
            </p>
          </a>

          <a
            href="https://freshieorbital.gitbook.io/team-fitbob/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Our Docs &rarr;</h3>
            <p className="mt-4 text-xl">
              Challenges we faced
            </p>
          </a>

          <a
            href="https://github.com/jamesyeap/freshie"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Our Code &rarr;</h3>
            <p className="mt-4 text-xl">
              Access our GitHub repo here!
            </p>
          </a>

          <a
            href="/demo"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Team FitBob &rarr;</h3>
            <p className="mt-4 text-xl">
              About Us.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
