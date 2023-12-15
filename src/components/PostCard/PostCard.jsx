// import React from "react";
// import appwriteService from "../../appwrite/database";
// import { Link } from "react-router-dom";
// import {motion} from 'framer-motion'
// // import { useSelector } from "react-redux";//updating pageSlice

// function PostCard({
//     $id, title, featuredImg, author, $createdAt
// }) {
//     return (
//         <Link to={`/post/${$id}`} className="px-2">
//           <motion.div
//             className="card w-auto sm:w-auto md:w-[350px] lg:w-[350px] h-[400px] lg:h-[380px] bg-base-100 shadow-xl rounded-xl border  border-gray-400 capitalize text-center"
//             animate={{ scale: 1, y: 0}}
//             initial={{ scale: 0, y: 1000}}
//             transition={{ type: "spring", duration: 2}}
            
//           >
//             <figure>
//               {/* Render the image only if filePreview is available */}
//               <img
//                 className="h-[240px] sm:h-[200px]"
//                 src={appwriteService?.getFilePreview(featuredImg)}
//                 alt={title}
//               />
//             </figure>
//             <div className="card-body gap-0 ">
//               <h2 className="text-lg font-bold"> Title: {title}</h2>
//               <p className="text-base "> author : {author}</p>
//               {/* <p className="text-xs sm:hidden   "> Created at  : {getDate($createdAt)}</p> */}
    
//               <div className=" justify-end animate-pulse">Read more</div>
//             </div>
//           </motion.div>
//         </Link>
//       );
//     };
    
//     export default PostCard;

import React from 'react'
import appwriteService from "../../appwrite/database"
import {Link} from 'react-router-dom'

export default function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold text-black'
            >{title}</h2>
        </div>
    </Link>
  )
}
