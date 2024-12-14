import Image from "next/image";

export default function Skills() {
    return (<>
        <h1 className="text-2xl sm:text-1xl font-semibold mt-20 mb-20 text-center">Skills</h1>
          <div className="grid grid-cols-5 gap-1 text-xs">
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/java.svg" width="32" height="32" className="mx-auto" alt="Java logo"/>
              <p className="text-center ">Java</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/javascript.svg" width="32" height="32" className="mx-auto" alt="Javascript logo"/>
              <p className="text-center text-xs">Javascript</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/cpp.svg" width="32" height="32" className="mx-auto" alt="C++ logo"/>
              <p className="text-center text-xs">C++</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/c.svg" width="32" height="32" className="mx-auto" alt="C logo"/>
              <p className="text-center text-xs">C</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/laravel.svg" width="32" height="32" className="mx-auto" alt="Laravel logo"/>
              <p className="text-center text-xs">Laravel</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/android.svg" width="32" height="32" className="mx-auto" alt="Android logo"/>
              <p className="text-center text-xs">Android Studio</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/django.svg" width="32" height="32" className="mx-auto" alt="Django logo"/>
              <p className="text-center text-xs">Django</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/spring.svg" width="32" height="32" className="mx-auto" alt="Spring logo"/>
              <p className="text-center text-xs">Spring</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <svg height="32px" viewBox=".5 -.2 1023 1024.1" width="32px" xmlns="http://www.w3.org/2000/svg" className="nextIcon mx-auto">
                <path  d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"/>
                <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"/>
              </svg>
              <p className="text-center text-xs">Next JS</p>
            </div>
            <div className="hover:bg-hoverIcon">
              <Image src="/image/icon/typescript.svg" width="32" height="32" className="mx-auto" alt="Typescript logo"/>
              <p className="text-center text-xs">Typescript</p>
            </div>
          </div>
    </>)
}