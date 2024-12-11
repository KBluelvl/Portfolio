import Image from "next/image";

export default function Skills() {
    return (<>
        <h1 className="text-2xl sm:text-1xl font-semibold mt-20 mb-20 text-center">Skills</h1>
          <div className="grid grid-cols-5 gap-1">
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/java.svg" width="32" height="32" className="mx-auto" alt="Java logo"/>
              <p className="text-center max-500:text-xs">Java</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/javascript.svg" width="32" height="32" className="mx-auto" alt="Javascript logo"/>
              <p className="text-center max-500:text-xs">Javascript</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/cpp.svg" width="32" height="32" className="mx-auto" alt="C++ logo"/>
              <p className="text-center max-500:text-xs">C++</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/c.svg" width="32" height="32" className="mx-auto" alt="C logo"/>
              <p className="text-center max-500:text-xs">C</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/laravel.svg" width="32" height="32" className="mx-auto" alt="Laravel logo"/>
              <p className="text-center max-500:text-xs">Laravel</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/android.svg" width="32" height="32" className="mx-auto" alt="Android logo"/>
              <p className="text-center max-500:text-xs">Android Studio</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/django.svg" width="32" height="32" className="mx-auto" alt="Django logo"/>
              <p className="text-center max-500:text-xs">Django</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/spring.svg" width="32" height="32" className="mx-auto" alt="Spring logo"/>
              <p className="text-center max-500:text-xs">Spring</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/next-js.svg" width="32" height="32" className="mx-auto" alt="Next JS logo"/>
              <p className="text-center max-500:text-xs">Next JS</p>
            </div>
            <div className="hover:bg-gray-700">
              <Image src="/image/icon/typescript.svg" width="32" height="32" className="mx-auto" alt="Typescript logo"/>
              <p className="text-center max-500:text-xs">Typescript</p>
            </div>
          </div>
    </>)
}