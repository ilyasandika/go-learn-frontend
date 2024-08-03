import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const ArticleCard = (props) => {
    return (
        <div className="basis-1/5 flex-grow inline-block bg-white rounded-xl transition duration-300 transform hover:-translate-y-2 ">
            <div className="flex flex-col">
                <div className="flex rounded-xl">
                    <img className="w-full rounded-t-xl"
                         src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"/>
                </div>
                <div className="flex flex-col px-4 py-4 border-b">
                    <h2 className="font-bold">Golang Backend Developer</h2>
                    <p className="text-sm line-clamp-2 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam asperiores, cumque, dignissimos eius eligendi fugiat hic labore natus nemo nisi nobis nostrum officiis pariatur quia quo vel vitae?</p>
                    <span className="text-sm mt-6">14 Januari 2024</span>
                </div>
                <div className="flex flex-row  px-4 py-3 gap-2 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <img className="rounded-full h-6" src="/Default_pfp.svg"/>
                        <h2 className="text-sm font-semibold">Ilyas Andika</h2>
                    </div>
                    <p className="flex flex-row gap-2 items-center"> <FontAwesomeIcon icon={faHeart} className="text-red-600 text-sm"/> <span className="text-sm ">144</span></p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
