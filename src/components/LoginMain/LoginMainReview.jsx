import React from "react";

function LoginMainReview() {

    return (
        <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-60 md:h-48 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"/>
                <div className="p-6 bg-white">
                    
                    <h1 className="text-2xl font-semibold mb-3">가성비가 좋았어요</h1>
                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                        fuga! Dolores quisquam eius cum accusamus?</p>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">자세히 보기
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginMainReview;