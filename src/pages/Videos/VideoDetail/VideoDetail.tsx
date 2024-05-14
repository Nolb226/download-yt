import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import DownloadButton from '../../../components/buttons/DownloadButton'
import VideoNotFound from './VideoNotFound'

function VideoDetail() {
    const { data } = useLoaderData() as { data: any }
    return (
        <Suspense fallback={<div>test</div>}>
            <Await resolve={data} errorElement={<VideoNotFound />}>
                {(app) => {
                    return (
                        <>
                            <div className="">{app}</div>
                            <div className=" container  mt-8 rounded-xl bg-white p-5 shadow-main">
                                <div className="text-center">
                                    <span className="mb-5 inline-block text-center text-5xl font-bold">
                                        Test
                                    </span>{' '}
                                    <span className="text-base font-bold text-gray-500">
                                        (00:00:37)
                                    </span>
                                </div>
                                <div className="flex grid-cols-2 gap-x-2.5 md:grid">
                                    <div className="flex flex-col gap-4">
                                        <img
                                            className=" w-full rounded-xl object-cover"
                                            src="https://i.ytimg.com/vi/pShSyUm-ixg/mqdefault.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="">
                                            <span className="text-base font-bold">
                                                Download Videos
                                            </span>
                                            <div className="flex">
                                                <DownloadButton
                                                    downloadUrl=""
                                                    extension="mp4"
                                                    resolution="720p"
                                                    type="video"
                                                    size={13.88}
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <span className="text-base font-bold">
                                                Download Mp3
                                            </span>
                                            <div className="flex"></div>
                                        </div>
                                        <div className="">
                                            <span className="text-base font-bold">
                                                Download Caption
                                            </span>
                                            <div className="flex"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }}
            </Await>
        </Suspense>
    )
}

export default VideoDetail
