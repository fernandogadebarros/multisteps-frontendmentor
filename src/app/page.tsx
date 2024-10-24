import { ButtonSteps } from '@/components/ButtonSteps'
import { Sidebar } from '@/components/Sidebar'
import { Views } from '@/components/Views'

export default function Home() {
  return (
    <main className="flex h-screen lg:items-center lg:justify-center">
      <div className="flex w-full flex-col rounded-2xl lg:w-auto lg:flex-row lg:gap-12 lg:bg-neutral-white lg:p-4">
        <Sidebar />

        <section className="mx-4 -mt-16 flex rounded-lg bg-neutral-white px-6 py-8 lg:mx-0 lg:mt-0 lg:h-full lg:rounded-none lg:px-0 lg:py-0">
          <div className="flex w-full flex-col justify-between pt-0 lg:h-[568px] lg:w-[550px]">
            <Views />
            <ButtonSteps desktop className="pb-8 lg:w-[480px]" />
          </div>
        </section>
        <ButtonSteps className="pb-8 lg:w-[480px]" />
      </div>
    </main>
  )
}
