import React, { useState, useEffect } from 'react';
import MkdSDK from '../utils/MkdSDK';
import dot from '../images/ellipse.svg';
import iconLogout from '../images/icon-logout.png';
import VideoCard from '../components/VideoCard';
import arrow from '../images/arrow.png'

const AdminDashboardPage = () => {
    // video list
    const [videos, setVideos] = useState([]);

    // get current date
    const date = new Date().toString().split(' ');
    const today = `${date[2]} ${date[1]} ${date[3]}`;

    // load video date
    useEffect(() => {
        const loadVideo = async () => {
            let sdk = new MkdSDK();
            const result = await sdk.video(1, 10);

            if (!result.error) {
                setVideos(result.list);
            }
        };

        loadVideo();
    }, []);

    if (!videos) {
        return;
    }

    return (
        <section className="w-full h-full pb-32 bg-[#111111]">
            <div className="max-w-[76rem] mb-[4.5rem] mx-auto">
                <div className="flex justify-between text-white h-[6rem] items-center">
                    <h2 className="text-5xl font-black">APP</h2>
                    <button className="bg-[#9BFF00] text-[#050505] rounded-[2.5rem] flex items-center gap-1 font-thin px-6 py-3">
                        <img src={iconLogout} alt="logout" />
                        Logout
                    </button>
                </div>
            </div>

            <div className="max-w-[76rem] mb-2 mx-auto">
                <div className="flex justify-between text-white h-[5.5rem] items-center">
                    <h2 className="text-[2.5rem] font-thin">
                        Today’s leaderboard
                    </h2>

                    <div className="bg-[#1D1D1D] font-thin p-4 flex gap-4 items-center rounded-2xl">
                        <p>{today}</p>
                        <img src={dot} alt="ellipse mark" />
                        <p className="uppercase px-[.625rem] py-1 bg-[#9BFF00] text-black rounded-lg">
                            Submissions OPEN
                        </p>
                        <img src={dot} alt="ellipse mark" />
                        <p>{'11:34'}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[76rem] mb-2 mx-auto">
                
                <div className="px-6 h-[2.1875rem] w-full mb-4 flex justify-between">
                        <div className="flex items-center gap-6">
                            <p className="text-[#696969]">#</p>
                            <p className="font-thin text-[#696969] w-[28.125rem]">
                                Title
                            </p>
                            <p className="text-[#696969] ml-[2.1875rem]">
                                Author
                            </p>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <p className="text-[#696969] font-thin">Most Liked</p>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>

                {videos.map((video) => (
                    <VideoCard key={video.id} card={video}></VideoCard>
                ))}
            </div>
        </section>
    );
};

export default AdminDashboardPage;
