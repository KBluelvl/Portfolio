'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail  = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/send?email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`);
            if(response.ok) {
                setStatus("success");
            } else {
                const data = await response.json();
                setStatus("error");
                setErrorMessage(data.error);
            }
        } finally {
            setLoading(false);
        }
    };
    return (<>
        <div className="grid md:grid-cols-2 my-12">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Contact me !</h1>
                <p className="text-[#ADB7BE] max-w-lg mb-4">
                    I&apos;m currently looking for an end-of-study internship to complete my bachelor&apos;s degree in Computer
                    Science at HE2B ESI. The internship would run for at least 15 weeks, from February to May. If you 
                    know of any <b>opportunities</b> or have any questions, feel free to reach out! I&apos;m always happy to connect 
                    and will do my best to respond quickly!
                </p>
                <div className="flex space-x-3">
                    <Link href="https://github.com/KBluelvl">
                        <Image src="/image/github.jpg" width={45} height={45} className="rounded-full mb-5"  alt="GitHub logo" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/florian-essomba-804b1b216/">
                        <Image src="/image/linkedin.jpg" width={45} height={45} className="rounded-full mb-5"  alt="Linkedin logo" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="emailId">Your email</label>
                <input type="text" id="emailId" value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm bg-[#18191E] rounded-md border border-gray-800 mb-6 p-2" 
                  placeholder="Enter your email address" />
                <label htmlFor="subjectId">Subject</label>
                <input type="text" id="subjectId" value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="text-sm bg-[#18191E] rounded-md border border-gray-800 mb-6 p-2" 
                  placeholder="Enter the subject of your message"/>
                <label htmlFor="messageId">Message</label>
                <textarea name="message" id="messageId" value={message}
                  onChange={(e) => setMessage(e.target.value)} 
                  className="text-sm bg-[#18191E] rounded-md border border-gray-800 mb-6 p-2" 
                  placeholder="Write your message here..." />
                <button className="bg-blue-800 rounded-md py-2" onClick={sendEmail}>
                    {loading ? 
                    <>
                    <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg> Sending...
                    </>
                    : "Send Message"}
                </button>
                {status === "success" && <p className="text-green-500">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-500">{errorMessage}</p> }
            </div>
        </div>
        </>);
}