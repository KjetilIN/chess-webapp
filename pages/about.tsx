import React from 'react'
import { ProfileCard } from '../components/ProfileCard';


const about: React.FC = () => {
    return (
        <div className='flex flex-col gap-5 items-center mt-3 bg-gray-100'>
            <h1 className='text-5xl font-bold'>About the team!</h1>

            <p className='w-1/2'>
                Hey there! Thanks for stopping by our page. We're a group of students who love coding chess engines... just for the fun of it. And by "fun," we mean the sheer joy of creating terrible, buggy chess engines that barely function. <br></br> <br></br>
                
                Seriously though, we're a group of people who are passionate about chess and the challenge of building intelligent algorithms. We may not always create the best chess engines out there, but we have a great time trying! <br></br> <br></br>
                
                Our group was founded with the goal of providing a space for students to learn, share knowledge, and collaborate on projects related to chess programming. Whether you're a beginner who has never written a line of code in your life or a seasoned pro looking to help us create the next great disaster of a chess engine, we welcome you to join our community. <br></br> <br></br>
            
                If you're interested in joining our group and experiencing the joy of creating bad chess engines with us, don't hesitate to reach out! We look forward to meeting you and helping you (or at least trying to) become a chess programming pro.<br></br> <br></br>
            </p>

            <ProfileCard name='Kjetil Indrehus' profession='NTNU Data Ingeniør' profilepic='kjetil.jpeg'></ProfileCard>
            <ProfileCard name='Sondre Pedersen' profession='NTNU Datateknologi' profilepic='sondre.jpg'></ProfileCard>
        </div>
    )
}


export default about;