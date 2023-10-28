import Navbar from "@/components/Navbar";
import { createClient } from "next-sanity";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
const blogs = ({bl}) => {
  useEffect(() => {
    console.log(bl);
  })
  return (
    <>
      <title>Akhil BLog Application</title>
      <Navbar/>
      <section class="text-gray-600 body-font overflow-hidden bg-[url('https://img.freepik.com/free-photo/old-camera-notebook-laptop-with-blue-pencil-cup-cappuccino-white-background_23-2147979092.jpg?size=626&ext=jpg&ga=GA1.1.2053258145.1698500146&semt=ais')] opacity-100 bg-opacity-5 bg-no-repeat bg-cover"  >
  <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            {
              bl.map((i) => {
                return (
                  <>
                  <div class="p-12 md:w-1/2 flex flex-col items-start">
                      <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking- p-15">{ i.Name}</span>
                      <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{ i.description}</h2>
                      <p class="leading-relaxed mb-8">{ i.Body}</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <Link class="text-indigo-500 inline-flex items-center" href={`/allblogs?param2=${i.Name}`}>Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src={i.metaImage} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
                          <span class="title-font font-medium text-gray-900">{ i.personName}</span>
                          <span class="text-gray-400 text-xs tracking-widest mt-0.5">{ i.personDes}</span>
          </span>
        </a>
      </div>
                  </>
                )
              })
            }
      
     
    </div>
  </div>
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
  const query = `*[_type == "category"]`;
  const bl = await client.fetch(query);
  return { props: { bl } };
}
export default blogs;
