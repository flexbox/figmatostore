import Layout from '~/components/Layout'
import Gravatar from 'react-gravatar'
import { figmaDemo } from '~/data/index'
import BuyButton from '~/components/BuyButton'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <div className="hidden lg:block absolute scroll-bg"></div>

      <div className="relative min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-20 lg:pl-8 lg:pr-8 bg-no-repeat">
        <div>
          <div className="px-6 pt-8 pb-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none lg:pt-0 lg:pb-16">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-gray-300 uppercase">
                Figma To Store
              </div>
            </div>
          </div>
          <div className="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Now in early access
            </p>
            <h1 className="mt-3 text-3xl leading-9 font-semibold font-display text-white sm:mt-6 sm:text-4xl sm:leading-10 xl:text-5xl xl:leading-none">
              Beautiful apps screenshots,
              <br className="hidden sm:inline" />
              <span className="text-blue-500">to publish in no-time.</span>
            </h1>
            <p className="mt-2 text-lg leading-7 text-gray-300 sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl">
              I shipped dozen of apps to the Apple store and Google play.
              Everytime, it’s a pain to coordinate everyone. Let’s fix it with
              this Figma boilerplate.
            </p>
            <div className="mt-6 sm:flex sm:mt-8 xl:mt-12">
              <a
                href={figmaDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-gray-900 bg-white shadow-sm hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150 xl:text-lg xl:py-4"
              >
                Explore the preview
              </a>
              <BuyButton></BuyButton>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 relative h-64 overflow-hidden bg-gray-300 lg:hidden">
            <div className="absolute scroll-bg"></div>
          </div>
          <div className="px-6 py-8 sm:pt-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-full lg:py-0 lg:pt-24">
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Designed by
            </p>
            <div className="mt-4 sm:flex">
              <a
                href="https://twitter.com/flexbox_"
                className="flex items-center no-underline"
              >
                <div className="flex-shrink-0">
                  <Gravatar
                    className="h-12 w-12 rounded-full border-2 border-white"
                    email="dleuliette@gmail.com"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-white leading-tight">
                    David Leuliette
                  </p>
                  <p className="text-sm text-gray-500 leading-tight">
                    React Native Developer
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
