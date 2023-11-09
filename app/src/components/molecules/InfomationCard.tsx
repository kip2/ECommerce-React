import IconButtons from "./IconButtons"
import { AiFillHeart} from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
// import "./ProductCard.css"

type InformationCard = {
    imgUrl: string
    name: string
    price: number
    description: string
}

const leftIcon = <AiFillHeart color="black" size={30}/>
const rightIcon = <FaCartPlus color="black" size={30}/>

// todo: bookmark時の動作を追加
const bookmarkButton = () => {}
// todo: cartbutton押下時の動作を追加
const addToCartButton = () => {}

const InformationCard: React.FC<InformationCard> = ({ name, imgUrl, price, description }) => (
    <div className="card">
        <img src={imgUrl} />
        <p className="name">{name}</p>
        <p className="price">{price}~</p>
        <div className="">
            {description}
        </div>
        <IconButtons
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onLeftButtonClick={bookmarkButton}
            onRightButtonClick={addToCartButton}
        />
    </div>
);

export default InformationCard;
