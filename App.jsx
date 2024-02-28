import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'


function Restaurant(){
    return(
        <>
        <h1 className='text-5xl font-serif bg-green-500 text-black cursor-pointer text-center'>LIST OF ANIME'S</h1>

        <div className='w-full mx-auto my-12 grid grid-cols-2 grid-rows-10 md:grid-cols-4 md:grid-rows-7 gap-4 px-4'>

        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.WFJ_ja7xHwNxhAgDPVuk6AHaDt&pid=Api&P=0&h=220" alt="dsh" /><h4 className='text-white font-medium text-3xl m-2 text-center'>One Piece</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/one-piece-ov8/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/one-piece-3">Read Manga</a></div></div>

        
        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse3.mm.bing.net/th?id=OIP.ZFyS2XACBvhsu1YqXugs8AHaFj&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Naruto</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://aniwatch.to/naruto-677?ref=search">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/naruto-colored-edition-55924">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse3.mm.bing.net/th?id=OIP.ZiLsoqpSCoHWzNHmd06qtQHaE5&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Bleach</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/bleach-6j9/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/bleach-color-edition-55958">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.UGCjpEphFizJ-teFFTEoNwHaFP&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>AOT</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/filter?keyword=attack+on+titan">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/attack-on-titan-37">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse3.mm.bing.net/th?id=OIP.wCf-id9LOQHZASUbW0kOXgHaD5&pid=Api&P=0&h=220" alt="dish"/><h4 className='text-white font-medium text-3xl m-2 text-center'>JJK</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/jujutsu-kaisen-32n8/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/jujutsu-kaisen-168">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.kJfos8NiSlAVXa2i5jFD4wHaEK&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Oregairu</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/my-teen-romantic-comedy-snafu-j83/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.XCJjvj-C7VAnrPkxTZ7VpgHaEK&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Re:zero</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/rezero-starting-life-in-another-world-jv78/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse3.mm.bing.net/th?id=OIP.CpaF6NbBtSPTJO5qGulcEwHaEK&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Lookism</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/gaiken-shijou-shugi-zlk2p/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/lookism-754">Read Manga</a></div></div>

        
        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse1.mm.bing.net/th?id=OIP.M4snptIVZSWbeONJ8XsGSQHaDt&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Death Note</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/death-note-z02/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/death-note-43">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.NYNz4n2JvymPIPpr7vLrTQHaEK&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Tomodachi Game</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/tomodachi-game-jvvw2/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/tomodachi-game-455?ref=search">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse1.mm.bing.net/th?id=OIP.T-itD-PvHnrlLLy9ctP_CAHaEK&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Tokyo Revengers</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/tokyo-revengers-vpq4/ep-0">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/todai-revengers-56156?ref=search">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse3.mm.bing.net/th?id=OIP.I4671bzdtUP9EGlo1bRFkQHaEK&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Akame Ga Kill</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/akame-ga-kill-908/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/akame-ga-kill-883?ref=search">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.rGJpQTXViPFSVv4i4v1FGwHaEm&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>BLUE LOCK</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/blue-lock-2o2mq/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/blue-lock-225">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.xHhXOQ4EezDHId70AEIOgAHaEK&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Chainsaw Man</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black bg-cover font-bold'><a href="https://zorox.to/watch/chainsaw-man-8o9q/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/chainsaw-man-96?ref=search">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse4.mm.bing.net/th?id=OIP.aHjRaOQoFv1DmceDPZ7R7AHaEo&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Horimiya</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black font-bold'><a href="https://zorox.to/watch/horimiya-m0o8/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/horimiya-121">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://tse2.mm.bing.net/th?id=OIP.Hzl8K8Vy6mijKpCYwzEMGQHaFj&pid=Api&P=0&h=220" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>BORUTO</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black font-bold'><a href="https://zorox.to/watch/boruto-naruto-next-generations-97vm/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/boruto-naruto-next-generation-8419">Read Manga</a></div></div>


        <div className='bg-gray-600 cursor-pointer h-80 hover:opacity-80 m-auto p-2 rounded-2xl'><img className='h-40 w-80 rounded-md' src="https://up.yimg.com/ib/th?id=OIP.uBq3dJL-rzCm99pfKBHI0QHaEu&%3Bpid=Api&rs=1&c=1&qlt=95&w=195&h=124" alt="dish" /><h4 className='text-white font-medium text-3xl m-2 text-center'>Black Clover</h4><div className=' bg-yellow-500 cursor-pointer mx-4 my-2 rounded-md text-center text-black font-bold'><a href="https://zorox.to/watch/black-clover-v2k6/ep-1">Watch</a></div><div className=' bg-yellow-500 cursor-pointer rounded-md text-center text-black bg-cover font-bold'><a href="https://mangareader.to/black-clover-1469">Read Manga</a></div></div>
        
        
        </div>
        
        </>
    )
}

export default Restaurant