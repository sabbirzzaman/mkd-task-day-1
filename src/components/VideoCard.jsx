import React from 'react';
import upArrow from '../images/up-arrow.png'

const VideoCard = ({card}) => {
    const {id, photo, title, username, like} = card;

    return (
        <div className="h-24 w-full py-4 px-6 mb-4 flex justify-between border items-center border-[#2e2e2e] rounded-2xl">
            <div className="flex items-center gap-6">
                <p className="text-[#666666]">{('0' + id).slice(-2)}</p>
                <img
                    src={photo}
                    className="h-16 w-16 rounded-lg"
                    alt="video thumbnail"
                />
                <h3 className="font-thin text-white text-[1.25rem] w-[22.75rem]">
                    {title}
                </h3>
                <p className="text-[#DBFD51] ml-[2.1875rem]">
                    {username}
                </p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-white font-thin">{like}</p>
                <img src={upArrow} alt="up arrow" />
            </div>
        </div>
    );
};

export default VideoCard;
