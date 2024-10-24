import Image from 'next/image'

export const ThankYou = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative h-14 w-14 lg:h-20 lg:w-20">
        <Image src="./icon-thank-you.svg" alt="Thank You Icon" fill />
      </div>
      <h2 className="mb-3 mt-6 font-ubuntu-bold text-2xl text-blue-marine lg:mt-8 lg:text-3xl">
        Thank you!
      </h2>
      <p className="text-center text-neutral-dark">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}
