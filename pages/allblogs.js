import Navbar from "@/pages/Navbar";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "next-sanity";
const allblogs = ({ b1 }) => {
  const router = useRouter();
  const { param1, param2 } = router.query;

    
    const bdat = b1.filter((i) => {
        return i.title==param2
   })
    console.log(bdat);
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font bg-[url('https://img.freepik.com/free-photo/old-camera-notebook-laptop-with-blue-pencil-cup-cappuccino-white-background_23-2147979092.jpg?size=626&ext=jpg&ga=GA1.1.2053258145.1698500146&semt=ais')] opacity-100 bg-opacity-5 bg-no-repeat bg-cover">
              {
                  bdat?.map((i) => {
                      return (
                          <>
                                                  <div key={i} class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                      <div class="rounded-lg h-64 overflow-hidden">
                        <img
                          src={i.image}
                          alt="content"
                                              class="object-cover object-center h-full w-full"
                                              width={1200}
                                              height={500}
                        />
                      </div>
                      <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-10 h-10"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div class="flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                            {i.Author}
                            </h2>
                            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p class="text-base">{i.designation}</p>
                          </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                          <p class="leading-relaxed text-lg mb-4">{i.Body}</p>
                          <a class="text-indigo-500 inline-flex items-center" href={i.docsLink}>
                            Go to Docs For More Info
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                          </>
                      )

                  })
       }
              
            
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "jenaj9cu",
    dataset: "production",
    useCdn: true,
  });
  const query = `*[_type == "BlogoverviewData"]`;
    const b1 = await client.fetch(query);
  return { props: { b1 } };
}
export default allblogs;
