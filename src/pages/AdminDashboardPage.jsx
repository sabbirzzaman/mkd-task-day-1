import React from 'react';
import MkdSDK from "../utils/MkdSDK";
import dot from '../images/ellipse.svg';
import iconLogout from '../images/icon-logout.png';

const AdminDashboardPage = () => {
    // get current date
    const date = new Date().toString().split(' ');
    const today = `${date[2]} ${date[1]} ${date[3]}`;

    // load video date
    const loadVideo = async () => {
        let sdk = new MkdSDK();
        const result = await sdk.video(1, 10);

        console.log(result);
    };

    loadVideo()

    return (
        <section className="w-full h-screen bg-[#111111]">
            <div className="max-w-[76rem] mb-[4.5rem] mx-auto">
                <div className="flex justify-between text-white h-[6rem] items-center">
                    <h2 className="text-5xl font-black">APP</h2>
                    <button className="bg-[#9BFF00] text-[#050505] rounded-[2.5rem] flex items-center gap-1 font-thin px-6 py-3">
                        <img src={iconLogout} alt="logout" />
                        Login
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
                <div className="flex justify-between text-white h-[5.5rem] items-center"></div>
            </div>
        </section>
    );
};

export default AdminDashboardPage;
