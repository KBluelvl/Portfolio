'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail  = async () => {
      const res = await fetch(`/api/send?email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`);
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
                <button className="bg-blue-800 rounded-md py-2" onClick={sendEmail}>Send Message</button>
            </div>
        </div>
        </>);
}