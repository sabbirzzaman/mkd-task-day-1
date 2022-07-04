import React, { useState, useEffect } from 'react';
import MkdSDK from '../utils/MkdSDK';
import dot from '../images/ellipse.svg';
import iconLogout from '../images/icon-logout.png';
import VideoCard from '../components/VideoCard';
import arrow from '../images/arrow.png';
import Loading from '../components/Loading';

const AdminDashboardPage = () => {
    // video list
    const [data, setData] = useState(null);
    const [videos, setVideos] = useState([]);

    // pagination
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // get current date
    const date = new Date();

    const dateArr = date.toString().split(' ');
    const today = `${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`;

    var time = date.getHours() + ':' + date.getMinutes();

    // load video data
    useEffect(() => {
        const loadVideos = async () => {
            let sdk = new MkdSDK();

            const result = await sdk.callRestAPI(
                {
                    payload: {},
                    page: currentPage,
                    limit: 10,
                },
                'PAGINATE'
            );

            if (!result.error) {
                setVideos(result.list);
                setTotalPage(result.num_pages);
                setData(result);
            }
        };

        loadVideos();
    }, [currentPage]);

    if (!data) {
        return <Loading />;
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
                        <p>{time}</p>
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
                        <p className="text-[#696969] ml-[2.1875rem]">Author</p>
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

            <div className="flex justify-end gap-4 max-w-[76rem] mx-auto">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="bg-[#9BFF00] uppercase px-6 py-1 text-black rounded-lg disabled:bg-[#1D1D1D]"
                >
                    Prev
                </button>
                <button
                    disabled={currentPage === totalPage}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="bg-[#9BFF00] uppercase px-6 py-1 text-black rounded-lg disabled:bg-[#1D1D1D]"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default AdminDashboardPage;
