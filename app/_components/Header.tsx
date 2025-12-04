'use client';

import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { useUser, UserButton } from "@clerk/nextjs";



const courses = [
  {
    id: 1,
    name: 'HTML',
    desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
    path: '/course/1/detail'
  },
  {
    id: 2,
    name: 'CSS',
    desc: 'Master CSS to style and design responsive, visually appealing web layouts.',
    path: '/course/2/detail'
  },
  {
    id: 3,
    name: 'React',
    desc: 'Build dynamic and interactive web applications using the React JavaScript library.',
    path: '/course/3/detail'
  },
  {
    id: 4,
    name: 'React Advanced',
    desc: 'Deep dive into advanced React concepts including hooks, state management, performance optimization, and architectural patterns.',
    path: '/course/4/detail'
  },
  {
    id: 5,
    name: 'Python',
    desc: 'Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.',
    path: '/course/5/detail'
  },
  {
    id: 6,
    name: 'Python Advanced',
    desc: 'Master advanced Python concepts such as OOP, modules, APIs, data processing, and automation.',
    path: '/course/6/detail'
  },
  {
    id: 7,
    name: 'Generative AI',
    desc: 'Explore prompt engineering, LLMs, embeddings, image generation, and build GenAI-powered applications.',
    path: '/course/7/detail'
  },
  {
    id: 8,
    name: 'Machine Learning',
    desc: 'Understand ML concepts, algorithms, data preprocessing, model training, evaluation, and deployment.',
    path: '/course/8/detail'
  },
  {
    id: 9,
    name: 'JavaScript',
    desc: 'Learn core JavaScript concepts, asynchronous programming, DOM manipulation, and modern ES6+ features.',
    path: '/course/9/detail'
  }
];



function Header() {

  const { user } = useUser();

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
            <Image src={'/logo.png'} alt="Logo" width={50} height={50} />
            <h2 className="font-game text-2xl font-bold">Kasi<span className="text-red-500">Code</span>Box</h2>
        </div>

         
         {/* Navbar */}
         <NavigationMenu >
              <NavigationMenuList className="gap-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-2 sm:w-[400px] md-w-[500px] lg-w-[600px] ">
                        {courses.map((courses, index) => (
                           <div key={index} className="p-2 hover:bg-accent rounded-xl cursor-pointer">
                            <h2 className="font-medium">{courses.name}</h2>
                            <p className="text-sm text-gray-500">{courses.desc}</p>
                           </div>
                        ))}
                      </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuLink>
                      <Link href={'/projects'}>Project</Link>
                </NavigationMenuLink>

                  <NavigationMenuLink>
                      <Link href={'/pricing'}>Pricing</Link>
                </NavigationMenuLink>

                  <NavigationMenuLink>
                      <Link href={'/content-us'}>Content Us</Link>
                </NavigationMenuLink>


              </NavigationMenuList>
         </NavigationMenu>



         {/* Signup Button */}

       {!user?
       <Link href={'/sign-in'}>
       <Button className="font-game text-2xl" variant={'pixel'}>Sign Up</Button> 
       </Link>
       :
        <div className="flex gap-4 items-center">
          <Button className="font-game text-2xl" variant={'pixel'}>Dashboard</Button>
          <UserButton />
        </div>}
    </div>
  ) 
}

export default Header