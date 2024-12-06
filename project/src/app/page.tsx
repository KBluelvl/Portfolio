import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
      <main>
          <h1 className="md:text-5xl sm:text-7xl font-semibold">
            <span className="text-blue-300">Hello, I&apos;m</span>
            <div className="tracking-tight">Florian Essomba</div>
          </h1>
          <p className="md:text-2xl">Student in Application developpement</p>
          <div className="flex space-x-4 mt-1">
            <Link href="https://github.com/KBluelvl">
              <Image src="/image/github.jpg" width={45} height={45} className="rounded-full"  alt="github logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/florian-essomba-804b1b216/">
              <Image src="/image/linkedin.jpg" width={45} height={45} className="rounded-full"  alt="github logo" />
            </Link>
          </div>
          <h1 className="text-2xl sm:text-1xl font-semibold mt-20">Skills</h1>
          <div className="grid grid-cols-5">
            <div>
              <Image src="/image/icon/java.svg" width="32" height="32" className="mx-auto" alt="github logo"/>
              <p className="text-center">Java</p>
            </div>
            <div>
              <Image src="/image/icon/javascript.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">Javascript</p>
            </div>
            <div>
              <Image src="/image/icon/cpp.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">C++</p>
            </div>
            <div>
              <Image src="/image/icon/c.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">C</p>
            </div>
            <div>
              <Image src="/image/icon/laravel.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">Laravel</p>
            </div>
            <div>
              <Image src="/image/icon/android.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">Android Studio</p>
            </div>
            <div>
              <Image src="/image/icon/django.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">Django</p>
            </div>
            <div>
              <Image src="/image/icon/spring.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">Spring</p>
            </div>
            <div>
              <Image src="/image/icon/next-js.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">Next JS</p>
            </div>
            <div>
              <Image src="/image/icon/typescript.svg" width="32" height="32" className="mx-auto" alt="github logo" />
              <p className="text-center">Typescript</p>
            </div>
          </div>
      </main>
      </>
  )
}
