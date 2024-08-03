import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ArticleCard = (props) => {
    return (
        <div className="flex-1 inline-block dashboard bg-white p-8 rounded-xl">
            <div className="flex flex-row items-center gap-8">
                <div className={`flex items-center py-4 px-4 rounded-xl ${props.className}`}>
                    <FontAwesomeIcon icon={props.icon} className="text-white text-2xl" />
                </div>
                <div>
                    <h2 className="text-sm">{props.title}</h2>
                    <p className="font-bold">{props.count}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
