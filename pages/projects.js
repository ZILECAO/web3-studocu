import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <section class="text-white bg-gray-900">
      {/* Top Navigation Element */}
      <header class="bg-slate-800">
        <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <Link href="/">
              <a class="block text-blue-600">
                <span class="sr-only">Home</span>
                <svg class="h-8 w-8 text-blue-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              </a>
              </Link>
              </div>

              <div class="md:flex md:items-center md:gap-12">
                <div class="flex items-center gap-4">
                  <div class="sm:gap-4 sm:flex">
                  <Link href="/">
                  <a class="px-5 py-2.5 text-sm font-medium text-white bg-zinc-600 rounded-md shadow">
                    Connect Wallet
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body Element */}
      <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

          <p class="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
            aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
            saepe laborum.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>

          <a
            class="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>

          <a
            class="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>

          <a
            class="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>

          <a
            class="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>

          <a
            class="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>
        </div>

        <div class="mt-12 text-center">
          <a
            class="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span class="text-sm font-medium"> Get Started </span>

            <svg
              class="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

    </section>
    
  )
}